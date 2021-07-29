//Script para crear el Modal Dinamico
  

//Script para crear el Modal Dinamico para Planes no Celular
  
function RecogerTipoPlan(clicked_name) {

  console.log(clicked_name);
//var mobileModel =  document.getElementById("huawei1").name;

//Texto Dinamico Modal
document.getElementById('ModalTitleMovistar').innerHTML = 'Estás a un paso de adquirir tu <br>' + '<span class="nombre-equipo-modal">' + clicked_name + '</span>' + '<br>' + '<strong class="dejar-datos">Déjanos tus datos y te llamamos.</strong>';
document.getElementById('ModalBotonText').innerHTML = '¡Lo Quiero!';

//Valor del Hidden field en el Input del Modal
document.getElementById("hiddenFieldModal").value = clicked_name;

 
}


function LlamarModalCelular() {

console.log('OK, Modal Te llamamos');
document.getElementById('ModalTitleMovistar').innerHTML = 'Déjanos tus datos y te asesoramos en tu compra';
document.getElementById('ModalBotonText').innerHTML = '¡Te Llamamos Gratis!';

}

function RecogerModeloCelular(clicked_name) {

  console.log(clicked_name);
//var mobileModel =  document.getElementById("huawei1").name;

//Texto Dinamico Modal
document.getElementById('ModalTitleMovistar').innerHTML = 'Estás a un paso de adquirir tu <br>' + '<span class="nombre-equipo-modal">' + clicked_name + '</span>' + '<br>' + '<strong class="dejar-datos">Déjanos tus datos y te llamamos.</strong>';
document.getElementById('ModalBotonText').innerHTML = '¡Lo Quiero!';

//Valor del Hidden field en el Input del Modal
document.getElementById("hiddenFieldModal").value = clicked_name;

 
} 

//Script para poner los datos en modal dinamico desde el icono Te Llamamos

