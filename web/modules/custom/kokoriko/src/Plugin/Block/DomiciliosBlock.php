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

    $file = \Drupal\file\Entity\File::load($this->configuration['image'][0]);
    $data = array(
      'image' =>  str_replace( 'public://', '/sites/default/files/', $file->getFileUri() ),
      'label'  => $this->configuration['text']
    );

    $return = [
      '#markup' => '<div class="wrapper-block">
                      <div class="image">
                        <img src="/sites/default/files/custom-blocks/kokoriko-domicilio.png"/>
                      </div>
                      <div class="text">
                        <a href="#footer-middle"class="rotate-left">DOMICILIOS #711</a>
                      </div>
                    </div>'
    ];
 

    return $return;
  }
}
