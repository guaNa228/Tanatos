var lazyLoadInstance = new LazyLoad({
	elements_selector: ".lazy"
	// ... more custom settings?
});

$(document).on("click", ".icon-menu", function() {
	$('.menu_active_wrapper').css("left", "0");
})

$(document).on("click", ".hide_menu_btn", function() {
	$('.menu_active_wrapper').css("left", "150%");
})

$(document).ready(function(){
    $('.menu_list li a').click( function() { 
			var scroll_el = $(this).attr('href');
			var posTop = document.body.scrollTop;
      if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ 
					scrollTop: $(scroll_el).offset().top+1+posTop
				}, 500); 
      }
			$('.menu_active_wrapper').css("left", "150%");
	    return false; // выключаем стандартное действие
    });
});

$(document).on("click", ".scroll_arrow, .hire_btn, .works_btn", function() {
	var link = this.getAttribute('href')
	var posTop = document.body.scrollTop;
	$('body').animate({ 
		scrollTop: $(link).offset().top+posTop+1
	}, 500);
	return false
})

$(document).on("mouseover", ".team_member", function() {
	var hovered_index = Number($(this).children('.team_img_wrap').children("img").attr("src").substring(13, 14))
	var sensor_wrap = document.getElementsByClassName('active_member_sensor')[0]
	var sensors = sensor_wrap.getElementsByTagName("span")
	sensors[hovered_index-1].classList.add("member_sensor_active")
})

$(".team_member").mouseleave(function(){
  var hovered_index = Number($(this).children('.team_img_wrap').children("img").attr("src").substring(13, 14))
	var sensor_wrap = document.getElementsByClassName('active_member_sensor')[0]
	var sensors = sensor_wrap.getElementsByTagName("span")
	sensors[hovered_index-1].classList.remove("member_sensor_active")
});

var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },autoplay: {
  	delay: 15000,
		disableOnInteraction: false,
		waitForTransition: false,
	},
	loop: true,
	spaceBetween: 50,
});