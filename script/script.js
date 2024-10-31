let nav = document.getElementById("nav")
let valueScroll = 60;
nav.style.padding = "20px 0";

window.onscroll = () =>{
    let scrollY = window.scrollY
    console.log(scrollY);

    if(scrollY > valueScroll){
        nav.style.backgroundColor = "#001861"
        nav.style.transition = "0.2s ease-in-out"
        nav.style.boxShadow = "0 2px 18px black"
        nav.style.padding = "10px 0";
    }else{
        nav.style.backgroundColor = "transparent"
        nav.style.boxShadow = "none"
        nav.style.padding = "20px 0";
    }
    
}