function LlamarModalCelular() {

console.log('OK, Modal Te llamamos');
document.getElementById('ModalTitleMovistar').innerHTML = '<strong class="dejar-datos">Déjanos tus datos y te asesoramos en tu compra.</strong>';
document.getElementById('ModalBotonText').innerHTML = '¡Te Llamamos Gratis!';

}

 $(document).ready(function() {
// validador

  $.validator.addMethod('pattern', function(value, element, param) {
        if (this.optional(element)) {
            return true;
        }
        if (typeof param === 'string') {
            param = new RegExp('^(?:' + param + ')$');
        }
        return param.test(value);
    }, 'Invalid format.');
    
   // funcion para validar 
    
   
  
  // function validateForms() {
  
  //var formularioNL = $("#form-llamar");


var formularioNL = $("#form-llamar").validate({

             //formularioNL.validate({
              //debug: true
            // console.log('val');
                errorElement: 'span',
                rules: {
                    telefonoLlamar: {
                        required: true,
                        minlength: 10,
                        maxlength: 10,
                        pattern: /^([0]{1})+([9]{1})+([0-9]{8})$/
                    },
                    validationCustom01: {
                        required: true,
                        minlength: 10,
                        maxlength: 10,
                        cedulaValidador: true
                    }
                },
                messages: {
                    telefonoLlamar: {
                        required: 'Ingresa tu teléfono',
                        minlength: 'El número de teléfono debe tener 10 digitos',
                        maxlength: 'El numero de teléfono debe tener 10 digitos',
                        pattern: 'Introduce un número de telefono que comience por 09'
                    },
                    validationCustom01: {
                        required: "El número de cédula es requerido",
                        minlength: 'El número cédula debe tener 10 digitos',
                        maxlength: 'El número cédula debe tener 10 digitos',
                        cedulaValidador: "Por favor ingrese un numero de cédula válido"
                    }
                },
                
                submitHandler: function(form) {
    // llamado una vez valido
    console.log("en validacion ajax");
     event.preventDefault();
        var teleContacto = $("#telefonoLlamar").val();
        var serie = JSON.stringify({ numero: teleContacto });
        console.log(serie);
        //var serie = 'action=contactNow&contactType=' + tipoContacto + '&tsource=' + ts + '&contact=' + teleContacto;
        $.ajax({
          type: "POST",
          url: "https://so09.kerberusipbx.com:625/api/v0.1/callback",
          headers: {
              'authorization':'AAAA-SO',
              'Content-Type':'application/json'
          },
          dataType: 'json',
          data: serie,
          processData: false,
          success: function(msg) {
              console.log(msg)
              $("#modalGracias").modal('show');
              $('#modalMovistar').modal('toggle');

              //window.location = '/gracias';
        //  $("#results").append("The result =" + StringifyPretty(msg));
          }
      });

    

  } // fin formulario valido

  
            }); // fin validacion


        $.validator.addMethod('cedulaValidador', function(cedula) {
            var array = cedula.split("");
            var num = array.length;
            var digito, total, finalDigito, decena, mult, i;
            if (num == 10) {
                total = 0;
                digito = (array[9] * 1);
                for (i = 0; i < (num - 1); i++) {
                    mult = 0;
                    if ((i % 2) != 0) {
                        total = total + (array[i] * 1);
                    } else {
                        mult = array[i] * 2;
                        if (mult > 9)
                            total = total + (mult - 9);
                        else
                            total = total + mult;
                    }
                }
                decena = total / 10;
                decena = Math.floor(decena);
                decena = (decena + 1) * 10;
                finalDigito = (decena - total);
                if ((finalDigito == 10 && digito === 0) || (finalDigito == digito)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }, 'El número de cédula ingresado no es válida.');


/****************  Form No Modals PC *****************************/


var formularioNL = $("#form-llamar2").validate({

             //formularioNL.validate({
              //debug: true
            // console.log('val');
                errorElement: 'span',
                rules: {
                    telefonoLlamar: {
                        required: true,
                        minlength: 10,
                        maxlength: 10,
                        pattern: /^([0]{1})+([9]{1})+([0-9]{8})$/
                    },
                    validationCustom01: {
                        required: true,
                        minlength: 10,
                        maxlength: 10,
                        cedulaValidador: true
                    }
                },
                messages: {
                    telefonoLlamar: {
                        required: 'Ingresa tu teléfono',
                        minlength: 'El número de teléfono debe tener 10 digitos',
                        maxlength: 'El numero de teléfono debe tener 10 digitos',
                        pattern: 'Introduce un número de telefono que comience por 09'
                    },
                    validationCustom01: {
                        required: "El número de cédula es requerido",
                        minlength: 'El número cédula debe tener 10 digitos',
                        maxlength: 'El número cédula debe tener 10 digitos',
                        cedulaValidador: "Por favor ingrese un numero de cédula válido"
                    }
                },
                
                submitHandler: function(form) {
    // llamado una vez valido
    console.log("en validacion ajax");
     event.preventDefault();
        var teleContacto = $("#telefonoLlamar2").val();
        var serie = JSON.stringify({ numero: teleContacto });
        console.log(serie);
        //var serie = 'action=contactNow&contactType=' + tipoContacto + '&tsource=' + ts + '&contact=' + teleContacto;
        $.ajax({
          type: "POST",
          url: "https://so09.kerberusipbx.com:625/api/v0.1/callback",
          headers: {
              'authorization':'AAAA-SO',
              'Content-Type':'application/json'
          },
          dataType: 'json',
          data: serie,
          processData: false,
          success: function(msg) {
              console.log(msg)
              $("#modalGracias").modal('show');
             

              //window.location = '/gracias';
        //  $("#results").append("The result =" + StringifyPretty(msg));
          }
      });

    

  } // fin formulario valido

  
            }); // fin validacion


        $.validator.addMethod('cedulaValidador', function(cedula) {
            var array = cedula.split("");
            var num = array.length;
            var digito, total, finalDigito, decena, mult, i;
            if (num == 10) {
                total = 0;
                digito = (array[9] * 1);
                for (i = 0; i < (num - 1); i++) {
                    mult = 0;
                    if ((i % 2) != 0) {
                        total = total + (array[i] * 1);
                    } else {
                        mult = array[i] * 2;
                        if (mult > 9)
                            total = total + (mult - 9);
                        else
                            total = total + mult;
                    }
                }
                decena = total / 10;
                decena = Math.floor(decena);
                decena = (decena + 1) * 10;
                finalDigito = (decena - total);
                if ((finalDigito == 10 && digito === 0) || (finalDigito == digito)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }, 'El número de cédula ingresado no es válida.');




/****************  END Form No Modals PC *****************************/


/****************  Form No Modals PC 2 Index *****************************/


var formularioNL = $("#form-llamar3").validate({

             //formularioNL.validate({
              //debug: true
            // console.log('val');
                errorElement: 'span',
                rules: {
                    telefonoLlamar: {
                        required: true,
                        minlength: 10,
                        maxlength: 10,
                        pattern: /^([0]{1})+([9]{1})+([0-9]{8})$/
                    },
                    validationCustom01: {
                        required: true,
                        minlength: 10,
                        maxlength: 10,
                        cedulaValidador: true
                    }
                },
                messages: {
                    telefonoLlamar: {
                        required: 'Ingresa tu teléfono',
                        minlength: 'El número de teléfono debe tener 10 digitos',
                        maxlength: 'El numero de teléfono debe tener 10 digitos',
                        pattern: 'Introduce un número de telefono que comience por 09'
                    },
                    validationCustom01: {
                        required: "El número de cédula es requerido",
                        minlength: 'El número cédula debe tener 10 digitos',
                        maxlength: 'El número cédula debe tener 10 digitos',
                        cedulaValidador: "Por favor ingrese un numero de cédula válido"
                    }
                },
                
                submitHandler: function(form) {
    // llamado una vez valido
    console.log("en validacion ajax");
     event.preventDefault();
        var teleContacto = $("#telefonoLlamar3").val();
        var serie = JSON.stringify({ numero: teleContacto });
        console.log(serie);
        //var serie = 'action=contactNow&contactType=' + tipoContacto + '&tsource=' + ts + '&contact=' + teleContacto;
        $.ajax({
          type: "POST",
          url: "https://so09.kerberusipbx.com:625/api/v0.1/callback",
          headers: {
              'authorization':'AAAA-SO',
              'Content-Type':'application/json'
          },
          dataType: 'json',
          data: serie,
          processData: false,
          success: function(msg) {
              console.log(msg)
              $("#modalGracias").modal('show');
             

              //window.location = '/gracias';
        //  $("#results").append("The result =" + StringifyPretty(msg));
          }
      });

    

  } // fin formulario valido

  
            }); // fin validacion


        $.validator.addMethod('cedulaValidador', function(cedula) {
            var array = cedula.split("");
            var num = array.length;
            var digito, total, finalDigito, decena, mult, i;
            if (num == 10) {
                total = 0;
                digito = (array[9] * 1);
                for (i = 0; i < (num - 1); i++) {
                    mult = 0;
                    if ((i % 2) != 0) {
                        total = total + (array[i] * 1);
                    } else {
                        mult = array[i] * 2;
                        if (mult > 9)
                            total = total + (mult - 9);
                        else
                            total = total + mult;
                    }
                }
                decena = total / 10;
                decena = Math.floor(decena);
                decena = (decena + 1) * 10;
                finalDigito = (decena - total);
                if ((finalDigito == 10 && digito === 0) || (finalDigito == digito)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }, 'El número de cédula ingresado no es válida.');




/****************  END Form No Modals PC 2 Index *****************************/


/****************  scroll offset *****************************/

// run on DOM ready
// grab target from URL hash (i.e. www.example.com/page-a.html#target-name)
 
var target = window.location.hash;
 
// only try to scroll to offset if target has been set in location hash
 
if ( target != '' ){
    var $target = jQuery(target); 
    jQuery('html, body').stop().animate({
    'scrollTop': $target.offset().top - 50}, // set offset value here i.e. 50
    900, 
    'swing',function () {
    window.location.hash = target;
    });
}

/****************  END scroll offset *****************************/



 });


