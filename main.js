// functions
var user = "elytra789";
var pass = "987el";
var attemptsLeft = 3;

function updateAttemptsText() {
   document.getElementById("attempts").textContent = attemptsLeft + " attempt" + (attemptsLeft === 1 ? "" : "s") + " remaining";
}

function login() {
   let usernameInput = document.getElementById("username").value;
   let passwordInput = document.getElementById("password").value;
   let feedback = document.getElementById("feedback");

   if (attemptsLeft <= 0) {
       feedback.textContent = "No more attempts left. Login is disabled.";
       document.getElementById("loginButton").disabled = true;
       return;
   }

   if (usernameInput === "" || passwordInput === "") {
       feedback.textContent = "Please enter all your details.";
       return;
   }

   if (usernameInput === user && passwordInput === pass) {
       feedback.textContent = "Hello " + usernameInput + "!!!";
       window.location.href = "notebooks.html";
       return;
   }

   attemptsLeft -= 1;

   if (attemptsLeft > 0) {
       feedback.textContent = "Incorrect details. Please try again.";
       updateAttemptsText();
   } else {
       feedback.textContent = "Incorrect details. No more attempts left.";
       updateAttemptsText();
       document.getElementById("loginButton").disabled = true;
   }
}

updateAttemptsText();
