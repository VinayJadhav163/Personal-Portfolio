// Select menu icon & navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle navbar on menu icon click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Switch icon between hamburger & X
    navbar.classList.toggle('active'); // Show/hide navbar
};

// Auto-close navbar after clicking a nav link (mobile only)
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.querySelector("input[name='subject']").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!name || !email || !phone || !subject || !message) {
        alert("Please fill out all fields.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    alert("Thank you for contacting me!");
    document.getElementById("contact-form").reset();
});
