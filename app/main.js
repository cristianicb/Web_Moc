$(document).ready(function() {



    // Search Appear

    $("#search").click(function() {
        $("#mySearch").css("top", "0")

        if ($(".left_menu").hasClass("active")) {

        } else {
            $(".left_menu").toggleClass("active");
            $(".contentOverlay").toggle();
            $("div.content").toggleClass("blocked")
        }

    })

    $("#inputSearch").focus(function() {
        if ($(".BrandDropdown").hasClass("show")) {} else { $(".BrandDropdown").toggleClass("show", "hide") }
    });

    $("#closeIcon").click(function() {


        $(".left_menu").toggleClass("active");
        $(".contentOverlay").toggle();
        $("div.content").toggleClass("blocked")

        $("#mySearch").css("top", "-95px")
    })

    // Search show left menu



    // Dropdown Menu

    $(function() {
        $(document).on("click", ".leftMenuItem h3", function() {
            $(this).parent().find(".BrandDropdown").toggleClass("show", "hide")
        });
    });

    // Show Menu

    $("#showMenu").on("click", function() {
        $("#mySearch").css("top", "0")
        $(".left_menu").toggleClass("active");

        $(".contentOverlay").toggle();
        $("div.content").toggleClass("blocked")
    });

    $("#contentOverlay").on("click", function() {
        $("#mySearch").css("top", "-95px")
        $(".left_menu").toggleClass("active");

        $(".contentOverlay").toggle();
        $("div.content").toggleClass("blocked")

        $(".BrandDropdown").toggleClass("show", "hide")

    });




    //Bootstrap

    $(function() {
        $('[data-toggle="popover"]').popover()
    })

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // FIN jquery

});

// JAVASCRIPT

// Search filter

// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('inputSearch');
//     filter = input.value.toUpperCase();
//     ul = document.getElementsByClassName("BrandDropdown");
//     li = ul.getElementsByTagName('li');


//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }


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




window.onscroll = function() { barraProgreso() };