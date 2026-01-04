// Booking Form
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Your booking has been confirmed! We will contact you shortly.");
  this.reset();
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("📩 Thank you! Your message has been sent.");
  this.reset();
});
