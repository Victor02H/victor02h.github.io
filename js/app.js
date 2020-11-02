$(function () {

  // animação do menu mobile
  $('#menuButton').on('click', function () {
    $('#mobileMenu').slideToggle();
  });

  // animação scroll
  $('nav a').on('click', function () {
    var href = $(this).attr('href');
    var offSetTop = $(href).offset().top;

    $('html, body').animate({
      'scrollTop': offSetTop
    });

    $('#mobileMenu').slideToggle();

    return false;
  });

});