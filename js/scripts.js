/* SWITCH LNG*/
var langBtn = document.querySelectorAll('.lang-btn');

for (var i = 0; i<langBtn.length; i++){
	langBtn[i].addEventListener('click', function(event){
		event.preventDefault();
		removeActiveClass(langBtn, 'lang-btn--active');
		this.classList.add('lang-btn--active');
	});
};

var switchSlides = function(pagBtn, slidesContent, classActive){
	for (var i = 0; i<pagBtn.length; i++){
	pagBtn[i].addEventListener('click', function(event){
		event.preventDefault();
		removeActiveClass(pagBtn, 'pagination__btn--active');
		this.classList.add('pagination__btn--active');
		
		for(var j = 0; j < pagBtn.length; j++) {
			if(this.getAttribute('href') == "#" + slidesContent[j].getAttribute('id')){
				removeActiveClass(slidesContent, classActive);
				slidesContent[j].classList.add(classActive);
			}
		}
	})
};
}

var removeActiveClass = function(arr2, classN){
	for (var j = 0; j < arr2.length; j++){
		arr2[j].classList.remove(classN);
	}
};


var sertSlides = document.querySelectorAll('.text-slider__wrap .sert-img');
var aboutPag = document.querySelectorAll('.about__pag .pagination__btn');

switchSlides(aboutPag, sertSlides, 'active-sert');

var aboutSlides = document.querySelectorAll('.about__slider img');
var aboutPagSlider = document.querySelectorAll('.about__slider-pag .pagination__btn');

switchSlides(aboutPagSlider, aboutSlides, 'active-slide');

var reviewsContent = document.querySelectorAll('.reviews__wrap .reviews__part');
var reviewsPag = document.querySelectorAll('.reviews__pag .pagination__btn')

switchSlides(reviewsPag, reviewsContent, 'reviews__part--active');

/*
var switchSliderAbout = function(e){
	for (var i = 0; i<aboutPagSlider.length; i++){
		aboutPagSlider[i].addEventListener('click', function(event){
			event.preventDefault();
			removeActiveClass(aboutPagSlider, 'pagination__btn--active');
			this.classList.add('pagination__btn--active');
			
			for(var j = 0; j < aboutPagSlider.length; j++) {
				if(this.getAttribute('href') == "#" + aboutSlides[j].getAttribute('id')){
					removeActiveClass(aboutSlides, 'active-slide');
					aboutSlides[j].classList.add('active-slide');
				}
			}
		})
	};
};

switchSliderAbout();
*/

/*OPEN MENU*/
var menuBtn = document.querySelector('.menu-btn');
var openMenu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('menu-btn--active');
	openMenu.classList.toggle('menu__list--active');
});
