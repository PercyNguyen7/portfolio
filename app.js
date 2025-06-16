const innerCursor = document.querySelector(".inner-cursor");
const outerCursor = document.querySelector(".outer-cursor");

const designToggle = document.querySelector(".design-toggle");
const threeDToggle = document.querySelector(".threeD-toggle");
const illustrationToggle = document.querySelector(".illustration-toggle");

const illustrationWorks = document.querySelectorAll(".illustration-works");
const threeDWorks = document.querySelectorAll(".threeD-works");
const designWorks = document.querySelectorAll(".design-works");

const playgroundWrapper = document.querySelector(`.playground-wrapper`);
const works = {
  threeDSources: [
    `assets/images/playground/3d/diorama.webp`,
    `assets/images/playground/3d/facial-expressions.webp`,
    `assets/images/playground/3d/godric-walk-cycle.webp`,
    `assets/images/playground/3d/PercyInes_Environment_Render.webp`,
    `assets/images/playground/3d/robot.webp`,
  ],
  designSources: [
    `assets/images/playground/design/godric_poster.webp`,
    `assets/images/playground/design/moonlit-masquerade.webp`,
    `assets/images/playground/design/war.webp`,
    `assets/images/playground/design/ccas_halloween.webp`,
    `assets/images/playground/design/biodiversity-diagonal.webp`,
    `assets/images/playground/design/biodiversity-orthogonal.webp`,
  ],
  illustrationSources: [
    `assets/images/playground/illustrations/awaken.webp`,
    `assets/images/playground/illustrations/walk-the-talk.webp`,
    `assets/images/playground/illustrations/out-of-reach.webp`,
    `assets/images/playground/illustrations/fasa-2.webp`,
  ],
};

window.addEventListener("load", () => {
  // playgroundWrapper.innerHTML = ``;
  // for (let i = 0; i < works.designSources.length; i++) {
  //   playgroundWrapper.innerHTML += `<div class="playground-works ">
  //     <img loading="lazy" src="${works.designSources[i]}"></div>`;
  // }
});

// const designSources = designToggle.addEventListener("click", () => {
//   playgroundWrapper.innerHTML = ``;
//   for (let i = 0; i < works.designSources.length; i++) {
//     playgroundWrapper.innerHTML += `<div class="playground-works ">
//         <img loading="lazy" src="${works.designSources[i]}"></div>`;
//   }
//   threeDToggle.classList.remove("active");
//   illustrationToggle.classList.remove("active");
//   designToggle.classList.toggle("active");
// });

// threeDToggle.addEventListener("click", () => {
//   playgroundWrapper.innerHTML = ``;
//   for (let i = 0; i < works.threeDSources.length; i++) {
//     playgroundWrapper.innerHTML += `<div class="playground-works">
//       <img loading="lazy" src="${works.threeDSources[i]}"></div>`;
//   }

//   illustrationToggle.classList.remove("active");
//   designToggle.classList.remove("active");
//   threeDToggle.classList.toggle("active");

// });

// illustrationToggle.addEventListener("click", () => {
//   playgroundWrapper.innerHTML = ``;
//   playgroundWrapper.innerHTML = ``;
//   for (let i = 0; i < works.illustrationSources.length; i++) {
//     playgroundWrapper.innerHTML += `<div class="playground-works">
//         <img loading="lazy" src="${works.illustrationSources[i]}"></div>`;
//   }
//   designToggle.classList.remove("active");
//   threeDToggle.classList.remove("active");
//   illustrationToggle.classList.toggle("active");
// });

document.addEventListener("mousemove", moveCursor);

let normCursorDiff = 0;
let growCursorDiff = 0;

let normCursor = 1.5;
let growCursor = 1.5;

const slider = document.querySelector(".works-slide");
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
// Dragging to left
//******************
// SLIDER DRAG
// slider.addEventListener("mousemove", (e) => {
//   e.preventDefault();
//   if (!mouseDown) {
//     return;
//   }
//   const x = e.pageX - slider.offsetLeft;
//   const scroll = x - startX;
//   slider.scrollLeft = scrollLeft - scroll;
// });

// Add the event listeners
// slider.addEventListener("mousedown", startDragging, false);
// slider.addEventListener("mouseup", stopDragging, false);
// slider.addEventListener("mouseleave", stopDragging, false);
//******************
function moveCursor(e) {
  // let x = e.clientX;
  // let y = e.clientY;

  // innerCursor.style.left =e.pageX + "px";
  // innerCursor.style.top =e.pageY + "px";
  // outerCursor.style.left =e.pageX + "px";
  // outerCursor.style.top =e.pageY + "px";
  let pageX = e.pageX - normCursorDiff;
  let pageY = e.pageY - normCursorDiff;
  innerCursor.style.transform = "translate(" + pageX + "px," + pageY + "px)";
  innerCursor.style.transform += "scale(" + normCursor + ")";
  // outerCursor.style.transform = "translate("+e.pageX+"px,"+e.pageY +"px)";

  // console.log(x,y);
}

