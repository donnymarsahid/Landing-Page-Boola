// Navbar
$(document).ready(function () {
  $('.iconMenu').on('click', function () {
    $('.iconMenu').toggleClass('flipJos');
    $('.iconMenu').toggleClass('fa-bars');
    $('.iconMenu').toggleClass('fa-times');
  });
});

// Parralax

// $(window).scroll(function () {
//   let wScroll = $(this).scrollTop();

//   // textFeatures
//   if (wScroll > 292) {
//     $('.features .textFeatures').addClass('munculTextFeatures');
//   }
//   // Features
//   if (wScroll > 297) {
//     $('.features .kotak').addClass('munculFeatures');
//   }
//   // Download
//   if (wScroll > $('.container .download').offset().top - 620) {
//     $('.container .download').addClass('munculDownload');
//   }
//   // CaraKerja
//   if (wScroll > $('.caraKerjaText').offset().top - 620) {
//     $('.caraKerjaText').addClass('munculCaraKerjaText');
//   }
//   if (wScroll > $('.caraKerjaContent').offset().top - 970) {
//     $('.caraKerjaContent').addClass('munculCaraKerjaContent');
//   }
//   // gabung
//   if (wScroll > $('.gabung').offset().top - 1700) {
//     $('.gabung').addClass('munculGabung');
//   }
// });

// Header {
$('header .headerText').addClass('munculText');
$('header .headerImage').addClass('munculImage');
$('.jumbotronBoola').addClass('munculJumbotron');

// PageScroll
$('.page-scroll').on('click', function (e) {
  let href = $(this).attr('href');
  let elemenHref = $(href);

  $('html, body').animate(
    {
      scrollTop: elemenHref.offset().top - 50,
    },
    500,
    'easeInOutExpo'
  );

  e.preventDevault();
});
