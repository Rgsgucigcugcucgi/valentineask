// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");   // FIXED
const letterWindow = document.querySelector(".letter-window");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Safety check (so GitHub Pages never crashes)
if (envelope && letter && noBtn && yesBtn) {

  // Click Envelope
  envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
      letterWindow.classList.add("open");
    }, 50);
  });

  // NO button run away
  noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  // YES clicked
  yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    // Safe cat change (no crash)
    catImg.src = "cat_heart.gif";

    letterWindow.classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
  });

}
