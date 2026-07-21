document.getElementById("btn").addEventListener("click", function () {

    window.open("https://wa.me/918750476209","_blank");

});

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.innerHTML="☀️ Light Mode";
    }else{
        themeBtn.innerHTML="🌙 Dark Mode";
    }

});

window.addEventListener("load", function(){

    const excel = document.querySelector(".excel");
    const word = document.querySelector(".word");
    const sheet = document.querySelector(".sheet");

    console.log(excel, word, sheet);

    if(excel) excel.style.width = "95%";
    if(word) word.style.width = "90%";
    if(sheet) sheet.style.width = "85%";

});
const topBtn = document.getElementById("topBtn");

window.addEventListener("DOMContentLoaded", function () {

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
const text = [
    "Professional Data Entry Specialist",
    "Microsoft Excel Expert",
    "Freelancer",
    "Learning AI & Web Development"
];

let textIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    if (charIndex < text[textIndex].length) {

        typing.innerHTML += text[textIndex].charAt(charIndex);
        charIndex++;

        setTimeout(typeEffect, 70);

    } else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        typing.innerHTML = text[textIndex].substring(0, charIndex - 1);
        charIndex--;

        setTimeout(eraseEffect, 40);

    } else {

        textIndex++;

        if (textIndex >= text.length) {
            textIndex = 0;
        }

        setTimeout(typeEffect, 300);

    }

}

typeEffect();
// Mobile Menu

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}
// ===== EmailJS =====

emailjs.init({
    publicKey: "7jp2096y41e1HeRaJ",
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_8jj40zu",
            "template_x2zszte",
            this
        )
        .then(() => {
            alert("✅ Message Sent Successfully!");
            contactForm.reset();
        })
        .catch((error) => {
            console.error(error);
            alert("❌ " + (error.text || "Failed to send message."));
        });

    });
}