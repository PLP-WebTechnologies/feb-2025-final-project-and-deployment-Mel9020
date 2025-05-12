// Image Slider
const images = ["images/chillie.jpg", "images/tea.jpg", "images/soap.jpg"];
let current = 0;

function slideShow() {
  const slider = document.getElementById("slider-img");
  if (slider) {
    current = (current + 1) % images.length;
    slider.src = images[current];
  }
}

setInterval(slideShow, 3000);

// Contact Form Validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("form-status");

    if (!name || !email || !message) {
      status.textContent = "Please fill out all fields.";
      status.style.color = "red";
    } else {
      status.textContent = "Message sent successfully!";
      status.style.color = "green";
      form.reset();
    }
  });
}
