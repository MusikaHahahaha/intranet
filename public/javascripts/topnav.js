$(window).scroll(function() {
  var navbarColor = "225, 225, 225"
  var smallLogoHeight = $('.small-logo').height();
  var bigLogoHeight = $('.big-logo').height();
  var navbarHeight = $('.navbar').height();

  var smallLogoEndPos = 0;
  var smallSpeed = (smallLogoHeight / bigLogoHeight);

  var ySmall = ($(window).scrollTop() * smallSpeed);

  var smallPadding = navbarHeight - ySmall;
  if (smallPadding > navbarHeight) { smallPadding = navbarHeight; }
  if (smallPadding < smallLogoEndPos) { smallPadding = smallLogoEndPos; }
  if (smallPadding < 0) { smallPadding = 0; }

  $('.small-logo-container ').css({ "padding-top": smallPadding});
  
  var navOpacity = ySmall / smallLogoHeight;
  if  (navOpacity > 1) { navOpacity = 1; }
  if (navOpacity < 0 ) { navOpacity = 0; }
  var navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';
  $('.navbar').css({"background-color": navBackColor});

  var shadowOpacity = navOpacity * 0.4;
  if ( ySmall > 1) {
    $('.navbar').css({"box-shadow": "0 3px 3px rgba(0,0,0," + shadowOpacity + ")"});
  } else {
    $('.navbar').css({"box-shadow": "none"});
  }
});

$(document).ready(function() {
    $('.navbar a.dropdown-toggle').on('click', function(e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if(!$parent.parent().hasClass('nav')) {
            $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
        }

        $('.nav li.open').not($(this).parents("li")).removeClass("open");

        return false;
    });
});