const headings = Array.from(document.querySelectorAll(".clickable"));
headings.forEach((headings) => {
  headings.addEventListener("mouseover", () => {
    normCursorDiff = growCursorDiff;
    innerCursor.classList.add("grow");
    // innerCursor.innerHTML='click';
    outerCursor.classList.add("grow");
    normCursor = growCursor;
  });
  headings.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
    outerCursor.classList.remove("grow");
    innerCursor.innerHTML = "";
    // innerCursor.style.transform = "scale(2)";
    normCursor = 1;
  });
});
let workHovered = false;
let mouseDrag = false;
// slider.addEventListener("mouseover", () => {
//   if (!workHovered) {
//     innerCursor.innerHTML = "DRAG";
//     innerCursor.classList.add("no-bg");
//   } else {
//     innerCursor.innerHTML = "Click";
//     innerCursor.classList.remove("no-bg");
//   }
//   //   normCursorDiff = growCursorDiff;
//   //         innerCursor.classList.add("grow");
//   //  outerCursor.classList.add("grow");
//   //         normCursor= growCursor
// });
// slider.addEventListener("mouseleave", () => {
//   innerCursor.classList.remove("no-bg");

//   // innerCursor.classList.remove("grow");
//   // outerCursor.classList.remove("grow");
//   // normCursor=1;
//   innerCursor.innerHTML = "";
// });

// const boxWrappers = document.querySelectorAll(".box-wrapper");
// for (let i = 0; i < boxWrappers.length; i++) {
//   boxWrappers[i].addEventListener("mouseover", () => {
//     mouseOnProject = true;
//   });
//   boxWrappers[i].addEventListener("mouseleave", () => {
//     mouseOnProject = false;
//   });
// }
// slider.addEventListener("mousedown", () => (mouseDrag = false));
// slider.addEventListener("mousemove", () => (mouseDrag = true));
// slider.addEventListener('mouseup', (e) => {
//   if (mouseDrag){
//     e.preventDefault();
//     alert('sad')
//   }
// });

// for (let i = 0; i < boxWrappers.length; i++) {
//   boxWrappers[i].addEventListener("click", (e) => {
//     if (mouseDrag) {
//       e.preventDefault();
//     }
//   });
//   boxWrappers[i].addEventListener("mouseover", (e) => {
//     workHovered = true;
//     // innerCursor.innerHTML='Click';
//   });
//   boxWrappers[i].addEventListener("mouseleave", (e) => {
//     workHovered = false;
//     // innerCursor.innerHTML='';
//   });
// }

const horizontalContainer = document.getElementById("sect-2");
const horizontalSections = document.getElementById("horizontal-sections");
const scrollIndicator = document.getElementById("scroll-indicator");

let isInHorizontalSection = false;
let ticking = false;

// IntersectionObserver to detect when horizontal section is in view
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: [0, 0.1, 0.9, 1],
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.target === horizontalContainer) {
      // Update the flag based on intersection
      isInHorizontalSection =
        entry.isIntersecting && entry.intersectionRatio > 0.1;

      // Update scroll indicator based on intersection
      if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
        scrollIndicator.textContent = "Scroll to move horizontally →";
        scrollIndicator.classList.add("horizontal");
      } else if (entry.boundingClientRect.top > 0) {
        scrollIndicator.textContent = "Scroll down ↓";
        scrollIndicator.classList.remove("horizontal");
      } else {
        scrollIndicator.textContent = "Continue scrolling ↓";
        scrollIndicator.classList.remove("horizontal");
      }
    }
  });
}, observerOptions);

// Start observing the horizontal container
observer.observe(horizontalContainer);

function updateHorizontalScroll() {
  // Only update if we're in the horizontal section
  if (!isInHorizontalSection) {
    ticking = false;
    return;
  }

  const containerRect = horizontalContainer.getBoundingClientRect();
  const containerHeight = horizontalContainer.offsetHeight;

  // Calculate scroll progress within the horizontal section
  const scrollProgress =
    -containerRect.top / (containerHeight - window.innerHeight);

  // Clamp the progress between 0 and 1
  const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

  // Calculate the transform value
  const maxTransform = horizontalSections.scrollWidth - window.innerWidth;
  const transformValue = clampedProgress * maxTransform;

  // Apply the transform
  horizontalSections.style.transform = `translateX(-${transformValue}px)`;

  ticking = false;
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(updateHorizontalScroll);
    ticking = true;
  }
}

// Set up the scroll listener (still needed for smooth horizontal movement)
window.addEventListener("scroll", onScroll);

// Initial call
updateHorizontalScroll();

// Intersection Observer for individual horizontal sections (optional - for additional effects)
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add any effects for individual sections here
        entry.target.style.opacity = "1";
      } else {
        entry.target.style.opacity = "0.7";
      }
    });
  },
  {
    root: horizontalContainer,
    threshold: 0.5,
  }
);

// Observe each horizontal section
document.querySelectorAll(".horizontal-section").forEach((section) => {
  sectionObserver.observe(section);
});

// Add some smooth scrolling behavior
document.documentElement.style.scrollBehavior = "smooth";
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
