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

  const path = window.location.pathname;
  if (path.indexOf('/menu#elige_y_combina') >= 0){
    console.log('se accedió a menu#elige y comparte')
    $("#edit-field-categoria-de-producto-target-id-84").prop("checked", true);
    $('input[id*="edit-submit-spaces"]').once().click();
    $('input[id*="edit-submit-spaces"]').once().trigger('mousedown');
  }
  $('#edit-submit-menu').css('visibility','hidden')

  // $('#block-domicilios-block .body a').click(function(e){
  //   e.preventDefault();		//evitar el eventos del enlace normal
  //   var strAncla=$(this).attr('href'); //id del ancla
  //   $('body,html').stop(true,true).animate({
  //     scrollTop: $(strAncla).offset().top
  //   },1000);

  // });

})(jQuery, Drupal);
