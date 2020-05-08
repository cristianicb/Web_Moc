$( document ).ready(function() {

// ESTO SEPARA CACHOS DE CODIGO

$("#search").click(function() {
  $("#mySearch").css("top","0")
})

$("#closeIcon").click(function() {
  $("#mySearch").css("top","-95px")
})

// ESTO SEPARA CACHOS DE CODIGO

$(function(){
  $(document).on("click", ".leftMenuItem h3", function(){

      $(this).parent().find(".BrandDropdown").toggleClass("show","hide")
  });
});

// ESTO SEPARA CACHOS DE CODIGO

$("#showMenu").on("click", function(){
  $(".left_menu").toggleClass("active");

  $(".contentOverlay").toggle();
});

$("#contentOverlay").on("click", function(){
  $(".left_menu").toggleClass("active");

  $(".contentOverlay").toggle();
});

//Bootstrap

$(function () {
  $('[data-toggle="popover"]').popover()
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// FIN jquery

});

// JAVASCRIPT


// ESTO SEPARA CACHOS DE CODIGO

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

// ESTO SEPARA CACHOS DE CODIGO

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// ESTO SEPARA CACHOS DE CODIGO

let prevScrollpos = window.pageYOffset;
let x = window.matchMedia("(max-width: 700px)")

function barraProgreso() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";

      if (x.matches) { // If media query matches
        document.getElementById("leftMenu").style.top = "50px";
      } else {
        document.getElementById("leftMenu").style.top = "95px";
      }
    } else {
      document.getElementById("navbar").style.top = "-95px";
      document.getElementById("leftMenu").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
};


window.onscroll = function() {barraProgreso()};
