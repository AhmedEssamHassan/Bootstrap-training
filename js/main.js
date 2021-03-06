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

/* start navbar animation */

const header = document.querySelector(".header");
const mainLogo = document.querySelector(".main-logo");

const offsetTop = mainLogo.offsetTop;

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > header.style.height) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* navbar borders while scrolling */
console.log(window.scrollY);
const links = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 0 && window.scrollY < 862) {
    links[0].classList.add("active");
  } else {
    links[0].classList.remove("active");
  }
  if (window.scrollY >= 863 && window.scrollY < 1855) {
    links[1].classList.add("active");
  } else {
    links[1].classList.remove("active");
  }
  if (window.scrollY >= 1855 && window.scrollY < 3237) {
    links[2].classList.add("active");
  } else {
    links[2].classList.remove("active");
  }
  if (window.scrollY >= 3237 && window.scrollY < 4125) {
    links[3].classList.add("active");
  } else {
    links[3].classList.remove("active");
  }
  if (window.scrollY >= 4125 && window.scrollY < 4447) {
    links[4].classList.add("active");
  } else {
    links[4].classList.remove("active");
  }
});

/* navbar borders while scrolling */

/* end navbar animation */

/* start logo animation */

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml5 .line",
    opacity: [0.5, 1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700,
  })
  .add({
    targets: ".ml5 .line",
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => -0.625 + 0.625 * 2 * i + "em",
  })
  .add({
    targets: ".ml5 .ampersand",
    opacity: [0, 1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=600",
  })
  .add({
    targets: ".ml5 .letters-left",
    opacity: [0, 1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=300",
  })
  .add({
    targets: ".ml5 .letters-right",
    opacity: [0, 1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=600",
  })
  .add({
    targets: ".ml5",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml11 .line",
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
  })
  .add({
    targets: ".ml11 .line",
    translateX: [
      0,
      document.querySelector(".ml11 .letters").getBoundingClientRect().width +
        10,
    ],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100,
  })
  .add({
    targets: ".ml11 .letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i + 1),
  })
  .add({
    targets: ".ml11",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

/* end logo animation */

/* start loading overlay */

setTimeout(function(){
  $('.loading').remove();
}, 6000);


/* end loading overlay */

/* events animation */

const eventHolders = document.querySelectorAll(".event-holder");
const events = document.querySelectorAll(".event");

const dates = document.querySelectorAll(".date-and-time");
const times = document.querySelectorAll(".time");
const l1 = document.querySelectorAll(".l1");
const l2 = document.querySelectorAll(".l2");

const tickets = document.querySelectorAll(".tickets");

for (let x = 0; x <= eventHolders.length; x++) {
  eventHolders[x].addEventListener("mouseenter", () => {
    times[x].style.animation = "small-colors .3s";
    l1[x].style.animation = "small-colors .3s";
    l2[x].style.animation = "small-colors .3s";
    dates[x].style.animation = "date-colors .3s";
    tickets[x].style.animation = "date-colors .3s";
    tickets[x].style.animation = "t-border .3s";

    events[x].style.animation = "translate .3s ease-in-out none 1";
    events[x].style.backgroundColor = "white";

    dates[x].style.color = "#212529";
    times[x].style.color = "#212529";
    l1[x].style.color = "#212529";
    l2[x].style.color = "#212529";
    tickets[x].style.color = "#212529";
    tickets[x].style.border = "2px #212529 solid";
    tickets[x].style.borderRadius = "35px";
  });

  eventHolders[x].addEventListener("mouseleave", () => {
    times[x].style.animation = "leave-small-colors .3s";
    l1[x].style.animation = "leave-small-colors .3s";
    l2[x].style.animation = "leave-small-colors .3s";

    dates[x].style.animation = "leave-date-colors .3s";

    tickets[x].style.animation = "leave-date-colors .3s";
    tickets[x].style.animation = "leave-t-border .3s";

    events[x].style.animation = "leave-translate .3s ease-in-out none 1";
    events[x].style.backgroundColor = "#212529";
    dates[x].style.color = "white";
    times[x].style.color = "white";
    l1[x].style.color = "white";
    l2[x].style.color = "white";
    tickets[x].style.color = "white";
    tickets[x].style.border = "2px white solid";
    tickets[x].style.borderRadius = "35px";
  });
}

/* events animation */
