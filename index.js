let section=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

windows.onscroll=()=>{
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