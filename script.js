// Footer year update
document.getElementById("year").textContent = new Date().getFullYear();

// Time-of-day greeting
const hour = new Date().getHours();
let message = "Welcome!";
if (hour < 12) message = "Good morning!";
else if (hour < 18) message = "Good afternoon!";
else message = "Good evening!";
document.getElementById("greeting").textContent = message + " Thank you for visiting my page.";
