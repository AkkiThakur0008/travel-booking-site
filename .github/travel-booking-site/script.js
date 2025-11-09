// Parallax Effect
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  document.getElementById('mountain1').style.transform = `translateY(${scrolled * 0.2}px)`;
  document.getElementById('mountain2').style.transform = `translateY(${scrolled * 0.4}px)`;
  document.getElementById('mountain3').style.transform = `translateY(${scrolled * 0.6}px)`;
});

// Cursor Glow
const cursor = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
// Explore Now Button Scroll
document.getElementById('exploreBtn').addEventListener('click', () => {
  const bookingSection = document.getElementById('booking');
  bookingSection.scrollIntoView({ behavior: 'smooth' });
});


// Initialize EmailJS (replace YOUR_USER_ID with your EmailJS user ID)
emailjs.init("YOUR_USER_ID");

// Booking Form Submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const destination = document.getElementById('destination').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const guests = document.getElementById('guests').value;

  const results = document.getElementById('bookingResults');
  results.textContent = "Sending your booking request…";

  // EmailJS Send
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    destination: destination,
    checkin: checkin,
    checkout: checkout,
    guests: guests
  })
  .then((response) => {
    results.textContent = "Booking sent successfully! Check your email.";
    console.log('SUCCESS!', response.status, response.text);
  }, (error) => {
    results.textContent = "Failed to send booking. Please try again.";
    console.log('FAILED...', error);
  });

  // Optional: Clear the form
  this.reset();
});
