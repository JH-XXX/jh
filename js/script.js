let slideWrappers = document.querySelectorAll('.slide-wrapper');
slideWrappers.forEach(item=>{
  myMultipleSlide(item);
});

function myMultipleSlide(target){


 
  let slideContainer = target.querySelector('.slides');
  const slides = slideContainer.querySelectorAll('li');
  const slideCount = slides.length;
  let currentIdx = 0;
  const slideWidth = 309;
  const slideGap = 133;
  const maxSlides = 1;
  const prevBtn = target.querySelector('.prev');
  const nextBtn = target.querySelector('.next');
  
  slideContainer.style.width = (slideWidth*slideCount)+(slideGap*(slideCount-1))+'px';
  
  function moveSlide(num){
    if(num > slideCount - maxSlides){
      num = 0;
    }
    if(num < 0){
      num = slideCount - maxSlides;
    }
  
    slideContainer.style.left = `${-num*(slideWidth+slideGap)}px`;
    currentIdx = num;
    
  }
  prevBtn.addEventListener('click',()=>{
      moveSlide(currentIdx - 1);
  });
  nextBtn.addEventListener('click',()=>{
      moveSlide(currentIdx + 1);
  });
  
  window.addEventListener('keydown',(e)=>{
    if(e.key === 'Arrowleft'){
        moveSlide(currentIdx - 1);
    }
    if(e.key === 'Arrowright'){
        moveSlide(currentIdx + 1);
    }
  });
}//myMultipleSlide








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