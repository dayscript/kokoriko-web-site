<?php

namespace Drupal\kokoriko\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'LoginFacebook' block.
 *
 * @Block(
 *  id = "LoginFacebookBlock:block",
 *  admin_label = @Translation("Facebook Login"),
 * )
 */
class LoginFacebookBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {

    $twig = \Drupal::service('twig');
    $template = $twig->loadTemplate(drupal_get_path('module', 'kokoriko') . '/templates/facebook-login.html.twig');
    $html = $template->render(['results'=> null]);


    $return = [
      '#markup' => $html,
    ];


    return $return;
  }
}
