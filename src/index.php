<?php

use Phroper\Phroper;

Phroper::addInitializer(function () {
  $router = Phroper::instance()->router;

  $router->add("/admin/", "PhroperAdmin\\AdminRouter");
  $router->addServeFolder("/static/", implode(DIRECTORY_SEPARATOR, [__DIR__, "ui", "build", "static"]));
  $router->addServeFolder("/admin/", implode(DIRECTORY_SEPARATOR, [__DIR__, "ui", "build"]));
  $router->addServeFile("/admin/", implode(DIRECTORY_SEPARATOR, [__DIR__, "ui", "build", "index.html"]));
});
