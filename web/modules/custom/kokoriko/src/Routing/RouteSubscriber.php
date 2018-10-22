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


/**
 * Event subscriber subscribing to KernelEvents::REQUEST.
 */
class RouteSubscriber implements EventSubscriberInterface {

  public function __construct() {
    $this->account = \Drupal::currentUser();
    $this->current_path = (\Drupal::service('path.current')->getPath() == '/kokoripesos');
  }

  public function checkAuthStatus(GetResponseEvent $event) {


    if ( !$this->account->isAnonymous() && $this->current_path) {
      $response = new RedirectResponse('/user/dashboard', 301);
      $event->setResponse($response);
    }
    return;
  }

  public static function getSubscribedEvents() {
    $events[KernelEvents::REQUEST][] = ['checkAuthStatus', 100];
    return $events;
  }

}