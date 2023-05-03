const innerCursor = document.querySelector('.inner-cursor');
const outerCursor = document.querySelector('.outer-cursor');

const designToggle = document.querySelector('.design-toggle');
const threeDToggle = document.querySelector('.threeD-toggle');
const illustrationToggle = document.querySelector('.illustration-toggle');

const illustrationWorks = document.querySelectorAll(".illustration-works");
const threeDWorks = document.querySelectorAll(".threeD-works");
const designWorks = document.querySelectorAll(".design-works");



designToggle.addEventListener('click',()=>{
  threeDToggle.classList.remove('active');
  illustrationToggle.classList.remove('active');
  designToggle.classList.toggle('active');
  for (let i = 0; i < threeDWorks.length; i++ ){
    threeDWorks[i].classList.add('hidden');
}
for (let i = 0; i < illustrationWorks.length; i++ ){
  illustrationWorks[i].classList.add('hidden');
}
for (let i = 0; i  < designWorks.length; i++ ){
    designWorks[i].classList.toggle('hidden');
}

});

threeDToggle.addEventListener('click',()=>{
  illustrationToggle.classList.remove('active');
  designToggle.classList.remove('active');
  threeDToggle.classList.toggle('active');
  for (let i = 0; i < illustrationWorks.length; i++ ){
    illustrationWorks[i].classList.add('hidden');
  }
  for (let i = 0; i  < designWorks.length; i++ ){
      designWorks[i].classList.add('hidden');
  }
for (let i = 0; i < threeDWorks.length; i++ ){
    threeDWorks[i].classList.toggle('hidden');
}
});

illustrationToggle.addEventListener('click',()=>{
  designToggle.classList.remove('active');
  threeDToggle.classList.remove('active');
  illustrationToggle.classList.toggle('active');
  
  for (let i = 0; i < illustrationWorks.length; i++ ){
    illustrationWorks[i].classList.toggle('hidden');
  }
  for (let i = 0; i  < designWorks.length; i++ ){
      designWorks[i].classList.add('hidden');
  }
  for (let i = 0; i < threeDWorks.length; i++ ){
    threeDWorks[i].classList.add('hidden');
}
});


document.addEventListener('mousemove',moveCursor);

let normCursorDiff = 0;
let growCursorDiff =0;

let normCursor = 1.5;
let growCursor = 1.5;

const slider = document.querySelector('.works-slide');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);



function moveCursor(e){
    // let x = e.clientX;
    // let y = e.clientY;

    // innerCursor.style.left =e.pageX + "px";
    // innerCursor.style.top =e.pageY + "px";
    // outerCursor.style.left =e.pageX + "px";
    // outerCursor.style.top =e.pageY + "px";
    let pageX = e.pageX - normCursorDiff;
    let pageY = e.pageY - normCursorDiff;
    innerCursor.style.transform = "translate("+pageX+"px,"+pageY+"px)";
    innerCursor.style.transform += 'scale('+normCursor+')';
    // outerCursor.style.transform = "translate("+e.pageX+"px,"+e.pageY +"px)";

    // console.log(x,y);
}




const headings = Array.from(document.querySelectorAll(".clickable"));
headings.forEach((headings) => {
    headings.addEventListener("mouseover",()=>{
        normCursorDiff = growCursorDiff;
        innerCursor.classList.add("grow");
        // innerCursor.innerHTML='click';
        outerCursor.classList.add("grow");
        normCursor= growCursor
    });
    headings.addEventListener("mouseleave",()=>{
        innerCursor.classList.remove("grow");
        outerCursor.classList.remove("grow");
        innerCursor.innerHTML='';
        // innerCursor.style.transform = "scale(2)";
        normCursor=1;
    });
});
let workHovered = false;
let mouseDrag = false;
slider.addEventListener("mouseover",()=>{
  if (!workHovered){
    innerCursor.innerHTML='DRAG';
    innerCursor.classList.add("no-bg");
  } 
  else {
    innerCursor.innerHTML = 'Click';
    innerCursor.classList.remove("no-bg");
  }
//   normCursorDiff = growCursorDiff;
//         innerCursor.classList.add("grow");
//  outerCursor.classList.add("grow");
//         normCursor= growCursor
})
slider.addEventListener("mouseleave",()=>{
  innerCursor.classList.remove("no-bg");
  
  // innerCursor.classList.remove("grow");
  // outerCursor.classList.remove("grow");
  // normCursor=1;
  innerCursor.innerHTML='';
});




const boxWrappers = document.querySelectorAll('.box-wrapper');
for (let i = 0; i < boxWrappers.length; i++){
  boxWrappers[i].addEventListener('mouseover', ()=>{
    mouseOnProject = true;

  })
  boxWrappers[i].addEventListener('mouseleave', ()=>{
    mouseOnProject = false;
  })

}
slider.addEventListener('mousedown', () => mouseDrag = false);
slider.addEventListener('mousemove', () => mouseDrag = true);
// slider.addEventListener('mouseup', (e) => {
//   if (mouseDrag){
//     e.preventDefault();
//     alert('sad')
//   }
// });

for (let i = 0; i  < boxWrappers.length; i++ ){
boxWrappers[i].addEventListener('click',(e)=>{
  if (mouseDrag){
    e.preventDefault();
  }
  });
  boxWrappers[i].addEventListener('mouseover',(e)=>{
    workHovered = true;
    // innerCursor.innerHTML='Click';
  }); 
  boxWrappers[i].addEventListener('mouseleave',(e)=>{
    workHovered = false;
    // innerCursor.innerHTML='';
    }); 
}


// let lastScrollTop = 0;
// const navRight = document.querySelector('.nav-right')
// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
//    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
// //    console.log('scrolling')
//    if (st > lastScrollTop) {
//     if (!navRight.classList.contains('hidden')){
//         navRight.classList.add('hidden');
//         console.log('scrolling up')
//     }
//       // downscroll code
//    } else if (st < lastScrollTop) {
//     if (navRight.classList.contains('hidden')){
//         navRight.classList.remove('hidden');
//         console.log('scrolling down')
//     }
//       // upscroll code
//    } // else was horizontal scroll
//    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, false);