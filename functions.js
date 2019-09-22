function navbarCollapse(){
    const navbar = document.querySelector('#topNav');
    if(navbar.className === "navbar"){
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar";
    }
};


let prevScroll = window.pageYOffset;
window.onscroll = () => {
    let currentScroll = window.pageYOffset;
    const navbarPosition =  document.querySelector('.navbar');
    
    if(prevScroll > currentScroll){
        navbarPosition.style.top = '0';
    }  else{
        navbarPosition.style.top = '-120px';
    }
    prevScroll = currentScroll;
}


const popupDisplay = document.querySelector('.popup');
setTimeout(() => {
    popupDisplay.style.display = "block";
}, 1000);
const popupClose = document.querySelector('.popup__content--close');
popupClose.addEventListener("click", () =>{
    popupDisplay.style.display = "none";
}); 


