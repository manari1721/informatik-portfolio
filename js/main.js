// JavaScript Document

$(document).ready(function(){
	$('.next').on('click', function(){
		var currentImg = $('.active1');
		var nextImg = currentImg.next();
		
			if(nextImg.length){
				currentImg.removeClass('active1').css('z-index', -10);
				nextImg.addClass('active1').css('z-index', 10);
			}
	});
	
	$('.prev').on('click', function(){
		var currentImg = $('.active1');
		var prevImg = currentImg.prev();
		
			if(prevImg.length){
				currentImg.removeClass('active1').css('z-index', -10);
				prevImg.addClass('active1').css('z-index', 10);
			}
	});
});







