const lines = [
  "tahiel_cressa — full_stack & qa developer",
  "spring_boot | react | node.js | python",
  "construyendo productos confiables",
];

let lineIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const el = document.getElementById("typed");
  const current = lines[lineIndex];

  if (!deleting) {
    el.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
    setTimeout(type, 45 + Math.random() * 50);
  } else {
    el.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
      setTimeout(type, 400);
      return;
    }
    setTimeout(type, 25);
  }
}

type();