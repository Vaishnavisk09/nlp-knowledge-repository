// ==============================
// Smooth Fade-In Animation
// ==============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// ==============================
// Active Navigation Link
// ==============================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// Back To Top Button
// ==============================

const button = document.createElement("button");

button.innerHTML = "⬆";

button.id = "topBtn";

document.body.appendChild(button);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        button.style.display = "block";

    } else {

        button.style.display = "none";

    }

});

button.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
