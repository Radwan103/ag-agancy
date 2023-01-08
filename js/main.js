var navClass = document.getElementById('main-nav');

window.onscroll = function (){
    if(scrollY >= 1){
        navClass.classList.add("nav-toggle");
    }else{
        navClass.classList.remove("nav-toggle");
    }

    var links = document.getElementById('links');
    var link = links.getElementsByTagName('a');

    var sec1 = document.getElementById('services');
    var sec2 = document.getElementById('portfolio');
    var sec3 = document.getElementById('about');
    var sec4 = document.getElementById('team');
    var sec5 = document.getElementById('contact-us');
    
    for(var i =0; i<link.length; i++){
        link[i].classList.remove('activate');
    }

    if (scrollY  >= sec5.offsetTop){
        link[4].classList.add('activate');
    }else if(scrollY >= sec4.offsetTop){
        link[3].classList.add('activate');
    }else if(scrollY >= sec3.offsetTop){
        link[2].classList.add('activate');
    }else if(scrollY >= sec2.offsetTop){
        link[1].classList.add('activate');
    }else if(scrollY >= sec1.offsetTop){
        link[0].classList.add('activate');
    }
    
}
