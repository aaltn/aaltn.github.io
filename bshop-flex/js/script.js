var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');	

navToggle.addEventListener('click', function() {

	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');				
	} else {
		navMain.classList.remove('main-nav--opened');
		navMain.classList.add('main-nav--closed');
	}
});


var sliderInput1 = document.getElementById('reviews-input-1')
var sliderInput2 = document.getElementById('reviews-input-2')
var sliderInput3 = document.getElementById('reviews-input-3')
var prevBtn = document.querySelector('.reviews__prev');
var nextBtn = document.querySelector('.reviews__next');

nextBtn.onclick =  function() {			
	if (sliderInput1.checked) {
		sliderInput1.checked = false;				
		sliderInput2.checked = true;					
	} else {
		if (sliderInput2.checked) {
			sliderInput2.checked = false;
			sliderInput3.checked = true;			
		} else {
			sliderInput3.checked = false;
			sliderInput1.checked = true;
		}				
	}
};
prevBtn.onclick =  function() {			
	if (sliderInput3.checked) {
		sliderInput3.checked = false;				
		sliderInput2.checked = true;					
	} else {
		if (sliderInput2.checked) {
			sliderInput2.checked = false;
			sliderInput1.checked = true;			
		} else {
			sliderInput1.checked = false;
			sliderInput3.checked = true;
		}				
	}
};