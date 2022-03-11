/*Фиксированный header*/
$(function() {

	var introH = $("#intro").innerHeight(),
		header = $(".header"),
		scrollOffset = $(window).scrollTop();

	checkScroll(scrollOffset);
	
	$(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);

	});

	function checkScroll(scrollOffset) {

	if( scrollOffset >= introH - 10) {
			header.addClass("fixed");
		}
		else {
			header.removeClass("fixed");
		}

	}
});

/*Smooth Scroll*/
$("[data-scroll]").on("click", function(event) {
	event.preventDefault();

	var blockId = $(this).data('scroll'),
		blockOffset = $(blockId).offset().top;

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
}) 

/*FAQ меню, скрытие раскрытие*/
$(document).ready(function() {
	$('.accordion-item__trigger').click(function(){
		$(this).parent('.accordion-item').toggleClass('accordion-item--active');
	});
});


/*Menu nav toggle*/
$("#nav_toggle").on("click", function(event) {
	event.preventDefault();

	$(".nav-toggle").toggleClass("active");
	$("#nav").toggleClass("active");
})

