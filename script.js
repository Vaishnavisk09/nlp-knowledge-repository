// =========================
// NLP Knowledge Artifact Repository
// script.js
// =========================

document.addEventListener("DOMContentLoaded", () => {

    // Mobile Menu
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
            });
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const windowHeight = window.innerHeight;
            const revealTop = element.getBoundingClientRect().top;
            const revealPoint = 100;

            if (revealTop < windowHeight - revealPoint) {
                element.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // Back To Top Button
    const backToTop = document.getElementById("backToTop");

    const toggleBackToTop = () => {
        if (!backToTop) return;

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    };

    window.addEventListener("scroll", toggleBackToTop);
    toggleBackToTop();

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Active Navbar Highlight
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {
        const href = link.getAttribute("href");

        if (
            href === currentPage ||
            (currentPage === "" && href === "index.html")
        ) {
            link.classList.add("active");
        }
    });

    // Smooth Hover Animation for Cards
    const cards = document.querySelectorAll(
        ".glass-card, .feature-card, .content-card, .stat-card"
    );

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });

    // Animated Counter for Statistics
    const counters = document.querySelectorAll(".stat-card h3");

    const animateCounter = (element, targetValue, suffix = "") => {
        let count = 0;
        const increment = Math.ceil(targetValue / 60);

        const timer = setInterval(() => {
            count += increment;

            if (count >= targetValue) {
                count = targetValue;
                clearInterval(timer);
            }

            element.textContent = count + suffix;
        }, 25);
    };

    const statsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                counters.forEach(counter => {

                    const value = counter.textContent.trim();

                    if (value.includes("+")) {
                        const num = parseInt(value.replace("+", ""));
                        animateCounter(counter, num, "+");
                    }

                    else if (value.includes("%")) {
                        const num = parseInt(value.replace("%", ""));
                        animateCounter(counter, num, "%");
                    }

                    else {
                        const num = parseInt(value);
                        if (!isNaN(num)) {
                            animateCounter(counter, num);
                        }
                    }

                });

                statsObserver.disconnect();
            }
        });
    });

    const statsSection = document.querySelector(".stats-section");

    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Navbar Background Effect
    const navbar = document.querySelector(".navbar");

    const navbarScrollEffect = () => {
        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.style.background = "rgba(15,23,42,0.95)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
        } else {
            navbar.style.background = "rgba(15,23,42,0.75)";
            navbar.style.boxShadow = "none";
        }
    };

    window.addEventListener("scroll", navbarScrollEffect);
    navbarScrollEffect();

    // Page Load Animation
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";
    }, 100);

});
