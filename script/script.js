
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


// EmailJS

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

// MODAL DESIGN
document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".design-card");
    if (!cards.length) return;

    console.log("modal activo");

    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>

            <img id="modal-img" src="" alt="">

            <div class="modal-text">
                <h2 id="modal-title"></h2>
                <p id="modal-desc"></p>

                <div class="modal-meta">
                    <div>
                        <span>Tipo</span>
                        <p id="modal-type"></p>
                    </div>

                    <div>
                        <span>Cliente</span>
                        <p id="modal-client"></p>
                    </div>

                    <div>
                        <span>Herramientas</span>
                        <p id="modal-tools"></p>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const img = modal.querySelector("#modal-img");
    const title = modal.querySelector("#modal-title");
    const desc = modal.querySelector("#modal-desc");
    const type = modal.querySelector("#modal-type");
    const client = modal.querySelector("#modal-client");
    const tools = modal.querySelector("#modal-tools");

    function openModal(card) {
        img.src = card.dataset.img;
        title.textContent = card.dataset.title;
        desc.textContent = card.dataset.desc;
        type.textContent = card.dataset.type;
        client.textContent = card.dataset.client;
        tools.textContent = card.dataset.tools;

        modal.classList.add("active");
    }

    function closeModal() {
        modal.classList.remove("active");
    }

    cards.forEach(card => {
        card.addEventListener("click", () => openModal(card));
    });

    modal.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("modal") ||
            e.target.classList.contains("modal-close")
        ) {
            closeModal();
        }
    });

});