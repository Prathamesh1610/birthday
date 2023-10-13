function showPasswordPrompt() {
  document.getElementById("passwordPrompt").style.display = "block";
}

function checkPassword() {
  var password = document.getElementById("password").value;
  // Replace "your_password" with the actual password you want to check.
  if (password === "vedya") {
      // Redirect to the next page
      window.location.href = "inner.html";
  } else {
      // Display an error dialog
      document.getElementById("errorDialog").style.display = "block";
      document.getElementById("passwordPrompt").style.display = "none";

  }
}


