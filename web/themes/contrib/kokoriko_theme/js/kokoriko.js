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
      $('a.compra-boton', context).once('exampleBehavior').on('click',function(e){
        e.preventDefault();
        openModal('3d2a9765b033aeb80c601c9db59a2c6e')
      });
      //alert("I'm alive!");
      // console.log('Js kokoriko ready nuevo push');
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

  $('#cuenta a#menu-como').click(function(e){
    e.preventDefault();		//evitar el eventos del enlace normal
    var strAncla=$(this).attr('href'); //id del ancla
    $('body,html').stop(true,true).animate({
      scrollTop: $(strAncla).offset().top
    },1000);

  });
  $('#edit-submit-menu').css('visibility','hidden')

  var path = window.location.href;
  if (path == 'https://www.kokoriko.com.co/menu#elige_y_comparte' || path == 'https://www.kokoriko.com.co/menu?elige-y-comparte'){
    $("#edit-field-categoria-de-producto-target-id-84").prop("checked", true);
    setTimeout(function(){
      $('input[id*="edit-submit-menu"]').trigger('click');
    },1500); 
  }

  // $('#block-domicilios-block .body a').click(function(e){
  //   e.preventDefault();		//evitar el eventos del enlace normal
  //   var strAncla=$(this).attr('href'); //id del ancla
  //   $('body,html').stop(true,true).animate({
  //     scrollTop: $(strAncla).offset().top
  //   },1000);

  // });

})(jQuery, Drupal);
