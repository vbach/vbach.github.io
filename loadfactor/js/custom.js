
"use strict"; // Start of use strict

	// 1. revolution slider
	function revolutionSliderActiver () {
		if ($('.rev_slider_wrapper #slider1').length) {
			jQuery("#slider1").revolution({
				sliderType:"standard",
				sliderLayout:"auto",
				dottedOverlay:"yes",
				delay:5000,
				navigation: {
					arrows:{enable:true,
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
	                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
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
	                disableFocusListener: false,
	            }
			});
		};
	}


	//Main menu
	function mainmenu() {

	    var navcollapse = $('.main-menu .navigation li');
	        navcollapse.hover(function() {
	            $(this).children('ul').stop(true, false, true).slideToggle(300);
	        });
		//Submenu Dropdown Toggle
		if($('.main-menu .mobile-menu li.dropdown ul').length){
			$('.main-menu .mobile-menu li.dropdown').append('<div class="dropdown-btn"></div>');
			
			//Dropdown Button
			$('.main-menu .mobile-menu li.dropdown .dropdown-btn').on('click', function() {
				$(this).prev('ul').slideToggle(500);
			});
		}
	}


	//Header Sticky
	function stickyHeader() {
	    if ($('.stricky').length) {
	        var strickyScrollPos = 100;
	        if ($(window).scrollTop() > strickyScrollPos) {
	            $('.stricky').addClass('stricky-fixed');
	            $('.scroll-to-top').fadeIn(1500);
	        } else if ($(this).scrollTop() <= strickyScrollPos) {
	            $('.stricky').removeClass('stricky-fixed');
	            $('.scroll-to-top').fadeOut(1500);
	        }
	    };
	}


	//gallery fancybox activator 
	function GalleryFancyboxActivator () {
	  var galleryFcb = $('.fancybox');
	  if(galleryFcb.length){
	    galleryFcb.fancybox({
	      openEffect  : 'elastic',
	      closeEffect : 'elastic',
	      helpers : {
	        media : {}
	      }
	    });
	  }
	}


	//select menu
	function selectMenu () {
		if ($('.select-menu').length) {
			$('.select-menu').selectmenu();
		};
	}


	//Two Item Carousel
	if ($('.two-item-carousel').length) {
		$('.two-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:2
				},
				1200:{
					items:2
				},
			}
		});    		
	}

	//Three Item Carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				},
			}
		});    		
	}


	//Three Item portfolio Carousel
	if ($('.three-item-portfolio-carousel').length) {
		$('.three-item-portfolio-carousel').owlCarousel({
			loop:true,
			margin:5,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				},
			}
		});    		
	}


	//Six Item Carousel
	if ($('.six-item-carousel').length) {
		$('.six-item-carousel').owlCarousel({
			loop:true,
			margin:5,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:5
				},
				1200:{
					items:6
				},
			}
		});    		
	}

	
	//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.masonry-gallery .outer-container').length){

			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-gallery .outer-container');
			var $filter=$('.filter-btns');

			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.default-portfolio-item'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});


			// Isotope Filter
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');

				try {
					$container.isotope({
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {

				}
				return false;
			});


			winDow.resize(function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});


			var filterItemA	= $('.filter-btns li');

			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}

	
	// Fact Counter
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .counter-column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			});
		}
	}


	//filter-list
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}


	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	

	//Video Fancybox
	function videoFancybox () {
		if ($("a.video-fancybox").length) {
			$("a.video-fancybox").on('click', function() {
			    $.fancybox({
			            'padding'       : 0,
			            'autoScale'     : false,
			            'transitionIn'  : 'none',
			            'transitionOut' : 'none',
			            'title'         : this.title,
			            'width'         : 680,
			            'height'        : 495,
			            'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			            'type'          : 'swf',
			            openEffect      : 'elastic',
					    closeEffect     : 'elastic',
					    helpers         : {
					    	media : {}
					    },
			            'swf'           : {
			            	'wmode'             : 'transparent',
			                'allowfullscreen'   : 'true'
			            }
			        });
			    return false;
			});
		};
	}


	//Select menu 
	function selectDropdown() {
	    if ($(".selectmenu").length) {
	        $(".selectmenu").selectmenu();

	        var changeSelectMenu = function(event, item) {
	            $(this).trigger('change', item);
	        };
	        $(".selectmenu").selectmenu({ change: changeSelectMenu });
	    };
	}


	// Prealoder
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}


	// Scroll to top
	function scrollToTop() {
	    if ($('.scroll-top').length) {

	        //Check to see if the window is top if not then display button
	        $(window).scroll(function() {
	            if ($(this).scrollTop() > 200) {
	                $('.scroll-top').fadeIn();
	            } else {
	                $('.scroll-top').fadeOut();
	            }
	        });

	        //Click event to scroll to top
	        $('.scroll-top').on('click', function() {
	            $('html, body').animate({ scrollTop: 0 }, 1500);
	            return false;
	        });
	    }
	}


	//flexslider
	function singleProduct () {
	    
	$('.flexslider').flexslider({
	    animation: "slide",
	    controlNav: "thumbnails"
	  });
	}


	//Contact Form Validation
	if($("#contact-form").length){
		$("#contact-form").validate({
		    submitHandler: function(form) {
		      var form_btn = $(form).find('button[type="submit"]');
		      var form_result_div = '#form-result';
		      $(form_result_div).remove();
		      form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
		      var form_btn_old_msg = form_btn.html();
		      form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
		      $(form).ajaxSubmit({
		        dataType:  'json',
		        success: function(data) {
		          if( data.status == 'true' ) {
		            $(form).find('.form-control').val('');
		          }
		          form_btn.prop('disabled', false).html(form_btn_old_msg);
		          $(form_result_div).html(data.message).fadeIn('slow');
		          setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
		        }
		      });
		    }
		});
	}


	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	

	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


	// instance of fuction while Document ready event	
	jQuery(document).on('ready', function () {
		(function ($) {
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
	jQuery(window).on('load', function () {
		(function ($) {
			enableMasonry();
			
		})(jQuery);
	});

	// instance of fuction while Window Scroll event
	jQuery(window).on('scroll', function () {	
		(function ($) {
			stickyHeader();
			factCounter();
		})(jQuery);
	});
