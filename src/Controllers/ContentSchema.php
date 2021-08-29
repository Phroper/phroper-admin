<?php

namespace PhroperAdmin\Controllers;

use Exception;
use Phroper\Controller;
use Phroper\Phroper;
use Throwable;

class ContentSchema extends Controller {
    public function __construct() {
        parent::__construct();

        $this->registerJsonHandler("/models");
        $this->registerJsonHandler("/model/:model", "model");
    }

    public function getName() {
        return "admin:content-schema";
    }

    public function models() {
        $models = [];
        if (is_dir(Phroper::dir("Models"))) {
            foreach (scandir(Phroper::dir("Models")) as $file) {
                if (substr($file, 0, 1) == ".") continue;
                if (is_dir($file)) continue;
                if (str_ends_with($file, ".php"))
                    $models[] = basename($file, ".php");
                if (str_ends_with($file, ".json"))
                    $models[] = basename($file, ".json");
            }
        }
        $list = Phroper::instance()->injector->listTypes();
        foreach ($list as $model) {
            if (!str_starts_with($model, "Models\\")) continue;
            $models[] = (substr($model, 7));
        }

        $models = array_map(function ($v) {
            try {
                return Phroper::model($v)->getUiInfo();
            } catch (Throwable $e) {
                return null;
            }
        }, array_unique($models));
        $models = array_filter($models, function ($v) {
            return !!$v;
        });

        $files = array_values($models);
        array_multisort(array_map(function ($v) {
            return $v["name"];
        }, $files), $files);

        return $files;
    }

    public function model($p) {
        $model = Phroper::model($p["model"]);
        return $model->getUiInfo();
    }
}
