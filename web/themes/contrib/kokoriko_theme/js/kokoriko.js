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
  /* Validar la edad del usuario */
  $('#edit-field-birthdate-0-value-date', context).focusout(function (){
      const minimum_age = 18;
      const maximun_age = 105;
      let birthday = new Date($(this).val()).getTime();
      let ageCalc = Date.now() - birthday;
      let ageDate = new Date(ageCalc);
      let age = Math.abs(ageDate.getUTCFullYear() - 1970);
      if(age > maximun_age) {
          // $('.validation-messages').empty();
          $('.error-select-msg').empty();
          $('.error-select-msg').show();
          $('.form-item-field-birthdate-0-value-date').append('<span id="error-select-msg" style="color:red;">El usuario no puede tener mas de ' + maximun_age + ' años</span>').delay(3000).fadeOut();
          $(this).val('');
      }
      if(age < minimum_age) {
        // $('.validation-messages').empty();
        $('.error-select-msg').empty();
        $('.error-select-msg').show();
        $('.form-item-field-birthdate-0-value-date').append('<span id="error-select-msg" style="color:red;">El usuario debe ser mayor de edad</span>').delay(3000).fadeOut();
        $(this).val('');
      }
  });
  /* validar solo numero en la cedula */
  $('#edit-field-no-identificacion-0-value').keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
       //display error message
       $("#errmsg").html("Digits Only").show().fadeOut("slow");
      return false;
   }
  });
  /* validar minimo y máximo numero en la cedula */
  $('#edit-field-no-identificacion-0-value', context).focusout(function (){
    const min = 7;
    const max = 10;
    let long = $(this).val().length;
    if(long < min || long > max){
      $('.error-select-msg-documento-identification').empty();
      $('.error-select-msg-documento-identification').show();
      $('.form-item-field-no-identificacion-0-value').append('<span id="error-select-msg-documento-identification" style="color:red;">El usuario debe ser mayor de edad</span>').delay(3000).fadeOut();
    }
  });


  // $('#block-domicilios-block .body a').click(function(e){
  //   e.preventDefault();		//evitar el eventos del enlace normal
  //   var strAncla=$(this).attr('href'); //id del ancla
  //   $('body,html').stop(true,true).animate({
  //     scrollTop: $(strAncla).offset().top
  //   },1000);

  // });

})(jQuery, Drupal);
