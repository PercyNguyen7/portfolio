const innerCursor = document.querySelector('.inner-cursor');
const outerCursor = document.querySelector('.outer-cursor');

let normCursorDiff = 0;
let growCursorDiff =0;

let normCursor = 1;
let growCursor = 1;

document.addEventListener('mousemove',moveCursor);
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
