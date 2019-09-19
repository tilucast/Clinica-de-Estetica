function navbarCollapse(){
    const navbar = document.querySelector('#topNav');
    if(navbar.className === "navbar"){
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar";
    }
};



let prevScroll = window.pageYOffset;
window.onscroll = function (){
    let currentScroll = window.pageYOffset;
    const navbarPosition =  document.querySelector('.navbar');
    
    if(prevScroll > currentScroll){
        navbarPosition.style.top = '0';
    }  else{
        navbarPosition.style.top = '-120px';
    }
    prevScroll = currentScroll;
}

