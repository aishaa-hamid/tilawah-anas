export function initLanguage() {
  const langToggleBtn = document.getElementById("lang-toggle");
  if (!langToggleBtn) return;

  // Check if a language was saved previously
  const savedLang = localStorage.getItem("site-lang") || "en";
  applyLanguage(savedLang);

  // Listen for clicks on the toggle button
  langToggleBtn.addEventListener("click", () => {
    const currentLang =
      document.documentElement.getAttribute("dir") === "rtl" ? "ar" : "en";
    const newLang = currentLang === "en" ? "ar" : "en";

    applyLanguage(newLang);
    localStorage.setItem("site-lang", newLang);
  });
}

function applyLanguage(lang) {
  const langSpan = document.querySelector("#lang-toggle span");

  // Change the direction (RTL for Arabic, LTR for English)
  if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
    if (langSpan) langSpan.innerText = "ع"; // Change text to Arabic
  } else {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", "en");
    if (langSpan) langSpan.innerText = "EN"; // Change text to English
  }

  // Loop through every element with a data-en attribute and swap the text
  const elements = document.querySelectorAll("[data-en]");
  elements.forEach((el) => {
    if (lang === "ar") {
      el.innerText = el.getAttribute("data-ar");
    } else {
      el.innerText = el.getAttribute("data-en");
    }
  });
}
