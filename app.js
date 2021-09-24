window.addEventListener('contextmenu', function (e) { 
  // do something here... 
  e.preventDefault(); 
}, false);
    //Julio Codes Start HEre
    //toggle menu visibility
    $(document).ready(function(){
      $('.menu-toggler').on('click', function(){
          $(this).toggleClass('open');
          $('.top-nav').toggleClass('open');
      });
    });
    
    $('.top-nav .nav-link').on('click',function(){
      $('.menu-toggler').removeClass('open');
      $('.top-nav').removeClass('open');
    });
    
    $('nav a[href*="#"]').not("#blog").on("click", function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });
      
    
    
      // landingbutton scroll
      $(".landingbtn").on("click", function () {
        $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top
           }, 500);
       });
    
      
    // show portfolio item extra content
     $(".expandDetails").on("click", function () {
      $(this).parent().siblings(".portfolio-long").slideToggle(500);
      $(this).children(".arrowDown").toggle();
      $(this).children(".arrowUp").toggle();
      });
    
      // animations
      AOS.init({
        easing: "ease",
        duration: 1200,
        once: true
      })
      window.addEventListener('contextmenu', function (e) { 
        // do something here... 
        e.preventDefault(); 
      }, false);
    
    
    
    
    
    
    
    
    // Init On DOM Load
    document.addEventListener('DOMContentLoaded', init);
    
    // Init App
    function init() {
      const txtElement = document.querySelector('.txt-type');
      const words = JSON.parse(txtElement.getAttribute('data-words'));
      const wait = txtElement.getAttribute('data-wait');
      // Init TypeWriter
      new TypeWriter(txtElement, words, wait);
    }