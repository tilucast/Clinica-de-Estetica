const menu = document.querySelector('#menu-event');
menu.addEventListener('click', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar.className === 'navbar') {
    navbar.className += ' responsive';
    navbar.removeAttribute('id');
  } else {
    navbar.className = 'navbar';
    navbar.setAttribute('id', 'topNav');
  }
});

let prevScroll = window.pageYOffset;
window.onscroll = () => {
  const currentScroll = window.pageYOffset;
  const navbarPosition = document.querySelector('.navbar');

  if (prevScroll > currentScroll) {
    navbarPosition.style.top = '0';
  } else {
    navbarPosition.style.top = '-148px';
  }
  prevScroll = currentScroll;
};
