<?php

namespace Drupal\kokoriko\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\user\Entity\User;
use Symfony\Component\Routing\RouteCollection;
use Drupal;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;

/**
 * Provides a 'DashBoard' block.
 *
 * @Block(
 *  id = "DashBoard:block",
 *  admin_label = @Translation("DashBoard"),
 * )
 */
class DashBoardBlock extends BlockBase {

  public function __construct() {

    $this->account     = Drupal::currentUser();
    $this->user        = User::load( $this->account ->id() );
    $this->user_fields = ['uid','field_nombres','field_apellidos','field_no_identificacion','field_telephone','field_gender','field_birthdate','mail'];
    $this->output      = [];
  }

  /**
   * {@inheritdoc}
   */
  public function build() {

    foreach ($this->user_fields as $key => $value) {
      $this->output[$value] = $this->user->get($value)->value;
    }
    $this->output['identification'] = $this->output['field_no_identificacion'] ;
    $this->output['name'] = $this->output['field_nombres'].' '.$this->output['field_apellidos'];
    $this->output['roles'] = $this->user->getRoles();
    $this->output['asesor'] = 'kokoriko.com.co';
    $this->output['cedula_del_asesor'] = null;
    $this->output['nombre_asesor'] = null;

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
