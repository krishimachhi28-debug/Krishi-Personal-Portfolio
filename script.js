
// =============================
// TYPING ANIMATION
// =============================

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Computer Science Student",
    "Creative Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1500;
    }

    else if (deleting && charIndex === 0) {
        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// =============================
// MOBILE NAVIGATION
// =============================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("show")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }

});


// Close mobile menu after clicking a link

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.replace("fa-xmark", "fa-bars");

    });

});


// =============================
// ACTIVE NAVIGATION
// =============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =============================
// AUTOMATIC COPYRIGHT YEAR
// =============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =============================
// PROFILE PHOTO FALLBACK
// =============================

const profilePhoto = document.getElementById("profilePhoto");

profilePhoto.addEventListener("error", () => {

    profilePhoto.style.display = "none";

    const frame = profilePhoto.parentElement;

    frame.style.background =
        "linear-gradient(135deg, #211747, #34246b)";

    frame.style.display = "grid";
    frame.style.placeItems = "center";

    const initials = document.createElement("span");

    initials.textContent = "KM";

    initials.style.fontSize = "65px";
    initials.style.fontWeight = "800";
    initials.style.color = "#c4a0ff";

    frame.appendChild(initials);

});
