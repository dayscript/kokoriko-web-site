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
    $this->dashboard_path = (\Drupal::service('path.current')->getPath() == '/user/dashboard');
    $this->user_profile_path = (\Drupal::service('path.current')->getPath() == '/user');

  }

  public function servicesApiCreate(GetResponseEvent $event){
    dpm($event->name);
  }


  public function checkAuthStatus(GetResponseEvent $event) {

    if( $this->dashboard_path ){
      if( !User::load( $this->account ->id() )->get('field_no_identificacion')->value ){
        drupal_set_message(t('Por favor actualiza tus datos.'));
        $response = new RedirectResponse('/user/' . $this->account ->id() . '/edit', 301);
        $event->setResponse($response);
      }
    }


    if ( !$this->account->isAnonymous() && ( $this->current_path || $this->user_profile_path ) ) {
      $response = new RedirectResponse('/user/dashboard', 301);
      $event->setResponse($response);
    }
    return;
  }

  public static function getSubscribedEvents() {
    $events[KernelEvents::REQUEST][] = ['checkAuthStatus', 100];
    $events[KernelEvents::REQUEST][] = ['servicesApiCreate', 101];

    return $events;
  }

}
