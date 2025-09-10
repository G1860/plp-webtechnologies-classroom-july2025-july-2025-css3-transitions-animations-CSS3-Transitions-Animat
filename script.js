// ================================
// Part 2: Functions - Parameters & Scope
// ================================

// Global variable
let multiplier = 10;

// Function with parameters and return value
function calculateSquare(number) {
  // Local variable
  let result = number * number * multiplier;
  return result;
}

// Function demonstrating reuse
function showCalculation() {
  const output = calculateSquare(3); // 3² * 10 = 90
  document.getElementById("calcResult").textContent =
    "The calculated result is: " + output;
}

// ================================
// Part 3: JS triggers CSS animations
// ================================
const animateBtn = document.getElementById("animateBtn");
const animBox = document.getElementById("animBox");

animateBtn.addEventListener("click", () => {
  animBox.classList.toggle("animate");
});
