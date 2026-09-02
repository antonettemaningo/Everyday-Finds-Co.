
document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu'), links=document.querySelector('.navlinks');
 if(menu) menu.addEventListener('click',()=>links.classList.toggle('mobile-open'));
});
