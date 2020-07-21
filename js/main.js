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