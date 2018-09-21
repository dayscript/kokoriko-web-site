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

    $results = 'adasdad';

    $twig = \Drupal::service('twig');
    $template = $twig->loadTemplate(drupal_get_path('module', 'kokoriko') . '/templates/full-image-block.html.twig');
    $html = $template->render(['results'=> $results]);

    // $response['response'] = [
    //     '#type' => 'container',
    //     '#attributes' => ['id' => 'response'],
    //     '#markup' => $html
    //   ];

    // $response['response'];


    return [
      '#type' => 'html_tag',
      '#tag' => 'block-accompaniments', // Selector of the your app root component from the Angular app
      '#attributes' => ['id' => 'response'],
    //  '#markup' => $html,
      // '#attached' => [
      //   'library' => [
      //     'drupal_angular/drupal_angular_lib', // To load the library only with this block
      //   ],
      // ],
    ];
  }
}
