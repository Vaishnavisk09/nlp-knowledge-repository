// ===================================
// NLP Knowledge Artifact Repository
// script.js
// ===================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Mobile Navigation
    // ==========================

    const menuBtn = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            if (navLinks.style.display === "flex") {
                navLinks.style.display = "none";
            } else {
                navLinks.style.display = "flex";
                navLinks.style.flexDirection = "column";
                navLinks.style.position = "absolute";
                navLinks.style.top = "70px";
                navLinks.style.right = "20px";
                navLinks.style.padding = "20px";
                navLinks.style.borderRadius = "15px";
                navLinks.style.background = "rgba(15,23,42,0.95)";
                navLinks.style.backdropFilter = "blur(15px)";
                navLinks.style.gap = "15px";
                navLinks.style.zIndex = "999";
            }

        });

    }

    // ==========================
    // Reveal Animation
    // ==========================

    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {

        revealElements.forEach((element) => {

            const windowHeight = window.innerHeight;
            const revealTop = element.getBoundingClientRect().top;
            const revealPoint = 100;

            if (revealTop < windowHeight - revealPoint) {
                element.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    // ==========================
    // Back To Top Button
    // ==========================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // ==========================
    // Counter Animation
    // ==========================

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;

            const increment = target / 100;

            if (current < target) {

                counter.innerText = Math.ceil(current + increment);

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

    // ==========================
    // Card Hover Glow Effect
    // ==========================

    const cards = document.querySelectorAll(".glass-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0) scale(1)";

        });

    });

    // ==========================
    // Smooth Scroll for Anchors
    // ==========================

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId !== "#") {

                e.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {

                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });

    // ==========================
    // Active Navbar Highlight
    // ==========================

    const currentPage =
        window.location.pathname.split("/").pop();

    const navItems =
        document.querySelectorAll(".nav-links a");

    navItems.forEach(link => {

        const linkPage =
            link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });

    // ==========================
    // Page Loaded Animation
    // ==========================

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";

    }, 100);

    // ==========================
    // Workflow Animation
    // ==========================

    //const workflowBoxes =
     //   document.querySelectorAll(".workflow-box");

  //  workflowBoxes.forEach((box, index) => {

  //      box.style.opacity = "0";
   //     box.style.transform = "translateY(20px)";

     //   setTimeout(() => {

     //       box.style.transition =
     //           "all 0.6s ease";

     //       box.style.opacity = "1";
    //      box.style.transform =
     //           "translateY(0px)";

    //    }, index * 150);

  //  });

    // ==========================
    // Console Welcome Message
    // ==========================

    console.log(
        "🧠 NLP Knowledge Artifact Repository Loaded Successfully"
    );

});
