<?php

namespace Models;

use Phapi\Model;
use Phapi;

class AuthPermission extends Model {
  public function __construct() {
    parent::__construct('permission');

    $this->fields["role"] = new Phapi\Model\Fields\RelationToOne("AuthRole", ["required" => true]);
    $this->fields["permission"] = new Phapi\Model\Fields\Text(["required" => true]);
  }

  public function getPopulateList($populate = null) {
    if (is_array($populate)) return $populate;
    return [];
  }

  public function allowDefaultService() {
    return false;
  }

  public function init() {
    if (parent::init()) {
      $rMod = Phapi::model("AuthRole");

      $rMod->init();

      $role = $rMod->findOne(["isDefault" => true]);

      if ($role) {
        $this->create([
          "role" => $role,
          "permission" => "controllers_auth_post_register"
        ]);
        $this->create([
          "role" => $role,
          "permission" => "controllers_auth_post_login"
        ]);
        $this->create([
          "role" => $role,
          "permission" => "controllers_auth_get_me"
        ]);
        $this->create([
          "role" => $role,
          "permission" => "controllers_user_put_:id"
        ]);
      }
      return true;
    }
    return false;
  }
}