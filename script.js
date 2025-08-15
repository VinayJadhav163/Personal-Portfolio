// ===============================
// Navbar Toggle for Mobile View
// ===============================

// Select menu icon & navbar elements from DOM
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle navbar visibility when the menu icon is clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Change icon style between hamburger & X
    navbar.classList.toggle('active'); // Show or hide the navbar
};

// ===============================
// Auto-close Navbar on Link Click
// ===============================

// Select all navbar links and add click event
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class to hide navbar
        navbar.classList.remove('active');
        // Remove 'bx-x' class to revert menu icon back to hamburger
        menuIcon.classList.remove('bx-x');
    });
});

// ===============================
// Contact Form Validation
// ===============================

// Add event listener to contact form submit event
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission (page reload)

    // Get input values and trim whitespace
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.querySelector("input[name='subject']").value.trim();
    const message = document.getElementById("message").value.trim();

    // Define regex patterns for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email pattern
    const phoneRegex = /^[0-9]{10}$/; // Exactly 10 numeric digits

    // Check if all fields are filled
    if (!name || !email || !phone || !subject || !message) {
        alert("Please fill out all fields.");
        return; // Stop form submission
    }

    // Validate email format
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate phone number length & format
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    // If all checks pass
    alert("Thank you for contacting me!"); // Success message
    document.getElementById("contact-form").reset(); // Reset form fields
});
