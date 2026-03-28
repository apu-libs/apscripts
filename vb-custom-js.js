jQuery(document).ready(function($){
// Back to top
	jQuery('a[href=#top]').click(function(){jQuery('html, body').animate({scrollTop:0}, 'slow');return false;});
// DROPDOWN MENU/ACCORDION MENU	
	jQuery('.masthead ul li ul, .main-navigation ul li ul, .accordion-navigation ul li ul').parent('li').addClass('lists');
	jQuery('.lists').find("a:first").append(' <span class="sub-dot"></span>');
	jQuery(".masthead ul li, .main-navigation ul li, .accordion-navigation ul li").each(function(){	
		var jQuerysubmenu = jQuery(this).find('ul:first');
			jQuery(this).hover(function(){
			jQuerysubmenu.stop().css({overflow:"hidden",height:"auto",display:"none",paddingTop:0}).slideDown(300,
			function(){jQuery(this).css({overflow:"visible",height:"auto"});});
		},  function(){jQuerysubmenu.stop().slideUp(300, function(){jQuery(this).css({overflow:"hidden",display:"none"});});});
	});	
	jQuery('.accordion-navigation select').bind('change', function(){
		var url = jQuery(this).val();
		if(url){window.location = url;}
		return false;
	});
// Responsive nav	
	$.fn.menumaker = function(options){
		var cssmenu = $(this), settings = $.extend({
			title: "Menu",
			format: "dropdown",
			sticky: false
		}, options);
		return this.each(function(){
			cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
			$(this).find("#menu-button").on('click', function(){
				$(this).toggleClass('menu-opened');
				var mainmenu = $(this).next('ul');
				if(mainmenu.hasClass('open')){ 
					mainmenu.slideToggle().removeClass('open');
				} else {
					mainmenu.slideToggle().addClass('open');
					if(settings.format === "dropdown"){
						mainmenu.find('ul').show();
					}
				}
			});
			cssmenu.find('li ul').parent().addClass('has-sub');
			multiTg = function(){
				cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
				cssmenu.find('.submenu-button').on('click', function(){
					$(this).toggleClass('submenu-opened');
					if($(this).siblings('ul').hasClass('open')){
						$(this).siblings('ul').removeClass('open').slideToggle();
					} else {
						$(this).siblings('ul').addClass('open').slideToggle();
					}
				});
			};
			if(settings.format === 'multitoggle') multiTg();
			else cssmenu.addClass('dropdown');
			if(settings.sticky === true) cssmenu.css('position', 'fixed');
			resizeFix = function(){
				var mediasize = 1000;
				if($( window ).width() > mediasize){
					cssmenu.find('ul').show();
				}
				if($(window).width() <= mediasize){
					cssmenu.find('ul').hide().removeClass('open');
				}
			};
			resizeFix();
			return $(window).on('resize', resizeFix);
		});
	};
	$(".main-navigation").menumaker({
		title: "Menu",
		format: "multitoggle"
	});

	
	jQuery(function(){
	// ExclusiveTabs
		jQuery('.exclusiveTabs ul.exclusiveTab-head').addClass('active').find('> li:eq(0)').addClass('activeSlide');		
		jQuery('.exclusiveTabs ul.exclusiveTab-head li a').click(function (g){ 
			var tab = jQuery(this).closest('.exclusiveTabs'), 
				index = jQuery(this).closest('li').index();			
			tab.find('ul.exclusiveTab-head > li').removeClass('activeSlide');
			jQuery(this).closest('li').addClass('activeSlide');			
			tab.find('.exclusiveTabs_body').find('div.exclusiveTab_item').not('div.exclusiveTab_item:eq(' + index + ')').slideUp();
			tab.find('.exclusiveTabs_body').find('div.exclusiveTab_item:eq(' + index + ')').slideDown();			
			g.preventDefault();
		});	
	// Tabs
		jQuery('#sidebarTabs ul#sidebarTabs-head').addClass('active').find('> li:eq(0)').addClass('activeSlide');		
		jQuery('#sidebarTabs ul#sidebarTabs-head li a').click(function (g){ 
			var tab = jQuery(this).closest('#sidebarTabs'), 
				index = jQuery(this).closest('li').index();			
			tab.find('ul#sidebarTabs-head > li').removeClass('activeSlide');
			jQuery(this).closest('li').addClass('activeSlide');			
			tab.find('#sidebarTabs_body').find('div.sidebarTab_item').not('div.sidebarTab_item:eq(' + index + ')').slideUp();
			tab.find('#sidebarTabs_body').find('div.sidebarTab_item:eq(' + index + ')').slideDown();			
			g.preventDefault();
		});
	// cat Dropdown		
		var dropdown = document.getElementById("cat");
		function onCatChange(){
			var selectedValue = dropdown.options[dropdown.selectedIndex].value;
			var baseURL = "https://vrittabharati.blogspot.com"; // Replace with your real base URL
			if (selectedValue > 0){
				window.location.href = baseURL + "?cat=" + selectedValue;
			}
		}
		dropdown.onchange = onCatChange;
	});
});
