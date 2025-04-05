let darkmode = localStorage.getItem("darkmode");
const themeToggle = document.getElementById("theme-toggle");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") {
  enableDarkMode();
} else {
  disableDarkMode();
}
themeToggle.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});
