"use strict";function initBionick(){function e(){$(" .fwslider .item").css({height:$(".fwslider").outerHeight(!0)}),$(" .slideshow-wrap .item").css({height:$(".slideshow-wrap").outerHeight(!0)}),$(".fw-title").css({"margin-top":-1*$(".fw-title").height()/2+"px"}),$(".height-emulator").css({height:$("footer").outerHeight(!0)}),$(".nav-inner nav ").css({"margin-top":-1*$(".nav-inner nav ").height()/2+"px"})}console.log("fire"),$(window).load(function(){var t=[],e=window.location.href.split("#")[1],i=$("header").outerHeight(!0),a=$("html, body");$(".scroll-nav a").each(function(){var e=new Image;e.src=$(this).data("bgscr"),t.push(e)}),$(".loader").fadeOut(500,function(){$("#main").animate({opacity:"1"},500),$(".content-holder").removeClass("scale-bg2"),$(".in-anim").animate({opacity:1},900),setTimeout(function(){$(".grid-item-holder").each(function(e){var t=$(this);setTimeout(function(){t.animate({opacity:1},500)},180*e)})},450),setTimeout(function(){$(".viselem").each(function(e){var t=$(this);setTimeout(function(){t.animate({opacity:1},900)},480*e)})},250)}),e&&$("#"+e).length&&(a.animate({scrollTop:0},1),setTimeout(function(){a.animate({scrollTop:$("#"+e).offset().top-i},{queue:!1,duration:800,easing:"easeInOutExpo"})},1550))}),e(),$(window).resize(function(){e()}),$(".project-pagination , .fixed-filter , .searh-holder").addClass("in-anim"),$(".wrapper-inner , .fixed-column , footer , .hero-wrapper").addClass("viselem"),$("nav li.subnav a").append('<i class="fa fa-angle-double-down subnavicon"></i>'),$(".image-popup").magnificPopup({type:"image",closeOnContentClick:!1,removalDelay:600,mainClass:"my-mfp-slide-bottom",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1],arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)"},image:{verticalFit:!1}}),$(".popup-youtube, .popup-vimeo , .show-map").magnificPopup({disableOn:700,type:"iframe",removalDelay:600,mainClass:"my-mfp-slide-bottom"}),$(".popup-gallery").magnificPopup({delegate:"a",type:"image",fixedContentPos:!0,fixedBgPos:!0,tLoading:"Loading image #%curr%...",removalDelay:600,closeBtnInside:!0,zoom:{enabled:!0,duration:700},gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1],arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:'<span class="mfp-counter">%curr% of %total%</span>'},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}});var t=$(".single-slider");t.owlCarousel({items:1,nav:!1,autoHeight:!0}),$(".single-slider-holder a.next-slide").on("click",function(){$(this).closest(".single-slider-holder").find(t).trigger("next.owl.carousel")}),$(".single-slider-holder a.prev-slide").on("click",function(){$(this).closest(".single-slider-holder").find(t).trigger("prev.owl.carousel")});var i=$(".services-carusel");i.owlCarousel({items:3,nav:!1,responsiveClass:!0,responsive:{0:{items:1,nav:!1},756:{items:2,nav:!1},1036:{items:2,nav:!1},1236:{items:3,nav:!1}}}),$(".ser-carous-holder a.next-slide").on("click",function(){$(this).closest(".ser-carous-holder").find(i).trigger("next.owl.carousel")}),$(".ser-carous-holder a.prev-slide").on("click",function(){$(this).closest(".ser-carous-holder").find(i).trigger("prev.owl.carousel")});var a=$(".fwslider");a.owlCarousel({items:1,nav:!1}),$(".fwslider-holder a.next-slide").on("click",function(){$(this).closest(".fwslider-holder").find(a).trigger("next.owl.carousel")}),$(".fwslider-holder a.prev-slide").on("click",function(){$(this).closest(".fwslider-holder").find(a).trigger("prev.owl.carousel")}),$(".slideshow-wrap").owlCarousel({items:1,nav:!1,animateOut:"fadeOut",autoplay:!0,autoplayTimeout:5e3,loop:!0}),$(".fixed-wrap , .scroll-nav-holder").scrollToFixed({minWidth:1036}),$(window).scroll(function(){300<$(this).scrollTop()?$("footer").addClass("visfooter"):$("footer").removeClass("visfooter")}),$(".nav-inner nav li").on("mouseenter",function(){$(this).find("ul").stop().slideDown(),$(".nav-inner").addClass("menhov")}),$(".nav-inner nav li").on("mouseleave",function(){$(this).find("ul").stop().slideUp(),$(".nav-inner").removeClass("menhov")}),$(".subnav a.custom-scroll-link").on("click",function(){$(window).width()<1036&&setTimeout(function(){u()},450)});var n=1;$(document.body).on("appear",".stats",function(e){var a;1===n&&(a=2600,$(".stats .num").each(function(){var e=$(this),t=e.attr("data-num"),i=e.attr("data-content");!function(e,t,i,a){if(a)var n=0,o=parseInt(a/e),r=setInterval(function(){n-1<e?i.html(n):(i.html(t),clearInterval(r)),n++},o);else i.html(t)}(t,i,e,a)})),n++}),$(".animaper").appear(),$(document.body).on("appear",".piechart-holder",function(){$(this).find(".chart").each(function(){var e=$(".piechart-holder").data("skcolor");$(".chart").easyPieChart({barColor:e,trackColor:"#eee",scaleColor:"#9ACFB7",size:"150",lineWidth:"5",onStep:function(e,t,i){$(this.el).find(".percent").text(Math.round(i))}})})}),$(document.body).on("appear",".skillbar-box",function(){$(this).find("div.skillbar-bg").each(function(){$(this).find(".custom-skillbar").delay(600).animate({width:$(this).attr("data-percent")},1500)})});var o=$(".background-video").data("vid"),r=$(".background-video").data("mv");$(".background-video").YTPlayer({fitToBackground:!0,videoId:o,pauseOnScroll:!1,mute:r,callback:function(){$(".background-video").data("ytPlayer").player}}),$(".video-container").css("width",$(window).width()+"px"),$(".video-container ").css("height",parseInt(.5625*$(window).width())+"px"),$(".video-container").height()<$(window).height()&&($(".video-container ").css("height",$(window).height()+"px"),$(".video-container").css("width",parseInt(1280/720*$(window).height())+"px")),$(".video-holder").height($(".media-container").height()),1024<$(window).width()?0<$(".video-holder").size()&&(($(".media-container").height()+150)/9*16>$(".media-container").width()?($("iframe ").height($(".media-container").height()+150).width(($(".media-container").height()+150)/9*16),$("iframe").css({"margin-left":-1*$("iframe").width()/2+"px",top:"-75px","margin-top":"0px"})):($("iframe").width($(window).width()).height($(window).width()/16*9),$("iframe ").css({"margin-left":-1*$("iframe").width()/2+"px","margin-top":-1*$("iframe").height()/2+"px",top:"50%"}))):($(window).width(),$(".video-holder").height($(".media-container").height()),$("iframe").height($(".media-container").height()));var s=$(".fbgs").data("bgscr"),l=$(".fbgs").data("bgtex");$(".bg-scroll").css("background-image","url("+s+")"),$(".bg-title span").html(l),$(".scroll-nav  ul").singlePageNav({filter:":not(.external)",updateHash:!1,offset:70,threshold:120,speed:1200,currentClass:"act-link",onComplete:function(){$(".scroll-nav  a").hasClass("act-link")&&$(".scroll-nav  a.act-link").each(function(){var e=$(this).data("bgscr"),t=$(this).data("bgtex");$(".bg-scroll").css("background-image","url("+e+")"),$(".bg-title span").html(t)})}}),function(){if($(".gallery-items").length){var i=$(".gallery-items").isotope({singleMode:!0,columnWidth:".grid-sizer, .grid-sizer-second, .grid-sizer-three",itemSelector:".gallery-item, .gallery-item-second, .gallery-item-three"});i.imagesLoaded(function(){i.isotope("layout")}),$(".gallery-filters").on("click","a.gallery-filter",function(e){e.preventDefault();var t=$(this).attr("data-filter");return i.isotope({filter:t}),$(".gallery-filters a.gallery-filter").removeClass("gallery-filter-active"),$(this).addClass("gallery-filter-active"),!1})}}(),$(".to-top").on("click",function(){$("html, body").animate({scrollTop:0},"slow")}),$(".custom-scroll-link").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var e=$(this.hash);if((e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length)return $("html,body").animate({scrollTop:e.offset().top-70},{queue:!1,duration:1200,easing:"easeInOutExpo"}),!1}}),$(".accordion").each(function(){var e=2*$(this).attr("data-name");$(this).find(".accordion-inner:nth-child("+e+")").show(),$(this).find(".accordion-inner:nth-child("+e+")").prev().addClass("activeac")}),$(".accordion .accordion-title").click(function(){return $(this).next().is(":hidden")&&($(this).parent().find(".accordion-title").removeClass("activeac").next().slideUp(500),$(this).toggleClass("activeac").next().slideDown(500)),!1}),$("#contactform").submit(function(){var e=$(this).attr("action");return $("#message").slideUp(750,function(){$("#message").hide(),$("#submit").attr("disabled","disabled"),$.post(e,{name:$("#name").val(),email:$("#email").val(),comments:$("#comments").val()},function(e){document.getElementById("message").innerHTML=e,$("#message").slideDown("slow"),$("#submit").removeAttr("disabled"),null!=e.match("success")&&$("#contactform").slideDown("slow")})}),!1}),$("#contactform input, #contactform textarea").keyup(function(){$("#message").slideUp(1500)});var c=$(".nav-button"),d=$(".nav-inner");function u(){d.addClass("isDown"),c.removeClass("cmenu"),d.removeClass("vismen")}c.on("click",function(){d.hasClass("isDown")?(setTimeout(function(){d.addClass("vismen")},120),c.addClass("cmenu"),d.removeClass("isDown")):u()}),$(".sect-subtitle span").fitText(3.2,{minFontSize:"120px",maxFontSize:"140px"})}function initparallax(){var e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}},t=e.any();if(null==t){var i=$(".content");0<i.find("[data-top-bottom]").length&&i.waitForImages(function(){s=skrollr.init(),s.destroy(),skrollr.init({forceHeight:!1,easing:"outCubic",mobileCheck:function(){return!1}})})}t&&($(".background-video").remove(),$(".grid-item-holder").attr("onclick","return true"))}$(document).ready(function(){initBionick(),initparallax()});
//# sourceMappingURL=maps/scripts.js.map
