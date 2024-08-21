let slideWrappers = document.querySelectorAll('.slide-wrapper');
slideWrappers.forEach(item=>{
myMultipleSlide(item);
});

function myMultipleSlide(target){


 
  let slideContainer = target.querySelector('.slides');
  let slides = slideContainer.querySelectorAll('li');
  const slideCount = slides.length;
  let currentIdx = 0;
  const slideWidth = 309;
  const maxSlides = 1;
  const prevBtn = target.querySelector('.prev');
  const nextBtn = target.querySelector('.next');
  let pager = document.querySelector('.pager');


  
  slideContainer.style.width = slideWidth*slideCount+'px';
  
  function moveSlide(num){
    if(num > slideCount - maxSlides){
      num = 0;
    }
    if(num < 0){
      num = slideCount - maxSlides;
    }
    slideContainer.style.left = `${-num*slideWidth}px`;
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

let pagerHTML = '';

slides.forEach((item,idx)=>{  
  pagerHTML += `<a href="">${idx}</a>`;
  item.style.left = `${idx*100}%`;
});
pager.innerHTML = pagerHTML;

let pagerBtn = pager.querySelectorAll('a');

pagerBtn.forEach((pager,idx)=>{
  pager.addEventListener('click',(e)=>{
    e.preventDefault();
    showSlide(idx);
  });
});
function showSlide(num){
  if(currentIdx === num) return;
  let currentSlide = slides[currentIdx];
  let nextSlide = slides[num];

  currentIdx.animate([{left: '0%'},{left:'-100%'}],{duration:500, fill:'forwards'});
  nextSlide.animate([{left: '-100%'},{left:'0%'}],{duration:500, fill:'forwards'});
  currentIdx = num;

updatePager();
}
function updatePager(){
  for(let pager of pagerBtn){
    pager.classList.remove('active');
  }
  pagerBtn[currentIdx].classList.add('active');
}
updatePager();

//쿠키
let date = new Date();
date.setDate(date.getDate() + 7);

let myCookie = 'ABC=재방문;expires='+date.toUTCString();
document.cookie = myCookie;

console.log(document.cookie);
console.log(document.cookie.search('ABC=재방문'));
let cookie = document.cookie.replace(' ','');
let cookies = document.cookie.split(';');

console.log(cookies);
let result = cookies.find(item=>item ==='ABC=재방문');
console.log(result);

const popup = document.querySelector('.popup');
const check = document.querySelector('#check');
const button = document.querySelector('button');

button.addEventListener('click',()=>{ 
  if(check.checked){
    setCookie('Company','ABC',1);
  }else{
    delCookie('Company','ABC');
  }
  popup.classList.remove('show');
});

function setCookie(name,val,due){
  let date = new Date();
date.setDate(date.getDate() + due);

let myCookie = `${name}=${val};expires=`+date.toUTCString();
document.cookie = myCookie;
}
function delCookie(name){
  let date = new Date();
date.setDate(date.getDate() - 1);

let myCookie = `${name}=${val};expires=`+date.toUTCString();
document.cookie = myCookie;
}

function checkCookie(name,){
  if(document.cookie.search(`${name}=`) === -1){
    popup.classList.add('show');
  }
}
checkCookie('Company','ABC');



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

 //pager



