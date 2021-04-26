<?php

namespace PhroperAdmin;

use Phroper\Router;

class AdminRouter extends Router {
    public function __construct() {
        parent::__construct();
        $this->add("content-schema/", "PhroperAdmin\\Controllers\\ContentSchema");
        $this->add("content-manager/", "PhroperAdmin\\Controllers\\ContentManager");
    }
}
