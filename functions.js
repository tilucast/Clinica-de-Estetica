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
    if(prevScroll > currentScroll){
        document.querySelector('.navbar').style.top = '0';
    }  else{
        document.querySelector('.navbar').style.top = '-75px';
    }

    prevScroll = currentScroll;
}