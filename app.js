const innerCursor = document.querySelector('.inner-cursor');
const outerCursor = document.querySelector('.outer-cursor');

document.addEventListener('mousemove',moveCursor);

let normCursorDiff = 0;
let growCursorDiff =0;

let normCursor = 1;
let growCursor = 1;

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
        outerCursor.classList.add("grow");
        normCursor= growCursor
    });
    headings.addEventListener("mouseleave",()=>{
        innerCursor.classList.remove("grow");
        outerCursor.classList.remove("grow");
        // innerCursor.style.transform = "scale(2)";
        normCursor=1;
      
    });
});

let lastScrollTop = 0;
const navRight = document.querySelector('.nav-right')
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//    console.log('scrolling')
   if (st > lastScrollTop) {
    if (!navRight.classList.contains('hidden')){
        navRight.classList.add('hidden');
        console.log('scrolling up')
    }
      // downscroll code
   } else if (st < lastScrollTop) {
    if (navRight.classList.contains('hidden')){
        navRight.classList.remove('hidden');
        console.log('scrolling down')
    }
      // upscroll code
   } // else was horizontal scroll
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);