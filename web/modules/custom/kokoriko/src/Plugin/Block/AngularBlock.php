<?php

namespace Drupal\kokoriko\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'AngularBlock' block.
 *
 * @Block(
 *  id = "Angular_block",
 *  admin_label = @Translation("Angular block"),
 * )
 */
class AngularBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
          ] + parent::defaultConfiguration();
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['inputtext'] = [
      '#type' => 'text_format',
      '#title' => $this->t('InputText'),
    '#description' => $this->t('nothing'),
      '#default_value' => $this->configuration['inputtext'],
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['inputtext'] = $form_state->getValue('inputtext');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    // $build = [];
    // $build['Angular_block_inputtext']['#markup'] = '<p>' . $this->configuration['inputtext'] . '</p>';
    //
    // return $build;
    return [
        '#type' => 'html_tag',
        '#tag' => 'app-component', // Selector of the your app root component from the Angular app
        '#attributes' => ['id' => 'response'],
    ];
  }

}
