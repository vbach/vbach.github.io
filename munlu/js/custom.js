"use strict"; // Start of use strict

// Custom Form Select
var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      h = this.parentNode.previousSibling;
      for (i = 0; i < s.length; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          for (k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

// 1. revolution slider
function revolutionSliderActiver() {
  if ($(".rev_slider_wrapper #slider1").length) {
    jQuery("#slider1").revolution({
      sliderType: "standard",
      sliderLayout: "auto",
      dottedOverlay: "yes",
      delay: 5000,
      navigation: {
        arrows: {
          enable: true,
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 60,
            v_offset: 0
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 60,
            v_offset: 0
          }
        }
      },
      gridwidth: [1200, 940, 720, 480],
      gridheight: [950, 800, 700, 550],
      lazyType: "none",
      parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 2000,
        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50]
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false
      }
    });
  }
}

//Main menu
function mainmenu() {
  var navcollapse = $(".main-menu .navigation li");
  navcollapse.hover(function() {
    $(this)
      .children("ul")
      .stop(true, false, true)
      .slideToggle(300);
  });
  //Submenu Dropdown Toggle
  if ($(".main-menu .mobile-menu li.dropdown ul").length) {
    $(".main-menu .mobile-menu li.dropdown").append(
      '<div class="dropdown-btn"></div>'
    );

    //Dropdown Button
    $(".main-menu .mobile-menu li.dropdown .dropdown-btn").on(
      "click",
      function() {
        $(this)
          .prev("ul")
          .slideToggle(500);
      }
    );
  }
}

//Header Sticky
function stickyHeader() {
  if ($(".stricky").length) {
    var strickyScrollPos = 100;
    if ($(window).scrollTop() > strickyScrollPos) {
      $(".stricky").addClass("stricky-fixed");
      $(".scroll-to-top").fadeIn(1500);
    } else if ($(this).scrollTop() <= strickyScrollPos) {
      $(".stricky").removeClass("stricky-fixed");
      $(".scroll-to-top").fadeOut(1500);
    }
  }
}

//gallery fancybox activator
function GalleryFancyboxActivator() {
  var galleryFcb = $(".fancybox");
  if (galleryFcb.length) {
    galleryFcb.fancybox({
      openEffect: "elastic",
      closeEffect: "elastic",
      helpers: {
        media: {}
      }
    });
  }
}

//select menu
function selectMenu() {
  if ($(".select-menu").length) {
    $(".select-menu").selectmenu();
  }
}

//Two Item Carousel
if ($(".two-item-carousel").length) {
  $(".two-item-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    smartSpeed: 700,
    autoplay: 5000,
    navText: [
      '<span class="fa fa-angle-left"></span>',
      '<span class="fa fa-angle-right"></span>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      800: {
        items: 1
      },
      1024: {
        items: 2
      },
      1200: {
        items: 2
      }
    }
  });
}

//Three Item Carousel
if ($(".three-item-carousel").length) {
  $(".three-item-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    smartSpeed: 700,
    autoplay: 5000,
    navText: [
      '<span class="fa fa-angle-left"></span>',
      '<span class="fa fa-angle-right"></span>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      800: {
        items: 2
      },
      1024: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  });
}

//Three Item portfolio Carousel
if ($(".three-item-portfolio-carousel").length) {
  $(".three-item-portfolio-carousel").owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    smartSpeed: 700,
    autoplay: 5000,
    navText: [
      '<span class="fa fa-angle-left"></span>',
      '<span class="fa fa-angle-right"></span>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      800: {
        items: 2
      },
      1024: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  });
}

//Six Item Carousel
if ($(".six-item-carousel").length) {
  $(".six-item-carousel").owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    smartSpeed: 700,
    autoplay: 5000,
    navText: [
      '<span class="fa fa-angle-left"></span>',
      '<span class="fa fa-angle-right"></span>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 3
      },
      1024: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  });
}

//Sortable Masonary with Filters
function enableMasonry() {
  if ($(".masonry-gallery .outer-container").length) {
    var winDow = $(window);
    // Needed variables
    var $container = $(".masonry-gallery .outer-container");
    var $filter = $(".filter-btns");

    $container.isotope({
      filter: "*",
      masonry: {
        columnWidth: ".default-portfolio-item"
      },
      animationOptions: {
        duration: 500,
        easing: "linear"
      }
    });

    // Isotope Filter
    $filter.find("li").on("click", function() {
      var selector = $(this).attr("data-filter");

      try {
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false
          }
        });
      } catch (err) {}
      return false;
    });

    winDow.resize(function() {
      var selector = $filter.find("li.active").attr("data-filter");

      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false
        }
      });
    });

    var filterItemA = $(".filter-btns li");

    filterItemA.on("click", function() {
      var $this = $(this);
      if (!$this.hasClass("active")) {
        filterItemA.removeClass("active");
        $this.addClass("active");
      }
    });
  }
}

