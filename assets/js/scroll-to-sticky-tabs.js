
  // mapboxgl.accessToken = 'pk.eyJ1IjoiZmVsaXBlcG1iYSIsImEiOiJjbGFheXh3dTQwZDFmM3BsbWczZndxb2lpIn0.Wheh275FZEnEH3540LHbpQ';
  // const map = new mapboxgl.Map({
  //     container: 'mapapmba', // container ID
  //     style: 'mapbox://styles/mapbox/streets-v11', // style URL
  //     center: [-74.5, 40], // starting position [lng, lat]
  //     zoom: 9, // starting zoom
  //     projection: 'globe', // display the map as a 3D globe
  //     //cooperativeGestures: true
  // });

  // map.addControl(new mapboxgl.FullscreenControl());

  //     map.on('style.load', () => {
  //       map.setFog({}); // Set the default atmosphere style
  // });


// https://community.algolia.com/instantsearch.js/v2/getting-started.html#initialization
const search = instantsearch({
  appId: '9LUJWUPLSY',
  apiKey: 'e45863830a48d9c34cd158a1c234fa2d',
  indexName: 'dev_algolia_eventspmba',
  routing: true
});

// search.addWidget(
//   instantsearch.widgets.hits({
//     container: '#hits'
//   })
// );

search.start();


// lazy loads elements with default selector as '.lozad'
const observer = lozad(); 
observer.observe();

