<?php

namespace Drupal\kokoriko\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'FullImageBlock' block.
 *
 * @Block(
 *  id = "full_image:block",
 *  admin_label = @Translation("Full Image Block"),
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
    //
    // $response['response'] = [
    //     '#type' => 'container',
    //     '#attributes' => ['id' => 'response'],
    //     '#markup' => $html
    //   ];
    //
    // return $response['response'];
    // 

    return [
      '#type' => 'html_tag',
      '#tag' => 'app-root', // Selector of the your app root component from the Angular app
      '#attached' => [
        'library' => [
          'drupal_angular/drupal_angular_lib', // To load the library only with this block
        ],
      ],
    ];
  }
}
