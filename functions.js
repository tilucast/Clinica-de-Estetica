function navbarCollapse(){
    let navbar = document.querySelector('.navbar');
    if(navbar.className == "navbar"){
        navbar.className += " responsive";
        navbar.removeAttribute("id");
    } else {
        navbar.className = "navbar";
        navbar.setAttribute("id", "topNav");
    }   
};


let prevScroll = window.pageYOffset;
window.onscroll = () => {
    let currentScroll = window.pageYOffset;
    const navbarPosition =  document.querySelector('.navbar');
    
    if(prevScroll > currentScroll){
        navbarPosition.style.top = '0';
    }  else{
        navbarPosition.style.top = '-148px';
    }
    prevScroll = currentScroll;
}


const popupDisplay = document.querySelector('.popup');
setTimeout(() => {
    popupDisplay.style.display = "block";
}, 2000);
const popupClose = document.querySelector('.close-btn');
popupClose.addEventListener("click", () =>{
    popupDisplay.style.display = "none";
}); 


