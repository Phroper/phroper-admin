<?php

namespace PhroperAdmin;

use Phroper\Phroper;

class PhroperAdmin {
    public static array $plugins = [];

    public static function registerUiPlugin($id, $filename) {
        self::$plugins[$id] = $filename;
    }
}
