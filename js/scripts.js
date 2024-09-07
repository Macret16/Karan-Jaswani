document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-In Effect
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Scroll Progress Bar
    const progressBar = document.querySelector('.progress-bar');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercentage + '%';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const message = document.querySelector('.rotate-message');

    function checkOrientation() {
        if (window.innerHeight > window.innerWidth) {
            message.style.display = 'block';
            scroll.behavior = false;
        } else {
            message.style.display = 'none';
        }
    }

    // Initial check
    checkOrientation();

    // Check orientation on resize
    window.addEventListener('resize', checkOrientation);
});
