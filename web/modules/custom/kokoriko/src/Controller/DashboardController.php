<?php

namespace Drupal\kokoriko\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\user\Entity\User;
use Symfony\Component\Routing\RouteCollection;
/**
 * Defines HelloController class.
 */
class DashboardController extends ControllerBase {


  /**
   * Display the markup.
   *
   * @return array
   *   Return markup array.
   */


  public function Overview(){

    $user = \Drupal\user\Entity\User::load(40);
    $user = $user->field_no_identificacion->value;



    $return = [
      '#type' => 'html_tag',
      '#tag' => 'block-accompaniments', // Selector of the your app root component from the Angular app
      '#attributes' => ['id' => 'response'],
    ];
    $return['#attached']['drupalSettings']['kokoriko']['kokorikoJS'] = $user;

    return $return;
  }

}
