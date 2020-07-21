const navbar = document.querySelector(".our-bar");

/* for hover over nav links */
const active = document.querySelector(".active");
const linksSection = document.querySelector(".links");
const allLinks = linksSection.querySelectorAll(".nav-item");
const otherLinks = [];
for (let x = 0; x < allLinks.length; x++) {
  if (x !== 0) {
    otherLinks.push(allLinks[x]);
  }
}

for(let e of otherLinks) {
  e.addEventListener("mouseenter", ()=> {
    active.style.border = "none"
  })
}
for(let e of otherLinks) {
  e.addEventListener("mouseleave", ()=> {
    active.style.borderBottom = "7px solid #5c2523"
  })
}

/* start logo animation */

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 0
  });

/* end logo animation */