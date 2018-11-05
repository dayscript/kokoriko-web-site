<?php

namespace Drupal\kokoriko\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\user\Entity\User;
use Symfony\Component\Routing\RouteCollection;
use Drupal;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;

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
     $this->user_fields = ['uid','field_nombres','field_apellidos','field_no_identificacion','field_telephone','field_gender','field_birthdate','mail'];
     $this->output      = [];
   }

  public function Overview(){

    foreach ($this->user_fields as $key => $value) {
      $this->output[$value] = $this->user->get($value)->value;
    }
    $this->output['identification'] = $this->output['field_no_identificacion'] ;
    $this->output['name'] = $this->output['field_nombres'].' '.$this->output['field_apellidos'];
    $this->output['roles'] = $this->user->getRoles();
    $this->output['asesor'] = 'kokoriko.com.co';
    $this->output['cedula_del_asesor'] = '0';
    $this->output['fecha_de_registro'] = str_replace(' ','T',date('Y-m-d H:m:s').'-05:00');;


    $return = [
      '#type' => 'html_tag',
      '#tag' => 'block-accompaniments', // Selector of the your app root component from the Angular app
      '#attributes' => ['id' => 'response'],
    ];
    $return['#attached']['drupalSettings']['kokoriko']['kokorikoJS'] = $this->output;

    return $return;
  }

}
