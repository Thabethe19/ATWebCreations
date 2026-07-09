/* =====================================================
   AT WEB CREATIONS
   Professional JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       SCROLL REVEAL ANIMATION
    ========================================== */

    const reveals = document.querySelectorAll(".reveal");

    function revealElements() {

        const windowHeight = window.innerHeight;

        reveals.forEach(element => {

            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 120) {

                element.classList.add("active");

            }

        });

    }

    revealElements();

    window.addEventListener("scroll", revealElements);

    /* ==========================================
       STICKY NAVBAR SHRINK
    ========================================== */

    const header = document.querySelector("header");

    function shrinkNavbar() {

        if (window.scrollY > 60) {

            header.style.padding = "6px 0";
            header.style.background = "rgba(13,27,42,0.97)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";

        } else {

            header.style.padding = "15px 0";
            header.style.background = "rgba(13,27,42,.90)";
            header.style.boxShadow = "0 5px 15px rgba(0,0,0,.1)";

        }

    }

    window.addEventListener("scroll", shrinkNavbar);

    shrinkNavbar();

    /* ==========================================
       ACTIVE NAVIGATION LINK
    ========================================== */

    const currentPage = location.pathname.split("/").pop();

    document.querySelectorAll(".navbar a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.classList.add("active");

        }

    });

    /* ==========================================
       MAGNETIC BUTTON EFFECT
    ========================================== */

    const buttons = document.querySelectorAll(".btn, .cta-button");

    buttons.forEach(button => {

        button.addEventListener("mousemove", (event) => {

            const rect = button.getBoundingClientRect();

            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;

            button.style.transform =
                `translate(${x * 0.15}px, ${y * 0.15}px)`;

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "translate(0,0)";

        });

    });

    /* ==========================================
       SMOOTH PAGE FADE IN
    ========================================== */

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .8s ease";
        document.body.style.opacity = "1";

    }, 100);

    /* ==========================================
       IMAGE HOVER EFFECT
    ========================================== */

    const images = document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener("mouseenter", () => {

            image.style.transform = "scale(1.03)";

        });

        image.addEventListener("mouseleave", () => {

            image.style.transform = "scale(1)";

        });

    });

    /* ==========================================
       ANIMATED COUNTERS
    ========================================== */

    const counters = document.querySelectorAll(".stat h2");

    function startCounters() {

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            if (isNaN(target)) return;

            let count = 0;

            const speed = target / 80;

            function updateCounter() {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            }

            updateCounter();

        });

    }

    if (counters.length > 0) {

        startCounters();

    }

    /* ==========================================
       BACK TO TOP BUTTON
       (Requires a button with id="backToTop")
    ========================================== */

    const topButton = document.getElementById("backToTop");

    if (topButton) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                topButton.style.display = "block";

            } else {

                topButton.style.display = "none";

            }

        });

        topButton.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ==========================================
       SMOOTH SCROLL FOR INTERNAL LINKS
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

});