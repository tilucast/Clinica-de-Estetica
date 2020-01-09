const popupDisplay = document.querySelector('.popup');
setTimeout(() => {
  popupDisplay.style.display = 'flex';
}, 100000);
const popupClose = document.querySelector('.close-btn');
popupClose.addEventListener('click', () => {
  popupDisplay.style.display = 'none';
});
