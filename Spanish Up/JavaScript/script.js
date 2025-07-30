let cod =`
<div class="contenedor">
    <a href="/index.html"><img class="logo-nav" src="/Imgs/LOGO/Logo transp.png" alt="Logo Spanish Up"></a>
    <input type="checkbox" id="checkmenu">
    <label class="menuicono" for="checkmenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </label>
    <nav class="menu">
        <a href="login.html" id="op1">Level test</a>
        <a href="book.html" id="op2">Book a lesson!</a>
        <a href="#linkcontacto" id="op4">Contact us</a>
        <a href="FAQ.html" id="op5">FAQ</a>

    </nav>
</div>

`

let cad =`
<div class="footer-ultimo">
    <div class="footer-columna1">
        <div class="imagenytexto">
            <img class="footer-logo" src="/Imgs/LOGO/Logo transp.png"></div>				
            <p class="footer-links">
                <a href="index.html" class="link-1">Home</a>
                <a href="FAQ.html">FAQ</a>
                <a href="#">Payment methods</a>
                <a href="leveltest.html">Level test</a>
                <a href="#linkcontacto" href="/index.html/#linkcontacto">Contact us</a>
            </p>
        </div>
    <div class="footer-columna2">
        <div>
            <i class="fa fa-map-marker"></i>
            <p><span>Buenos Aires</span> Argentina</p>
        </div>
        <div>
            <i class="fa fa-phone"></i>
            <p>+54 11 2608-6202</p>
        </div>
        <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:spanishupacademy@gmail.com">spanishupacademy@gmail.com</a></p>
        </div>
    </div>
    <div class="footer-columna3">
        <p class="footer-nosotros">
            <span>Follow us!</span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum odit eum dolorum voluptatum voluptate recusandae voluptatibus modi ad praesentium veritatis quaerat iure non, quisquam temporibus, excepturi deleniti labore totam distinctio
        </p>
        <div class="footer-iconos">
            <a href="https://facebook.com"><i class="fa fa-facebook"></i></a>
            <a href="https://www.instagram.com/spanishup_/"><i class="fa fa-instagram"></i></a>
            <a href="https://linkedin.com.spanishup_"><i class="fa fa-linkedin"></i></a>
        </div>
    </div>
</div>

`

document.getElementById("footermio").innerHTML = cad;
document.getElementById("headermio").innerHTML = cod;


jQuery(function ($) {
   "use strict";
   var $window = $(window);
   var windowsize = $(window).width();
   var $root = $("html, body");
   var $this = $(this);


   /*Testimonials 3columns*/
   $("#testimonial-slider").owlCarousel({
      items: 3,
      autoplay: 3500,
      autoplayHoverPause: true,
      loop: false,
      margin: 30,
      dots: false,
      nav: false,
      responsive: {
         1280: {
            items: 3,
         },
         600: {
            items: 2,
         },
         320: {
            items: 2,
         },
      }
   });
});

$(document).ready(function() {
  const faqs = document.querySelectorAll("[unique-script-id='w-w-dm-id'] .faq .faq-question-container");

  faqs.forEach(function(faq) {
    faq.addEventListener("click", function() {
      $(faq).closest(".faq").toggleClass("active");
    });
  });
})
