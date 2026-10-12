// Portfolio interactions: mobile menu, typing line, and back-to-top button.
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.innerHTML = isOpen ? "&times;" : "&#9776;";
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.innerHTML = "&#9776;";
    });
  });
}

const typing = document.getElementById("typing");
const phrases = [
  "Aspiring Software Developer",
  "Building Web Applications",
  "Learning React & Python",
  "Growing Through Projects"
];

if (typing && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const phrase = phrases[phraseIndex];
    typing.textContent = phrase.slice(0, charIndex);
    if (!deleting && charIndex < phrase.length) {
      charIndex++;
      setTimeout(typeEffect, 75);
    } else if (!deleting) {
      deleting = true;
      setTimeout(typeEffect, 1450);
    } else if (charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 35);
    } else {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 300);
    }
  }
  typeEffect();
}

const topBtn = document.getElementById("topBtn");
if (topBtn) {
  const updateTopButton = () => {
    topBtn.style.display = window.scrollY > 350 ? "grid" : "none";
  };
  window.addEventListener("scroll", updateTopButton, { passive: true });
  updateTopButton();
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
