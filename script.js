// Selects the HTML element with the ID 'menu-icon'
let menuIcon = document.querySelector('#menu-icon');
// Selects the HTML element with the class 'navbar'
let navbar = document.querySelector('.navbar');

// Adds an event listener to the menu icon that triggers a function when clicked
menuIcon.onclick = () => {
    // Toggles the 'bx-menu' class on the menu icon. If present, it's removed; if absent, it's added.
    // This is likely used to switch between a hamburger icon and an 'X' icon.
    menuIcon.classList.toggle('bx-menu');
    // Toggles the 'bx-x' class on the menu icon, complementing the 'bx-menu' toggle.
    menuIcon.classList.toggle('bx-x');
    // Toggles the 'active' class on the navbar. This typically shows or hides the navigation menu.
    navbar.classList.toggle('active');
}


// Adds an event listener to the contact form that triggers a function when submitted
document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Prevents the default form submission behavior, which would cause a page reload
    event.preventDefault();

    // Gets the value of the 'name' input field and removes leading/trailing whitespace
    const name = document.getElementById("name").value.trim();
    // Gets the value of the 'email' input field and removes leading/trailing whitespace
    const email = document.getElementById("email").value.trim();
    // Gets the value of the 'phone' input field and removes leading/trailing whitespace
    const phone = document.getElementById("phone").value.trim();
    // Gets the value of the 'subject' input field (assuming it's an input with name='subject') and removes whitespace
    const subject = document.querySelector("input[name='subject']").value.trim();
    // Gets the value of the 'message' textarea and removes leading/trailing whitespace
    const message = document.getElementById("message").value.trim();

    // Defines a regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Defines a regular expression for a 10-digit phone number validation
    const phoneRegex = /^[0-9]{10}$/;

    // Checks if any of the required fields are empty
    if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
        // Displays an alert if any field is empty
        alert("Please fill out all fields.");
        return; // Stops the function execution
    }

    // Validates the email format using the defined regex
    if (!emailRegex.test(email)) {
        // Displays an alert if the email format is invalid
        alert("Please enter a valid email address.");
        return; // Stops the function execution
    }

    // Validates the phone number format using the defined regex (must be exactly 10 digits)
    if (!phoneRegex.test(phone)) {
        // Displays an alert if the phone number is not 10 digits
        alert("Phone number must be exactly 10 digits.");
        return; // Stops the function execution
    }

    // If all validations pass, displays a success message
    alert("Thank you for contacting me!");

    // Resets all fields in the contact form to their initial (empty) state
    document.getElementById("contact-form").reset();
});