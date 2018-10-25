/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.exampleBehavior = {
    attach: function (context, settings) {
      //alert("I'm alive!");
    }
  };

  $('nav a#menu-contacto').click(function(e){
    e.preventDefault();		//evitar el eventos del enlace normal
    var strAncla=$(this).attr('href'); //id del ancla
    $('body,html').stop(true,true).animate({
      scrollTop: $(strAncla).offset().top
    },1000);

  });

  $('nav a#menu-domicilio').click(function(e){
    e.preventDefault();		//evitar el eventos del enlace normal
    var strAncla=$(this).attr('href'); //id del ancla
    $('body,html').stop(true,true).animate({
      scrollTop: $(strAncla).offset().top
    },1000);

  });

  $('#block-domicilios-block .body a').click(function(e){
    e.preventDefault();		//evitar el eventos del enlace normal
    var strAncla=$(this).attr('href'); //id del ancla
    $('body,html').stop(true,true).animate({
      scrollTop: $(strAncla).offset().top
    },1000);

  });

})(jQuery, Drupal);
