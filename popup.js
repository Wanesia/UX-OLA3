// Show popup after 1 second
setTimeout(() => {
  document.getElementById("popup").classList.add("active");
  startClimateClock();
}, 1000);

// Close button
document.querySelector(".close-popup").addEventListener("click", () => {
  document.getElementById("popup").classList.remove("active");
});

// Climate "SAVE THE WORLD" button - navigate to newsletter and close popup
document.querySelector(".climate-btn").addEventListener("click", () => {
  // Close the popup
  document.getElementById("popup").classList.remove("active");

  // Navigate to newsletter section
  const newsletterElement = document.getElementById("newsletter-heading");
  if (newsletterElement) {
    newsletterElement.scrollIntoView({ behavior: "smooth" });
  }
});