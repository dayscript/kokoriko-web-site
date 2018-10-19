<?php

namespace Drupal\kokoriko\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Accompaniments' block.
 *
 * @Block(
 *  id = "accompaniments:block",
 *  admin_label = @Translation("Accompaniments"),
 * )
 */
class FullImageBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {

    // $results = 'adasdad';
    //
    // $twig = \Drupal::service('twig');
    // $template = $twig->loadTemplate(drupal_get_path('module', 'kokoriko') . '/templates/full-image-block.html.twig');
    // $html = $template->render(['results'=> $results]);


    //$variables
    $return = [
      '#type' => 'html_tag',
      '#tag' => 'block-accompaniments', // Selector of the your app root component from the Angular app
      '#attributes' => ['id' => 'response'],
    ];


    return $return;
  }
}
