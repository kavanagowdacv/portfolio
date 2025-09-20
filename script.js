// Typing Effect
const typingText = document.querySelector(".typing-text");
const words = [" Information Science Engineer |  Full Stack Developer | Cloud Computing "];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let current = words[wordIndex];
  if (isDeleting) {
    typingText.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      //isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    typingText.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      //isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 60 : 120);
}
typeEffect();

// Scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};