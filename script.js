// script.js - Animations and interactivity for BMM Creations

document.addEventListener('DOMContentLoaded', function () {
    // 1. Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 60, // adjust for header
                    behavior: 'smooth'
                });
                // Optionally update URL hash
                history.pushState(null, '', '#' + targetId);
            }
        });
    });

    // 2. Intersection Observer for fade-in/slide-in animations
    const observer = new window.IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // 3. Animated counters (if present)
    document.querySelectorAll('.counter').forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const speed = 200; // lower is faster
            const count = +counter.innerText.replace(/,/g, '');
            const inc = Math.ceil(target / speed);
            if (count < target) {
                counter.innerText = (count + inc).toLocaleString();
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        updateCounter();
    });

    // 4. Button ripple effect
    document.querySelectorAll('button, .cta').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const circle = document.createElement('span');
            circle.className = 'ripple';
            circle.style.left = e.offsetX + 'px';
            circle.style.top = e.offsetY + 'px';
            this.appendChild(circle);
            setTimeout(() => circle.remove(), 600);
        });
    });
});
