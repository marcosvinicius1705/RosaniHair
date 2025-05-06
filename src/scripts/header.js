// document.querySelector(".buttonMenu").addEventListener("click",()=>{document.querySelector("ul").classList.toggle("menu")}),document.querySelectorAll(".scroll-link").forEach(a=>{a.addEventListener("click",function(a){a.preventDefault();const b=this.getAttribute("href"),c=document.querySelector(b),d=c.offsetTop;window.scrollTo({top:d,behavior:"smooth"})})});

document.querySelector(".buttonMenu").addEventListener("click", () => {
    document.querySelector("ul").classList.toggle("menu");
});


// document.querySelectorAll(".scroll-link").forEach(link => {

//     link.addEventListener("click", function(event) {

//         event.preventDefault();
        
//         const targetId = this.getAttribute("href");

//         const targetElement = document.querySelector(targetId);
        
//         const targetPosition = targetElement.offsetTop;

//         window.scrollTo({
//             top: targetPosition,
//             behavior: "smooth"
//         });
//     });
// });