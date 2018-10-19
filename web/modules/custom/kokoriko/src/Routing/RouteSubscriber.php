<?php
/**
 * @file
 * Contains \Drupal\node\Routing\RouteSubscriber.
 */

namespace Drupal\kokoriko\Routing;

use Drupal\Core\Routing\RouteSubscriberBase;
use Symfony\Component\Routing\RouteCollection;


/**
 * Listens to the dynamic route events.
 */
class RouteSubscriber extends RouteSubscriberBase {

  /**
   * {@inheritdoc}
   */
  protected function alterRoutes(RouteCollection $collection) {
    // As nodes are the primary type of content, the node listing should be
    // easily available. In order to do that, override admin/content to show
    // a node listing instead of the path's child links.
    $node = \Drupal::routeMatch()->getRouteName();

    $route = $collection->get('entity.node.canonical');
    dpm($route->getPath());
    
    if ($route) {
      }
  }

}
