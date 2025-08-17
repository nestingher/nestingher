 document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Scroll animation
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // If there are no elements to animate, do nothing.
    if (animatedElements.length === 0) return;

    // Prepare elements for animation by hiding them.
    animatedElements.forEach(el => el.classList.add('js-anim-ready'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Countdown Timer
    const countdown = () => {
        // Set the date we're counting down to.
        // For demonstration, this is set 30 days from now.
        // To set a specific date, use: new Date('Month Day, Year HH:MM:SS').getTime();
        // e.g., new Date('Dec 5, 2024 15:37:25').getTime();
        const launchDate = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the elements
            document.getElementById('days').innerText = String(days).padStart(2, '0');
            document.getElementById('hours').innerText = String(hours).padStart(2, '0');
            document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
            document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

            // If the countdown is finished, write some text
            if (distance < 0) {
                clearInterval(interval);
                document.getElementById('countdown').innerHTML = '<h2>We Have Launched!</h2>';
            }
        }, 1000);
    };

    countdown();
})