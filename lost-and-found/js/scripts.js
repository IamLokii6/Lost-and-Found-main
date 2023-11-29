// js/scripts.js
document.addEventListener('DOMContentLoaded', function () {
    // Get the current hour
    var currentHour = new Date().getHours();

    // Define greeting messages based on the time of day
    var greeting = '';
    if (currentHour < 12) {
        greeting = 'Good morning';
    } else if (currentHour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    // Display the dynamic greeting on the page
    var greetingElement = document.getElementById('dynamicGreeting');
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
});

