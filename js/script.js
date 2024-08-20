const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll',()=>{
  let currentScroll = window.scrollY;
  
  if(currentScroll > lastScroll){
    body.classList.remove('scroll-up');
    body.classList.add('scroll-down');
  }else if(currentScroll < lastScroll){
    body.classList.remove('scroll-down');
    body.classList.add('scroll-up');
  }

  lastScroll = currentScroll;
});