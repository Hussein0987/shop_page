let icon=document.querySelector(".landing .iconmenu"),links=document.querySelector(".landing .navContent");icon.onclick=()=>{links.classList.toggle("shownav")};
let boxs=document.querySelectorAll(".testem .box"),left=document.querySelector(".testem .left"),right=document.querySelector(".testem .right"),index=boxs.length;function check(){boxs[3].classList.contains("active")?right.style.opacity="0.5":right.style.opacity="1",boxs[0].classList.contains("active")?left.style.opacity="0.5":left.style.opacity="1"}check(),right.onclick=()=>{for(let t=0;t<index;t++)if(boxs[t].classList.contains("active")&&boxs[t].dataset.num!=index-1){boxs[t].classList.remove("active"),boxs[t].nextElementSibling.classList.add("active");break}check()},left.onclick=()=>{for(let t=0;t<index;t++)if(boxs[t].classList.contains("active")&&0!=boxs[t].dataset.num){boxs[t].classList.remove("active"),boxs[t].previousElementSibling.classList.add("active");break}check()};