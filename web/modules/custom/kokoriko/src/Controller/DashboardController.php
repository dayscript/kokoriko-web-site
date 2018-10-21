<?php

namespace Drupal\kokoriko\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\user\Entity\User;
use Symfony\Component\Routing\RouteCollection;
use Drupal;
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

   public function __construct() {
     $this->account     = Drupal::currentUser();
     $this->user        = User::load( $this->account ->id() );
     $this->user_fields = ['field_nombres','field_apellidos','field_mail','user_picture','field_no_identificacion','field_nombres'];
     $this->output      = [];
   }

  public function Overview(){

    foreach ($this->user_fields as $key => $value) {
      $this->output[$value] = $this->user->get($value)->value;
    }


    $return = [
      '#type' => 'html_tag',
      '#tag' => 'block-accompaniments', // Selector of the your app root component from the Angular app
      '#attributes' => ['id' => 'response'],
    ];
    $return['#attached']['drupalSettings']['kokoriko']['kokorikoJS'] = $this->output;

    return $return;
  }

}
