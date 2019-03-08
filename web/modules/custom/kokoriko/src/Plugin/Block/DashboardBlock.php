<?php

namespace Drupal\kokoriko\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Url;

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

    $path = Drupal::request()->getRequestUri();
    $params = Url::fromUri("internal:" . $path)->getRouteParameters();
    $entity_type = key($params);
    $entity = Drupal::entityTypeManager()->getStorage($entity_type)->load($params[$entity_type]);

    $this->account     = Drupal::currentUser();
    $this->user        = User::load( $entity->id() );
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
    $this->output['user_login'] = $this->account->id();

    $return = [
      '#type' => 'html_tag',
      '#tag' => 'block-accompaniments', // Selector of the your app root component from the Angular app
      '#attributes' => ['id' => 'response'],
    ];
    $return['#attached']['drupalSettings']['kokoriko']['kokorikoJS'] = $this->output;

    return $return;
  }
}
