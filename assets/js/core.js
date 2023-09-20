//day of the week: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. 7 all off

salesDay="0,1,2,3,4,5,6";

$(function() {

   //Get days

    var today = new Date();

    var DOW = today.getDay();

    var n = today.getHours();



    //if(salesDay.indexOf(DOW.toString()) == -1 || !(n >= 8 && n <= 16))

    if(salesDay.indexOf(DOW.toString()) == -1)

    {

      $('.m-auto').addClass("hidden");

      $('.chorizo-price-container').append('<button type="button" class="btn btn-buy-tres-eme open-modal" data-open="warning">Agregar</button>');

    }



    $(".open-modal" ).on( "click", function() {

      $(".modal").addClass("is-visible");

    });



});



// Activar Opciones de Preguntas frecuentes



$("#boton1").click(function(){

  $('#boton1').addClass("active");

  $('#boton2, #boton3').removeClass("active");



  $("#tab-boton1").removeClass("hidden");

  $("#tab-boton1").addClass("show");

  $("#tab-boton2, #tab-boton3").addClass("hidden");

});

$("#boton2").click(function(){

  $('#boton1, #boton3').removeClass("active");

  $('#boton2').addClass("active");



  $("#tab-boton1, #tab-boton3").addClass("hidden");

  $("#tab-boton1").removeClass("show");

  $("#tab-boton2").addClass("show");

  $("#tab-boton2").removeClass("hidden");

});

$("#boton3").click(function(){

  $('#boton1, #boton2').removeClass("active");

  $('#boton3').addClass("active");





  $("#tab-boton1, #tab-boton2").addClass("hidden");

  $("#tab-boton2").removeClass("show");

  $("#tab-boton3").addClass("show");

  $("#tab-boton3").removeClass("hidden");

});





//Activate season products

data= {

  "chorizos":[

    {

      "id": "MezcalChorizo",

      "active":0

    },

    {

      "id": "InfiernoChorizo",

      "active":1

    },

    {

      "id": "BBQaWChorizo",

      "active":0

    },

    {

      "id": "MostazaChorizo",

      "active":0

    },

    {

      "id": "Chorizombie",

      "active":0

    },

    {

      "id": "BetabelChorizo",

      "active":0

    },
    {

      "id": "PastorChorizo",

      "active":0

    }

  ]

};



$(function() {

  $.each(data.chorizos, function(index, element) {



    if(element.active==1){

        $("#"+element.id).removeClass("hidden");

        swiper.update();

    }

  });

});

// Funcion para obtener el dia y hora para ocultar o mostrar los divs de promos especiales
/* Ids chorizos de temporada  y fechas
  MezcalChorizo --> valido del 01 al 28 de Feb 2022 
  TamarindoChorizo --> valido del 01 al 30 de Abr 2022  
  BBQaWChorizo  --> valido del 01 al 30 de Jun 2022  
  MostazaChorizo  --> valido del 01 al 31 de Ago 2022 
  Chorizombie  --> valido del 01 al 31 de Oct 2022 
  BetabelChorizo  --> valido del 01 al 31 de Dic 2022 
  PastorChorizo  --> valido del 01 al 31 de Marzo 2022 
*/
// crea un nuevo objeto `Date`
window.onload = () => {
  cargarPagina();
}

setInterval('cargarPagina()',1000);

function cargarPagina () {  
  var today = new Date();
  
  // obtener la fecha y la hora
  var now = today.toLocaleString();
  var date = JSON.stringify(now)

  console.log("date", date);


  var mezcal = '"23/4/2023, 19:15:00"'
  console.log(mezcal);

  if (date === mezcal) {
    console.log("Entro el if");
    document.getElementById('MezcalChorizo').style.display = "none";
    // document.getElementById("capturaIdentificacion").hidden = false;
  }
  
  /*
      Resultado: 1/27/2020, 9:30:00 PM
  */
}