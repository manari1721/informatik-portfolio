WhatAnimation('col-md-4');

$(window).scroll(function(){
	WhatAnimation('col-md-4')
});

function WhatAnimation(name) {
	$('.' + name).each(function(){
		switch (name){
			case 'col-md-4': AddClass(this, 'fade');
			break;			
		 }		
	});
}

function AddClass(object, name) {
	if(IsVisible(object)) {
		$(object).addClass(name);
	}
	
	else {
		$(object).removeClass(name);
	}
}

function IsVisible(object) {
	var viewport = $(window).scrollTop() + $(window).height();
	var rand = $(object).offset();
	rand.bottom = rand.top + $(object).outerHeight();
	return (!(viewport < (rand.top + 550) || $(window).scrollTop() > (rand.bottom - 550)));
	
}



