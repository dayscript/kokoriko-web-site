<?php

/**
 * @file
 * Contains \Drupal\kokoriko\EventSubscriber\KokorikoSubscriber.
 */

// Declare the namespace for our own event subscriber.
namespace Drupal\kokoriko\EventSubscriber;

// This is the interface that we are implementing.
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

// This is a generic event class that Simple FB Connect will dispatch
use Symfony\Component\EventDispatcher\GenericEvent;

// We need these classes to interact with SimpleFbConnect and FB SDK.
use Drupal\simple_fb_connect\SimpleFbConnectFbFactory;
use Facebook\Exceptions\FacebookSDKException;
use Facebook\Exceptions\FacebookResponseException;

/**
 * Event subscriptions for events dispatched by SimpleFbConnect.
 */
class KokorikoSubscriber implements EventSubscriberInterface {

  protected $facebook;
  protected $persistentDataHandler;

  /**
   * Constructor.
   *
   * We use dependency injection get SimpleFbConnectFbFactory.
   *
   * @param SimpleFbConnectFbFactory $fb_factory
   *   For getting Facebook and SimpleFbConnectPersistentDataHandler services.
   */
  public function __construct(SimpleFbConnectFbFactory $fb_factory) {
    $this->facebook = $fb_factory->getFbService();
    $this->persistentDataHandler = $fb_factory->getPersistentDataHandler();
  }

  /**
   * Returns an array of event names this subscriber wants to listen to.
   *
   * @return array
   *   The event names to listen to
   */
  static function getSubscribedEvents() {
    $events = array();
    $events['simple_fb_connect.scope'][] = array('modifyPermissionScope');
    $events['simple_fb_connect.user_created'][] = array('userCreated');
    $events['simple_fb_connect.user_login'][] = array('userLogin');
    return $events;
  }

  /**
   * Adds Facebook permissions to the scope array.
   *
   * Facebook permissions can be found at
   * https://developers.facebook.com/docs/facebook-login/permissions
   *
   * Note that most permissions require that Facebook will review your app
   * so only add those permissions that you really need. In this example we
   * add 'public_profile' which you don't have to do since this permission
   * is always granted.
   */
  public function modifyPermissionScope(GenericEvent $event) {
    $scope = $event->getArgument('scope');
    // Add the permission here. In this example we add 'public_profile'.
    $scope[] = 'public_profile';

    $event->setArgument('scope', $scope);
  }

  /**
   * Reacts to the event when new user is created via Simple FB Connect.
   *
   */
  public function userCreated(GenericEvent $event) {
    $user = $event->getArgument('account');
    $user->set("field_nombres", 'null' );
    $user->set("field_apellidos", 'null' );
    $user->set("field_no_identificacion",0);
    $user->set("field_birthdate",time());
    $user->set("field_gender",'Mr');
    $user->set("user_picture",'');
    $user->set("field_telephone",0);
    $user->save();
    // Enter your own code here. Remember to save the user with $user->save()
    // if you modify the user object.
    $message = t('Por activar tu cuenta, te hemos obsequiado 50 kokoripesos, actualiza tus datos para disfrutarlos.');
    drupal_set_message($message);
  }
  /**
   * Reacts to the event when user logs in via Simple FB Connect.
   *
   * This example adds role 'facebook' to the user if the user
   * didn't have that role already. You have to create the role manually.
   *
   * This function also demonstrates how you can get the access token for the
   * current user and how to make your own API calls using Facebook service.
   */
  public function userLogin(GenericEvent $event) {
    $user = $event->getArgument('account');

    // Enter your code here. Remember to save the user with $user->save()
    // if you modify the user object.
    $message = t('Bienvenido');
    drupal_set_message($message);

    // Let's add a role 'facebook' for the user if she didn't have it already.
    // The role itself must obviously be first created manually.
    $user->addRole('facebook');
    $user->save();

    // Let's see how we can get make our own API calls to Facebook. We need
    // user's Facebook access token, which SimpleFbConnect has stored to session
    // for other modules.
    $access_token = $this->persistentDataHandler->get('access_token');

    if ($access_token) {
      try {
        $facebook_profile_fields = [
          'name',
          'first_name',
          'last_name',
          // 'gender',
          // 'age_range',
          // 'locale',
          // 'birthday',
          // 'email',
        ];

        $graph_node = $this->facebook->get('/me?fields='.implode($facebook_profile_fields,","), $access_token)->getGraphNode();

        $name = explode(' ',$graph_node->getField('name') );

        if( count($name) >= 1 ){
            for ($i=0; $i < count($name) - 1  ; $i++) {
                $field_nombres[] = $name[$i];
            }
            $field_apellidos = end($name);
            $user->set("field_nombres", implode( ' ',$field_nombres) );
            $user->set("field_apellidos", $field_apellidos);


        } else {
          $user->set("field_nombres", $graph_node->getField('first_name') );
          $user->set("field_apellidos", $graph_node->getField('last_name') );
        }

        $user->set("field_no_identificacion",'');
        $user->set("field_birthdate",'');
        $user->set("field_gender",'');
        $user->set("user_picture",'');
        $user->set("field_telephone",'');
  	    $user->save();
      }
      catch (FacebookRequestException $ex) {
        drupal_set_message($ex->getMessage(), 'error');
        // Add exception handling here for FacebookRequestExceptions.
      }
      catch (FacebookSDKException $ex) {
        drupal_set_message($ex->getMessage(), 'error');
        // Add exception handling here for all other exceptions.
      }

    }
    else {
      $message = t('Lo sentimos, en estos momentos el sistema no esta disponible.');
      drupal_set_message($message, 'warning');
    }
  }

}
