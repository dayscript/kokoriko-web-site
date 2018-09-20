<?php

namespace Drupal\kokoriko\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

class AngularAppForm extends FormBase
{

    /**
     * {@inheritdoc}
     */
    public function getFormId()
    {
        return 'drupal_angular_app_form';
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(array $form, FormStateInterface $form_state)
    {
        $form[] = [
          '#type' => 'html_tag',
          '#tag' => 'app-root',
          '#attached' => [
            'library' => [
              'kokoriko/drupal_angular_lib',
            ],
          ],
        ];

        $form['phone_number'] = [
          '#type' => 'tel',
          '#title' => 'Example phone',
        ];

        $form['submit'] = [
          '#type' => 'submit',
          '#value' => $this->t('Submit'),
        ];
        return $form;
    }

    /**
     * {@inheritdoc}
     */
    public function validateForm(array &$form, FormStateInterface $form_state)
    {
        // TODO.
    }

    /**
     * {@inheritdoc}
     */
    public function submitForm(array &$form, FormStateInterface $form_state)
    {
        // TODO.
    }

}
