<?php

namespace Drupal\kokoriko\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'DomiciliosBlock' block.
 *
 * @Block(
 *  id = "domicilios_block",
 *  admin_label = @Translation("Domicilios block"),
 * )
 */
class DomiciliosBlock extends BlockBase {

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
    $form['text'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Texto'),
      '#description' => $this->t('Use para mostrar un texto'),
      '#default_value' => $this->configuration['text'],
    ];

    $form['image'] = [
      '#title' => $this->t('Imagen'),
      '#type' => 'managed_file',
      '#description' => $this->t('Use para mostrar una imagen'),
      '#required' => FALSE,
      '#upload_location' => 'public://custom-blocks/',
      '#theme' => 'image_widget',
      '#preview_image_style' => 'medium',
      '#default_value' => $this->configuration['image'],
      '#upload_validators' => array(
        'file_validate_extensions' => array('jpg png'),
      )
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['text'] = $form_state->getValue('text');
    $this->configuration['image'] = $form_state->getValue('image');

  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    // $build = [];
    // $build['domicilios_block_inputtext']['#markup'] = '<p>' . $this->configuration['inputtext'] . '</p>';
    // return $build;
    //
    $file = \Drupal\file\Entity\File::load($this->configuration['image'][0]);
    $data = array(
      'image' => $file->getFileUri(),
      'label'  => $this->configuration['text']
    );
    $return = [
      '#type' => 'html_tag',
      '#tag' => 'app-addresses', // Selector of the your app root component from the Angular app
      '#attributes' => ['id' => 'response'],
      //'#cache' => array('max-age'=> 0),
    ];

    $return['#attached']['drupalSettings']['kokoriko']['kokorikoJS'] = $data;

    return $return;
  }
}
