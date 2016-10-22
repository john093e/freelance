var pContainerHeight = $('.bg_full').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.table').css({
      'transform' : 'translate(0px, '+ wScroll /10 +'%)'
    });
    $('.ecran').css({
      'transform' : 'translate(0px, '+ wScroll /10 +'%)'
    });

    $('.lampe').css({
      'transform' : 'translate(0px, '+ wScroll /12 +'%)'
    });

    $('.siege').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });

  }


  // Promoscope
  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  }


  // Floating Elements

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
});