// Fact Counter
function factCounter() {
  if ($(".fact-counter").length) {
    $(".fact-counter .counter-column.animated").each(function() {
      var $t = $(this),
        n = $t.find(".count-text").attr("data-stop"),
        r = parseInt($t.find(".count-text").attr("data-speed"), 10);

      if (!$t.hasClass("counted")) {
        $t.addClass("counted");
        $({
          countNum: $t.find(".count-text").text()
        }).animate(
          {
            countNum: n
          },
          {
            duration: r,
            easing: "linear",
            step: function() {
              $t.find(".count-text").text(Math.floor(this.countNum));
            },
            complete: function() {
              $t.find(".count-text").text(this.countNum);
            }
          }
        );
      }
    });
  }
}

//filter-list
if ($(".filter-list").length) {
  $(".filter-list").mixItUp({});
}

//LightBox / Fancybox
if ($(".lightbox-image").length) {
  $(".lightbox-image").fancybox({
    openEffect: "fade",
    closeEffect: "fade",
    helpers: {
      media: {}
    }
  });
}

//Video Fancybox
function videoFancybox() {
  if ($("a.video-fancybox").length) {
    $("a.video-fancybox").on("click", function() {
      $.fancybox({
        padding: 0,
        autoScale: false,
        transitionIn: "none",
        transitionOut: "none",
        title: this.title,
        width: 680,
        height: 495,
        href: this.href.replace(new RegExp("watch\\?v=", "i"), "v/"),
        type: "swf",
        openEffect: "elastic",
        closeEffect: "elastic",
        helpers: {
          media: {}
        },
        swf: {
          wmode: "transparent",
          allowfullscreen: "true"
        }
      });
      return false;
    });
  }
}

//Select menu
function selectDropdown() {
  if ($(".selectmenu").length) {
    $(".selectmenu").selectmenu();

    var changeSelectMenu = function(event, item) {
      $(this).trigger("change", item);
    };
    $(".selectmenu").selectmenu({ change: changeSelectMenu });
  }
}

// Prealoder
function handlePreloader() {
  if ($(".preloader").length) {
    $(".preloader")
      .delay(200)
      .fadeOut(500);
  }
}

// Scroll to top
function scrollToTop() {
  if ($(".scroll-top").length) {
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $(".scroll-top").fadeIn();
      } else {
        $(".scroll-top").fadeOut();
      }
    });

    //Click event to scroll to top
    $(".scroll-top").on("click", function() {
      $("html, body").animate({ scrollTop: 0 }, 1500);
      return false;
    });
  }
}

//flexslider
function singleProduct() {
  $(".flexslider").flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
}

//Contact Form Validation
if ($("#contact-form").length) {
  $("#contact-form").validate({
    submitHandler: function(form) {
      var form_btn = $(form).find('button[type="submit"]');
      var form_result_div = "#form-result";
      $(form_result_div).remove();
      form_btn.before(
        '<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>'
      );
      var form_btn_old_msg = form_btn.html();
      form_btn.html(form_btn.prop("disabled", true).data("loading-text"));
      $(form).ajaxSubmit({
        dataType: "json",
        success: function(data) {
          if (data.status == "true") {
            $(form)
              .find(".form-control")
              .val("");
          }
          form_btn.prop("disabled", false).html(form_btn_old_msg);
          $(form_result_div)
            .html(data.message)
            .fadeIn("slow");
          setTimeout(function() {
            $(form_result_div).fadeOut("slow");
          }, 6000);
        }
      });
    }
  });
}

//Progress Bar
if ($(".progress-line").length) {
  $(".progress-line").appear(
    function() {
      var el = $(this);
      var percent = el.data("width");
      $(el).css("width", percent + "%");
    },
    { accY: 0 }
  );
}

//Fact Counter + Text Count
if ($(".count-box").length) {
  $(".count-box").appear(
    function() {
      var $t = $(this),
        n = $t.find(".count-text").attr("data-stop"),
        r = parseInt($t.find(".count-text").attr("data-speed"), 10);

      if (!$t.hasClass("counted")) {
        $t.addClass("counted");
        $({
          countNum: $t.find(".count-text").text()
        }).animate(
          {
            countNum: n
          },
          {
            duration: r,
            easing: "linear",
            step: function() {
              $t.find(".count-text").text(Math.floor(this.countNum));
            },
            complete: function() {
              $t.find(".count-text").text(this.countNum);
            }
          }
        );
      }
    },
    { accY: 0 }
  );
}

// Elements Animation
if ($(".wow").length) {
  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true // act on asynchronously loaded content (default is true)
  });
  wow.init();
}

// instance of fuction while Document ready event
jQuery(document).on("ready", function() {
  (function($) {
    revolutionSliderActiver();
    selectMenu();
    GalleryFancyboxActivator();
    videoFancybox();
    selectDropdown();
    handlePreloader();
    scrollToTop();
    singleProduct();
    mainmenu();
    enableMasonry();
  })(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).on("load", function() {
  (function($) {
    enableMasonry();
  })(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on("scroll", function() {
  (function($) {
    stickyHeader();
    factCounter();
  })(jQuery);
});
