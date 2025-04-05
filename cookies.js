document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookieBanner");
  const acceptCookies = document.getElementById("acceptCookies");
  const rejectCookies = document.getElementById("rejectCookies");

  // Check if user has already made a choice
  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "block";
  }

  // Accept cookies
  acceptCookies.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });

  // Reject cookies
  rejectCookies.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "false");
    cookieBanner.style.display = "none";
  });
});
