"use strict";

// ========================================
// JR_DEV_001 — PORTFOLIO JAVASCRIPT
// ========================================

// 1. SELECT THEME ELEMENTS

const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-toggle .icon");
const themeText = document.querySelector("#theme-toggle .toggle-text");

// 2. UPDATE THE THEME BUTTON

function updateThemeButton(isGolden) {
  if (!themeIcon || !themeText || !themeToggle) return;

  if (isGolden) {
    themeIcon.textContent = "☀️";
    themeText.textContent = "Black Mode";
    themeToggle.setAttribute("aria-label", "Switch to black theme");
    themeToggle.setAttribute("aria-pressed", "true");
  } else {
    themeIcon.textContent = "🌙";
    themeText.textContent = "Golden Mode";
    themeToggle.setAttribute("aria-label", "Switch to golden theme");
    themeToggle.setAttribute("aria-pressed", "false");
  }
}

// 3. APPLY A THEME

function applyTheme(isGolden) {
  document.body.classList.toggle("golden-mode", isGolden);

  updateThemeButton(isGolden);
}

// 4. LOAD THE SAVED THEME

let savedTheme = null;

try {
  savedTheme = localStorage.getItem("jr-dev-theme");
} catch (error) {
  console.warn("Theme storage is unavailable.");
}

applyTheme(savedTheme === "golden");

// 5. TOGGLE BETWEEN BLACK AND GOLDEN

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const isGolden = document.body.classList.contains("golden-mode");
    const nextThemeIsGolden = !isGolden;

    applyTheme(nextThemeIsGolden);

    try {
      localStorage.setItem(
        "jr-dev-theme",
        nextThemeIsGolden ? "golden" : "black",
      );
    } catch (error) {
      console.warn("Could not save the selected theme.");
    }
  });
}
