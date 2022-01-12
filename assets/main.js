function nav(){
  var ham = document.querySelector('.m-hamburger');
  var nav = document.querySelector('nav');
  var logo = document.querySelector('.m-logo');

  ham.addEventListener('click', function(){
    this.classList.toggle('open');
    nav.classList.toggle('open');
    logo.classList.toggle('open');
  });
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}


function cards(){
  var cards = document.querySelectorAll('.m-card');
  cards[0].classList.add('inview');
  document.addEventListener('scroll', function(){
    for(i = 0; i < cards.length; i++){
      var bouding = cards[i].getBoundingClientRect();
      var screenHeight = window.innerHeight;
      if(bouding.top <= screenHeight / 1.2) {
        cards[i].classList.add('inview');
      } else {
        cards[i].classList.remove('inview');
      }
    }
  });
}

function mobileAnimation(){
  var cards = document.querySelectorAll('.m-card__wrapper');
  var wrapper = document.querySelector('.home');
  var header = document.querySelector('header');

  for(i=0; i< cards.length; i++) {
    cards[i].addEventListener('click', function(){
      wrapper.classList.add('transition');
      this.classList.add('display');
      var articleDisplay = document.querySelector('.display > .m-fake__article');
      var bylineTohide = document.querySelector('.display .m-card > h2, .display .m-card > a');
      var linkTohide = document.querySelector('.display .m-card > a');
      var afterToHide = document.querySelector('.no-after');
      articleDisplay.classList.add('display');
      bylineTohide.style.display = 'none';
      linkTohide.style.display = 'none';
      afterToHide.style.display = 'none';
      var backgoundColor = this.childNodes[0].style.backgroundColor;
      header.style.backgroundColor = backgoundColor;

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }
}

function init(){
  nav();
  cards();
}init();
