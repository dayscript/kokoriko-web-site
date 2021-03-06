<?php
/**
 * @file
 * Contains \Drupal\node\Routing\RouteSubscriber.
 */

namespace Drupal\kokoriko\Routing;

use Drupal\Core\Routing\RouteSubscriberBase;
use Symfony\Component\Routing\RouteCollection;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Drupal\user\Entity\User;


/**
 * Event subscriber subscribing to KernelEvents::REQUEST.
 */
class RouteSubscriber implements EventSubscriberInterface {

  public function __construct() {
    $this->account = \Drupal::currentUser();
    $this->current_path = (\Drupal::service('path.current')->getPath() == '/kokoripesos');
    // $this->dashboard_path = (\Drupal::service('path.current')->getPath() == '/user/dashboard');
    $this->user_profile_path = (\Drupal::service('path.current')->getPath() == '/user');

  }

  public function checkAuthStatus(GetResponseEvent $event) {

    if( $this->user_profile_path ){
      if( !$this->account->isAnonymous() && !User::load( $this->account ->id() )->get('field_no_identificacion')->value ){
        drupal_set_message(t('Por favor actualiza tus datos.'));
        $response = new RedirectResponse('/user/' . $this->account ->id() . '/edit', 301);
        $event->setResponse($response);
      }
    }


    if ( !$this->account->isAnonymous() && ( $this->current_path ) ) {
      $response = new RedirectResponse('/user', 301);
      $event->setResponse($response);
    }
    return;
  }

  public static function getSubscribedEvents() {
    $events[KernelEvents::REQUEST][] = ['checkAuthStatus', 100];
    return $events;
  }

}
