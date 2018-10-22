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
     $this->user_fields = ['field_nombres','field_apellidos','field_mail','field_no_identificacion','field_nombres'];
     $this->output      = [];
   }

  public function Overview(){

    foreach ($this->user_fields as $key => $value) {
      $this->output[$value] = $this->user->get($value)->value;
    }

    $this->output['id'] = $this->account->id();
    $this->output['user_picture'] = '/themes/contrib/kokoriko_theme/images/default-user.jpg';

    if( $this->user->get('user_picture')->entity->getFileUri() ){
        $this->output['user_picture'] = str_replace('public://','/sites/default/files/', $this->user->get('user_picture')->entity->getFileUri());
    }

    if( $this->account->getDisplayName() ){
      $this->output['field_nombres'] = $this->account->getDisplayName();
      $this->output['field_apellidos'] = '';
    }

    if( $this->account->getLastAccessedTime() ){
      $this->output['last_access'] = $this->account->getLastAccessedTime();

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
