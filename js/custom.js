$('.owl-carousel').owlCarousel({
  items: 1,
  loop: true,
  nav: false,
  dots: true,
  margin: 10,
  autoplay: true
})



/* Mobile Menu Script Start */
$(document)
.off("click", ".tigger_menu_act")
.on("click", ".tigger_menu_act", function (e) {
  
  e.stopPropagation();
  $("body").toggleClass("mbl-hiden");
  $(".mobile_menu").toggleClass("active");
});
  $(document).click(function (e) {
    if (!$(e.target).is(".tigger_menu_act, .menu, .menu * ")) {
      if ($(".menu").is(":visible")) {
        $(".mobile_menu").removeClass("active");
        $("body").removeClass("mbl-hiden");
      }
    }
  });


// if ($(".tigger_menu_act").length > 0) {
//   $(document)
//     .off("click", ".tigger_menu_act")
//     .on("click", ".tigger_menu_act", function (e) {
//       e.stopPropagation();
//       $("body").toggleClass("mbl-hiden");
//       $(".mobile_menu").toggleClass("active");
//     });
//   $(document).click(function (e) {
//     if (!$(e.target).is(".tigger_menu_act, .menu, .menu * ")) {
//       if ($(".menu").is(":visible")) {
//         $(".mobile_menu").removeClass("active");
//         $("body").removeClass("mbl-hiden");
//       }
//     }
//   });
// }

// if ($("#close_mobile_menu").length > 0) {
//   $(document)
//     .off("click", "#close_mobile_menu")
//     .on("click", "#close_mobile_menu", function (e) {
//       e.stopPropagation();
//       $(".mobile_menu").removeClass("active");
//       $("body").removeClass("mbl-hiden");
//     });
// }
/* Mobile Menu Script End */

/* Sticky Header Fixed Script */
$(window).scroll(function () {
    if ($(window).scrollTop() != 0) {
      $("header").addClass("small_sticky");
    } else {
      $("header").removeClass("small_sticky");
    }
  });
  /* Sticky Header End Script */