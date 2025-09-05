const home_bar = document.getElementById('home_bar');
window.addEventListener('scroll', function(){
    if(window.scrollY > 100){
        home_bar.classList.add('navbarScroll');
    }else{
        home_bar.classList.remove('navbarScroll');
    }
})