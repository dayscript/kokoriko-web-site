<?php
/**
 * @file
 * Contains \Drupal\resume\Form\ResumeForm.
 */
namespace Drupal\resume\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\user\Entity\User;

class ResumeForm extends FormBase {
  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'resume_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    $config = \Drupal::config('resume.settings');
   
    $form['star_uid'] = array(
      '#type' => 'textfield',
      '#title' => t('(Start) Id -> user'),
      '#required' => TRUE,
      '#default_value' => $config->get('star_uid'),
    );

    $form['end_uid'] = array(
      '#type' => 'textfield',
      '#title' => t('(End) Id -> user'),
      '#required' => TRUE,
      '#default_value' => $config->get('end_uid'),
    );    

    $form['state_generate'] = array (
      '#type' => 'radios',
      '#title' => ('On or Off Module'),
      '#required' => TRUE,
      '#default_value' => $config->get('state_generate'),
      '#options' => array('on' =>t('On'),'No' =>t('Off'),
      ),
    );

    $form['actions']['#type'] = 'actions';
    $form['actions']['submit'] = array(
      '#type' => 'submit',
      '#value' => $this->t('Generate Tokens'),
      '#button_type' => 'primary',
    );
    return $form;
  }

  /**
   * {@inheritdoc}
   */
    public function validateForm(array &$form, FormStateInterface $form_state) {
      if ($form_state->getValue('end_uid') <= $form_state->getValue('star_uid')) {
          $form_state->setErrorByName('end_uid', $this->t('Please check value (Start) Id and  (End) Id'));
      }
      if (!is_numeric($form_state->getValue('star_uid')) || !is_numeric($form_state->getValue('end_uid'))) {
          $form_state->setErrorByName('star_uid', $this->t('only numerical values'));
          $form_state->setErrorByName('end_uid', $this->t('only numerical values'));
       } 
    }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
      // Set values form
      $config = \Drupal::service('config.factory')->getEditable('resume.settings');
      $config->set('star_uid', $form_state->getValue('star_uid'))
             ->set('end_uid', $form_state->getValue('end_uid'))
             ->set('state_generate', $form_state->getValue('state_generate'))
             ->save();
      // Check Funcionality  
      if ($form_state->getValue('state_generate') == 'on') {
          for ($i = $form_state->getValue('star_uid'); $i <= $form_state->getValue('end_uid'); $i++) {
                $user = User::load($i);;
                if (isset($user)) {
                  \Drupal::moduleHandler()->load('user');
                  $user->set('field_token', user_pass_reset_url($user));
                  $user->save();
                }
          }
        drupal_set_message(t("!Success Generate Tokens"), 'status', TRUE);
      }
   }
}