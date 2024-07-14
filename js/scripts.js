// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function revealSections() {
        const scrollPos = window.scrollY + window.innerHeight - 100;
        sections.forEach(section => {
            if (section.offsetTop < scrollPos) {
                section.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', revealSections);
    revealSections(); // Initial call

    // GSAP Animations
    gsap.from(".profile-pic", { duration: 1.5, opacity: 0, y: -100 });
    gsap.from("h1", { duration: 1.5, opacity: 0, y: 100, delay: 0.5 });
    gsap.from(".sidebar ul li", {
        duration: 1.5,
        opacity: 0,
        x: -100,
        stagger: 0.2,
        delay: 1
    });

    // Smooth scroll to sections
    document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            gsap.to(window, { duration: 1, scrollTo: { y: targetSection.offsetTop, autoKill: false } });
            toggleSidebar(); // Close sidebar after clicking on a link
        });
    });

    // Toggle sidebar menu on mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', toggleSidebar);

    function toggleSidebar() {
        sidebar.classList.toggle('open');
    }

    // ScrollTrigger animations for sections
    gsap.utils.toArray("section").forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            duration: 1,
            opacity: 0,
            y: 50
        });
    });
});
