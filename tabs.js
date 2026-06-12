export function setupTabs() {
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');
  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");
  const flashcardsTab = document.querySelector('[data-tab="flashcards"]');
  const flashcardsSection = document.getElementById("flashcards");

  homeLink.addEventListener("click", () => {
    converterSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
    flashcardsSection.classList.add("hidden");
  });

  converterTab.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    converterSection.classList.remove("hidden");
    flashcardsSection.classList.add("hidden");
  });

  flashcardsTab.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    converterSection.classList.add("hidden");
    flashcardsSection.classList.remove("hidden");
  });
}
