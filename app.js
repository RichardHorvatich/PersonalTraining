// First we need our variables or constants in JS to be tagged to our HTML elements. 

//"hamburger" will refer to our HTML elements: .header, .nav-bar, .nav-list and .hamburger
//  and will thus only effect the hamburger button and include the navigation within this hamburger
// list

//"mobile_menu" will not refer to the hamburger icon but rather the list once the 
//  hamburger has been clicked

// "menu_item" will refer to each link in the list and will thus only effect the list items.
// "header" will refer to .header.container and affect only the header



const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
// Element(hamburger).addEventListener('event', function useCapture); 
//Upon event( click or scroll )
//Element(hamburger).classList.toggle(our button will be a toggle button, 'active' makes it live)
//Element(mobile_menu).classList.toggle(again this mobile menu will be a toggle button and only show
//in response to being displayed on a mobile device;
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});




