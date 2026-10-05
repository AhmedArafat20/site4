/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");
    navbar.classList.toggle("open");

});


/* Close menu after clicking a link */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuBtn.classList.remove("active");
        navbar.classList.remove("open");

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".service-card, .feature, .step, .about-text, .about-image, .contact-info, .contact-card"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {
                    entry.target.classList.add("reveal");
                }, index * 80);

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !phone) {
        alert("من فضلك أدخل الاسم ورقم الجوال.");
        return;
    }

    const whatsappNumber = "966538519530";

    let text = `
السلام عليكم، أريد طلب خدمة.

الاسم: ${name}
رقم الجوال: ${phone}
الخدمة المطلوبة: ${service || "غير محددة"}
التفاصيل: ${message || "لا توجد تفاصيل إضافية"}

أرجو التواصل معي.
    `;

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(text);

    window.open(whatsappURL, "_blank");

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent = new Date().getFullYear();


/* =========================
   CLOSE MOBILE MENU OUTSIDE
========================= */

document.addEventListener("click", (event) => {

    const clickedInsideMenu =
        navbar.contains(event.target) ||
        menuBtn.contains(event.target);

    if (!clickedInsideMenu && navbar.classList.contains("open")) {

        navbar.classList.remove("open");
        menuBtn.classList.remove("active");

    }

});