(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(500);
  });

  $(window).on('load', function () {
    $('.preloader-white').fadeOut(850);
  });

  // Personalizado automático altura para las TABS Sticky
  // y que así, se queden fijas siempre a la altura del menú superior
  // de navegación.
  // document.querySelector(".fixed-top.header").offsetHeight
  $(document).scroll(function(){
    var distancia_scroll = $(this).scrollTop();
    var distancia_tabs =  $('.sticky-pmba-tabs').offsetHeight;
    var distancia_tabs_circuito = $('.sticky-pmba-tabs-circuito').offsetHeight;

    if (distancia_scroll > 100){
      var altura_menu_superior = document.querySelector(".fixed-top.header").offsetHeight;
      $('.sticky-pmba-tabs').css("top",altura_menu_superior - 1);
      $('.sticky-pmba-tabs-circuito').css("top",altura_menu_superior - 1);
    }
    
    // if (distancia_tabs < distancia_scroll){
    //   $('.fixed-top').css("z-index",10);
    //   $('.fixed-top').css("position","fixed");
    // }
  });


  // Mostrar/Ocultar tickets boton comprar
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    var t = $('.sticky-pmba-tabs').parent().offset().top;
    var block_tickets_bottom_pmba = $('.info-bottom-tickets-pmba');
    var row_tickets = $('.row-tickets');
    
    if( screen.width <= 991 ) {
      if (y > t) {
        block_tickets_bottom_pmba.fadeIn(600);
        block_tickets_bottom_pmba.css("display", "flex");
        // $('.fixed-top').fadeOut(600);
        // $('.fixed-top').css("z-index",0);
        // $('.fixed-top').css("position","sticky");
      } else {
        block_tickets_bottom_pmba.fadeOut(600);
      }
    }else{
      block_tickets_bottom_pmba.fadeOut(600);
      row_tickets.css("display", "none");
    }
  });

  // Para inyectar dinámicamente el alto del menu superior y 
  // mover el alto en el tickets modal "div#ticketsTorneoPMBA"
  // Importante: la clase es el nombre del boton de abajo,
  // dentro del <div class="tickets-cta2"> en footer2.html
  $("a.btn.btn-primary.btn-lg.tickets-cta2-classes").click(function(){
    var menu_altura = document.querySelector("body > header").offsetHeight;
    // console.log("menu altura = "+menu_altura);
    if( screen.width <= 991 ) {
      $(".fixed-top").css("z-index", 1);
      // $("div#ticketsTorneoPMBA").css("top", menu_altura);
      // En mobile molaría también que se ocultara el menu superior con zindex
      // $(".navigation").css("z-index", 5);
    }
  });

  // Para controlar que cuando se cierra el modal, vuelve el zindex al valor original
  $("button.close").click(function(){
    $(".fixed-top").css("z-index", 5);
  });

  // Para el boton de comprar del SIDEBAR
  $("a.btn.btn-primary.btn-lg.mt-2.efecto-boton-pmba").click(function(){
    var menu_altura = document.querySelector("body > header").offsetHeight;
    // console.log("menu altura = "+menu_altura);

    // fijamos dinamicamente el header del modal siempre.
    // screen.width > 991) para que se quede fijo el header-modal en escritorio, pero oculta el boton de comprar...
    // if (( screen.width <= 991 )  || ( screen.width > 991))  {

    // Fix para ocultar temporalmente el menu superior para que se vea 100% alto el iframe
    if ((screen.width > 991) || ( screen.width <= 991 ))  {
      $(".fixed-top").css("z-index", 1);
    }

    // if (( screen.width <= 991 ))  {
    //   $("div#ticketsTorneoPMBA").css("top", menu_altura);
    // }
  });

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  // Efecto click en la Tabs: Scroll to top of tab-pane with a sticky Nav
  // https://stackoverflow.com/a/57337113
  // Fixed altura exacta de las tabs al hacer click
  $("div#nav-tab > a").click(function() {
    var menu_altura = document.querySelector("body > header").offsetHeight;
    $([document.documentElement, document.body]).animate({
        //scrollTop: $("#nav-tab-content").offset().top-240
        scrollTop: $("#nav-tab-content").offset().top-menu_altura-80
    }, 300);
  });

  $("nav#nav-tab-circuito > a").click(function() {
    var menu_altura = document.querySelector("body > header").offsetHeight;
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#nav-tab-circuitos-listado").offset().top-menu_altura-40
    }, 300);
  });



  

  // Change Icon Menu Hamburguer Mobile
  // https://stackoverflow.com/a/28250768
  $('#navigation')
    .on('shown.bs.collapse', function() {
      // $('.navbar-toggler-icon').fadeOut(200);
      $('.navbar-toggler-icon').addClass('hidden');
      // $('#navbar-close').fadeIn(200);
      $('#navbar-close').removeClass('hidden');
    })
    .on('hidden.bs.collapse', function() {
      // $('.navbar-toggler-icon').fadeIn(600);
      // $('#navbar-close').fadeOut(200);
      $('#navbar-close').addClass('hidden');
      $('span.navbar-toggler-icon').removeClass('hidden');
      // $('span.navbar-toggler-icon').fadeIn(200);
      // $('#navbar-close').fadeOut(600);
      
  });

  // $(".col-lg-3.second-column").stick_in_parent({
  //     parent: ".row.margin-pmba",
  //     offset_top: 200
  //   });

  // $(".row.margin-pmba").stick_in_parent({
  //   stickTo: '.col-lg-3.second-column'
  // });

  // $(".col-lg-3.second-column").stick_in_parent({
  //   offset_top: 10
  // });

  // $('.second-column').hcSticky();

  // var socialFloat = document.querySelector('.col-lg-3.second-column');
  // var footer = document.querySelector('.carousel-patrocinadores');

  // function checkOffset() {
  //   function getRectTop(el){
  //     var rect = el.getBoundingClientRect();
  //     return rect.top;
  //   }
    
  //   if((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
  //     socialFloat.style.position = 'absolute';
  //   if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
  //     socialFloat.style.position = 'fixed'; // restore when you scroll up
    
  //   socialFloat.innerHTML = document.body.scrollTop + window.innerHeight;
  // }

  // document.addEventListener("scroll", function(){
  //   checkOffset();
  // });


  // $(".row.margin-pmba").stick_in_parent({
  //   stickTo: '.col-lg-3.second-column'
  // });
  // http://jsfiddle.net/gmolop/y3tdL9wd/
  // https://somewebmedia.github.io/hc-sticky/


  // $('.row.margin-pmba').hcSticky({stickyClass: '.col-lg-3.second-column', innerTop: -71});


  // var Sticky = new hcSticky('section', {
  //   stickTo: '.container-fluid',
  //   innerSticker: '.col-lg-3.second-column',
  //   responsive: {
  //     980: {
  //       disable: true
  //     }
  //   }
  // });


  // $(".row.margin-pmba").stick_in_parent();
  // $(".col-lg-3.second-column").stick_in_parent({ offset_top: $(".section-sm").height() });
  // $(".col-lg-3.second-column").stick_in_parent({offset_top:e+350});

  // Sticky Menu
  // $(window).scroll(function () {
  //   var height = $('.top-header').innerHeight();
  //   if ($('header').offset().top > 10) {
  //     $('.top-header').addClass('hide');
  //     $('.navigation').addClass('nav-bg');
  //     $('.navigation').css('margin-top','-'+height+'px');
  //   } else {
  //     $('.top-header').removeClass('hide');
  //     $('.navigation').removeClass('nav-bg');
  //     $('.navigation').css('margin-top','-'+0+'px');
  //   }
  // });

})(jQuery);