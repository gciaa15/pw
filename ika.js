alert("皆さん、ようこそ。OKを押して私のウェブページを開きましょう\n\n\"Minasan, yōkoso. OK o oshite watashi no u~ebupēji o hirakimashou\"\n\n(Selamat datang semuanya. Tekan OK untuk membuka halaman web saya)");
// Carousel functionality
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

// Buttons for navigating
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Set initial index
let counter = 0;
const size = images[0].clientWidth; // Width of one image

// Move to the next slide
nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) {
        counter = 0; // Go back to the first slide
    } else {
        counter++;
    }
    carouselSlide.style.transform = `translateX(${-counter * size}px)`;
});

// Move to the previous slide
prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        counter = images.length - 1; // Go to the last slide
    } else {
        counter--;
    }
    carouselSlide.style.transform = `translateX(${-counter * size}px)`;
});

// Scroll effect: Show/hide elements based on scroll direction
const fadeElements = document.querySelectorAll('.fade-in-out');

// Variable to track last scroll position
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    // Current scroll position
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Loop through all elements to check if they should fade in or out
    fadeElements.forEach(element => {
        if (currentScroll > lastScrollTop) {
            // Scroll down, hide element
            element.classList.add('visible');
            element.classList.remove('hidden');
        } else {
            // Scroll up, show element
            element.classList.add('hidden');
            element.classList.remove('visible');
        }
    });

    // Update last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Intersection Observer for visibility
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // If element enters viewport (scrolling up), show element
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
        } else {
            // If element leaves viewport (scrolling down), hide element
            entry.target.classList.add('hidden');
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.5 }); // Element considered visible if 50% of it is in the viewport

// Observer for all elements with the class fade-in-out
document.querySelectorAll('.fade-in-out').forEach(element => {
    observer.observe(element);
});

const video = document.getElementById('backgroundVideo');
video.volume = 0.5;  // Set volume 50%
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('backgroundVideo');
    document.body.addEventListener('click', () => {
        video.muted = false;
        video.play();
    });
});

