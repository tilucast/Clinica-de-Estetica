function navbarCollapse(){
    const navbar = document.querySelector('#topNav');
    if(navbar.className === "navbar"){
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar";
    }
}