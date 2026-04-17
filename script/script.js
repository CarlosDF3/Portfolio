
document.addEventListener("DOMContentLoaded", () => {

    /* MENÚ RESPONSIVE */
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }


    /*  SCROLL */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    /* SLIDER */
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    let current = 0;

    function nextSlide() {
        if (!slides.length || !dots.length) return;

        slides[current].classList.remove("active");
        dots[current].classList.remove("active");

        current = (current + 1) % slides.length;

        slides[current].classList.add("active");
        dots[current].classList.add("active");
    }

    if (slides.length > 0) {
        setInterval(nextSlide, 10000);
    }


    /* NAV ACTIVE ON SCROLL  */
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {
        let currentSection = "";
        let minDistance = Infinity;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const distance = Math.abs(rect.top);

            if (distance < minDistance) {
                minDistance = distance;
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    });


    /* HERO CARDS  */
    const cards = document.querySelectorAll(".card");
    const heroRight = document.querySelector(".hero-right");

    if (cards.length) {

        cards.forEach(card => {
            card.addEventListener("click", (e) => {
                e.stopPropagation();

                cards.forEach(c => c.classList.remove("active"));
                card.classList.add("active");
            });
        });

        document.addEventListener("click", () => {
            cards.forEach(c => c.classList.remove("active"));
        });

        if (heroRight) {
            heroRight.addEventListener("click", (e) => {
                e.stopPropagation();
            });
        }
    }

});

document.addEventListener("DOMContentLoaded", function () {

    // EmailJS init
    (function () {
        emailjs.init("ZO8nXTL9f90HmM0T_");
    })();

    const form = document.getElementById("contact-form");

    if (!form) {
        console.error("No se encontró el formulario");
        return;
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_jyiq6ng",
            "template_umhvn3j",
            this
        ).then(() => {
            alert("Mensaje enviado correctamente");
        }).catch((error) => {
            alert("Error al enviar el mensaje");
            console.log(error);
        });
    });

});
