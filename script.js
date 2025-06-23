
const typingText = document.getElementById("typing-text");
const phrases = ["Electrical Engineer", "Project Builder", "Tech Enthusiast"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function loop() {
  typingText.innerHTML = currentPhrase.join("");
  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      setTimeout(loop, 100);
    } else if (isDeleting && j > 0) {
      currentPhrase.pop();
      j--;
      setTimeout(loop, 50);
    } else if (j === phrases[i].length) {
      isDeleting = true;
      setTimeout(loop, 1000);
    } else if (j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
      setTimeout(loop, 200);
    }
  }
}
loop();

document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});
