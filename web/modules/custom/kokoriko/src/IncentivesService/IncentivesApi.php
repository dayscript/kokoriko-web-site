<?php

namespace Drupal\kokoriko\IncentivesService;


class IncentivesApi{

  private $endPoint;  // get the end point api for incentives \Drupal::configFactory()->getEditable('kokoriko.incentivesApi')->set('incentivesEndPoint', 'https://incentives.kokoriko.local')->save();
  private $headers;
  private $body;
  private $method;
  function __construct(){
    $this->endPoint = \Drupal::config('kokoriko.incentives')->get('incentivesEndPoint');
    $this->headers = [
      // 'Content-Type' => 'application/json',
      'Access-Control-Allow-Headers'=> 'Content-Type',
      'Access-Control-Allow-Methods'=> 'GET, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Origin'=> '*'
    ];
  }



  public function setEndPoint( $endPoint = NULL){
    $this->endPoint = $endPoint;
  }

  public function setMethod($method = NULL){
    $this->method = $method;
  }

  public function getMethod(){
    return $this->method;
  }
  public function getEndPoint(){
    return $this->endPoint;
  }

  public function setHeaders($headers = array() ){
    $this->headers = $headers;
  }

  public function getHeaders( $header = null){

    if(is_null($header)) return $this->headers;
    else return $this->headers[$header];

  }

  public function setBody( $body = array() ){
    $this->body = $body;
  }

  public function getBody(){
    return $this->body;

  }

  public function post(){

      $response = \Drupal::httpClient()
        ->post(
          $this->endPoint .'/'. $this->method,
          array(
            'headers'=> $this->headers,
            'form_params'=> $this->body,
          )
        );
      return $response->getBody()->getContents();
  }

  public function get(){
    return FALSE;
  }

}
