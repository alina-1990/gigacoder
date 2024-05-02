//tabs стэк

(function($) {
  $(function() {
    $("ul.stack__list").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.stack__blog")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);


///
jQuery(document).ready(function($) {
  $('.usefull-links').click(function() {
    $(this).parents('.bg').find('.links').toggleClass('open');
    $(this).parents('.bg').find('.flaticon-down-arrow').toggleClass('open');
  });
});


$(function() {
  $('.directions__container').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 475,
      settings: {
        slidesShow: 4,
      },
    }, 
  ]
  });
  $('.partners__container').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-arrows slick-prev d-none"><img src="images/prev.svg" alt="prev"/></button>',
    nextArrow: '<button type="button" class="slick-arrows slick-next d-none"><img src="images/next.svg" alt="next"/></button>',
    responsive: [{
      breakpoint: 1024,
      settings: {
      }
    }, ]
  });
  $('.students__wrap').slick({
    dots: false,
    prevArrow: '<button type="button" class="slick-arrows left"><img src="images/btnPrevious.svg" alt="prev"/></button>',
    nextArrow: '<button type="button" class="slick-arrows right"><img src="images/btnNext.svg" alt="next"/></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed:2000,
    responsive: [
        {
          breakpoint: 0,
          settings: {
          }
        }
      ]
  });
  $('.news__container').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-arrows slick-prev d-none"><img src="images/prev.svg" alt="prev"/></button>',
    nextArrow: '<button type="button" class="slick-arrows slick-next d-none"><img src="images/next.svg" alt="next"/></button>',
    responsive: [{
      breakpoint: 475,
      settings: {}
    }, ]
  });
});

//burger 
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');
const header = document.querySelector('.header');
mobileNavButton.addEventListener('click', function () {
  mobileNavIcon.classList.toggle('active');
  mobileNav.classList.toggle('active');
});


//popup
var popup = document.querySelector(".popup");
var btns = document.querySelectorAll(".btn-modal");
var close = document.querySelector(".close");

btns.forEach(btns => btns.addEventListener('click', (e) => {
  e.preventDefault()
  popup.classList.remove("hidden");
}));

popup.addEventListener("click", function(event) {
  e = event || window.event
  if (e.target == this) {
    popup.classList.add("hidden");
  }
});

close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("hidden");
});

//Стирание input

function clearField(input) {
  input.value = "";
};
// Анимация оставить заявку

var scrolled = true;
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      if (!scrolled) {
        var st = $(this).scrollTop();
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
scrolled = false;
}
window.addEventListener("scroll", reveal);



//Анимация текста
// var scrolled = false;

// function reveal1() {
//   if (!scrolled) {
//     var st = $(this).scrollTop();
//   var reveal = document.querySelectorAll(".reveal1");
//   for (var i = 0; i < reveal.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveal[i].getBoundingClientRect().top;
//     var elementVisible = 150;
//     if (elementTop < windowHeight - elementVisible) {
//       reveal[i].classList.add("active");
//     } else {
//       reveal[i].classList.remove("active");
//     }
//   }
// }
// scrolled = true;
// }
// // }
// window.addEventListener("scroll", reveal1);

