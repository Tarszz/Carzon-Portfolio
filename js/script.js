const trailContainer = document.getElementById("cursor-trail-container");
const trailLength = 12; // Number of trail dots
const dots = [];

// Create trail dots
for (let i = 0; i < trailLength; i++) {
  const dot = document.createElement("div");
  dot.classList.add("cursor-trail-dot");
  trailContainer.appendChild(dot);
  dots.push(dot);
}

let mouseX = 0;
let mouseY = 0;

// Listen to mouse movement
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate dots
let positions = Array(trailLength).fill({ x: 0, y: 0 });

function animateTrail() {
  let x = mouseX;
  let y = mouseY;

  dots.forEach((dot, i) => {
    const nextX = x + (positions[i]?.x || 0) * 0.1;
    const nextY = y + (positions[i]?.y || 0) * 0.1;

    positions[i] = { x: x, y: y };

    dot.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`; // Offset for center
    dot.style.opacity = `${(trailLength - i) / trailLength * 0.7}`; // Fade effect

    x += (positions[i].x - x) * 0.35; // Smooth follow
    y += (positions[i].y - y) * 0.35;
  });

  requestAnimationFrame(animateTrail);
}

animateTrail();
