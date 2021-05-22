<?php

namespace PhroperAdmin\Controllers;

use Phroper\Controller;
use PhroperAdmin\PhroperAdmin;

class PluginHandler extends Controller {
    public function __construct() {
        parent::__construct();

        $this->registerJsonHandler("/list", null, 'GET', 0, false);
        foreach (PhroperAdmin::$plugins as $key => $file)
            $this->router->addServeFile("/" . $key, $file, -1);
    }

    public function list() {
        return array_keys(PhroperAdmin::$plugins);
    }
}
