let loader=document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display="none";
})



let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menuIcon.onclick=()=>{
    navbar.classList.toggle('active')
}



let section=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset&&top<offset+height){
            navlinks.forEach(links=>{
                document.querySelector('header nav a[href*=' +id+']'.classList.add('active'));
            })
        }
    })
}

