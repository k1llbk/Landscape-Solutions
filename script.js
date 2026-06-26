/* =====================================
   LANDSCAPE SOLUTIONS
   PROFESSIONAL JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", () => {

/* =====================================
   STICKY NAVBAR
===================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar?.classList.add("scrolled");
    }
    else{
        navbar?.classList.remove("scrolled");
    }

});

/* =====================================
   SCROLL PROGRESS BAR
===================================== */

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    if(!progressBar) return;

    const winScroll =
    document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const scrolled =
    (winScroll / height) * 100;

    progressBar.style.width =
    scrolled + "%";

});

/* =====================================
   BACK TO TOP BUTTON
===================================== */

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(!backToTop) return;

    if(window.scrollY > 500){
        backToTop.style.display = "block";
    }
    else{
        backToTop.style.display = "none";
    }

});

backToTop?.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

/* =====================================
   SMOOTH SCROLLING
===================================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        target?.scrollIntoView({
            behavior:"smooth"
        });

    });

});

/* =====================================
   INTERSECTION OBSERVER
===================================== */

const revealElements =
document.querySelectorAll(".reveal");

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.2
});

revealElements.forEach(item => {
    observer.observe(item);
});

/* =====================================
   ANIMATED COUNTERS
===================================== */

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target =
            +counter.dataset.target;

            let current = 0;

            const increment =
            target / 100;

            const updateCounter = () => {

                if(current < target){

                    current += increment;

                    counter.innerText =
                    Math.floor(current);

                    requestAnimationFrame(
                        updateCounter
                    );

                }
                else{

                    counter.innerText =
                    target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* =====================================
   DARK MODE
===================================== */

const darkToggle =
document.getElementById("darkModeToggle");

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark-mode");

}

darkToggle?.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const theme =
    document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";

    localStorage.setItem("theme", theme);

});

/* =====================================
   PROJECT FILTERS
===================================== */

const filterButtons =
document.querySelectorAll(".filter-btn");

const projectCards =
document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter =
        button.dataset.filter;

        projectCards.forEach(card => {

            if(
                filter === "all" ||
                card.dataset.category === filter
            ){

                card.style.display = "block";

            }
            else{

                card.style.display = "none";

            }

        });

    });

});

/* =====================================
   LIGHTBOX
===================================== */

const images =
document.querySelectorAll(".lightbox-image");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

const closeLightbox =
document.getElementById("closeLightbox");

images.forEach(image => {

    image.addEventListener("click", () => {

        if(!lightbox) return;

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

    });

});

closeLightbox?.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox?.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        lightbox.style.display="none";

    }

});

/* =====================================
   TESTIMONIAL SLIDER
===================================== */

const slides =
document.querySelectorAll(".testimonial");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {

        slide.style.display = "none";

    });

    if(slides[index]){

        slides[index].style.display =
        "block";

    }

}

if(slides.length > 0){

    showSlide(currentSlide);

    setInterval(() => {

        currentSlide++;

        if(currentSlide >= slides.length){

            currentSlide = 0;

        }

        showSlide(currentSlide);

    },5000);

}

/* =====================================
   LAZY LOADING
===================================== */

const lazyImages =
document.querySelectorAll("img[data-src]");

const lazyObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const img =
            entry.target;

            img.src =
            img.dataset.src;

            img.removeAttribute(
                "data-src"
            );

            lazyObserver.unobserve(img);

        }

    });

});

lazyImages.forEach(img => {

    lazyObserver.observe(img);

});

/* =====================================
   CONTACT FORM
===================================== */

const form =
document.getElementById("contactForm");

const nameField =
document.getElementById("name");

const emailField =
document.getElementById("email");

const phoneField =
document.getElementById("phone");

const subjectField =
document.getElementById("subject");

const messageField =
document.getElementById("message");

const counter =
document.getElementById("charCount");

/* =====================================
   LOCAL STORAGE SAVE
===================================== */

const fields = [
nameField,
emailField,
phoneField,
subjectField,
messageField
];

fields.forEach(field => {

    if(!field) return;

    field.value =
    localStorage.getItem(field.id) || "";

    field.addEventListener("input", () => {

        localStorage.setItem(
            field.id,
            field.value
        );

    });

});

/* =====================================
   CHARACTER COUNTER
===================================== */

messageField?.addEventListener(
"input",
() => {

    if(counter){

        counter.innerText =
        messageField.value.length;

    }

});

/* =====================================
   BOTSWANA PHONE FORMAT
===================================== */

phoneField?.addEventListener(
"input",
() => {

    let value =
    phoneField.value.replace(/\D/g,'');

    if(value.length > 8){

        value = value.slice(0,8);

    }

    phoneField.value = value;

});

/* =====================================
   VALIDATION FUNCTIONS
===================================== */

function setError(field,message){

    const error =
    document.getElementById(
        field.id + "Error"
    );

    field.classList.add("invalid");
    field.classList.remove("valid");

    if(error){

        error.textContent = message;

    }

}

function setSuccess(field){

    const error =
    document.getElementById(
        field.id + "Error"
    );

    field.classList.add("valid");
    field.classList.remove("invalid");

    if(error){

        error.textContent = "";

    }

}

function validateName(){

    if(nameField.value.trim().length < 3){

        setError(
            nameField,
            "Enter a valid name."
        );

        return false;

    }

    setSuccess(nameField);

    return true;

}

function validateEmail(){

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(
        !regex.test(
            emailField.value.trim()
        )
    ){

        setError(
            emailField,
            "Enter a valid email."
        );

        return false;

    }

    setSuccess(emailField);

    return true;

}

function validatePhone(){

    if(
        phoneField.value.length !== 8
    ){

        setError(
            phoneField,
            "Botswana number must be 8 digits."
        );

        return false;

    }

    setSuccess(phoneField);

    return true;

}

function validateSubject(){

    if(subjectField.value.trim()===""){

        setError(
            subjectField,
            "Subject required."
        );

        return false;

    }

    setSuccess(subjectField);

    return true;

}

function validateMessage(){

    if(messageField.value.length < 20){

        setError(
            messageField,
            "Message too short."
        );

        return false;

    }

    setSuccess(messageField);

    return true;

}

/* =====================================
   REAL TIME VALIDATION
===================================== */

nameField?.addEventListener(
"input",
validateName
);

emailField?.addEventListener(
"input",
validateEmail
);

phoneField?.addEventListener(
"input",
validatePhone
);

subjectField?.addEventListener(
"input",
validateSubject
);

messageField?.addEventListener(
"input",
validateMessage
);

/* =====================================
   ANTI BOT
===================================== */

let pageLoadTime =
Date.now();

/* =====================================
   SUBMIT
===================================== */

form?.addEventListener(
"submit",
e => {

    e.preventDefault();

    const valid =
    validateName() &&
    validateEmail() &&
    validatePhone() &&
    validateSubject() &&
    validateMessage();

    const secondsOnPage =
    (Date.now() -
    pageLoadTime) / 1000;

    if(secondsOnPage < 3){

        alert(
        "Spam protection triggered."
        );

        return;

    }

    if(!valid){

        return;

    }

    const button =
    form.querySelector("button");

    button.innerHTML =
    '<span class="spinner"></span>';

    button.disabled = true;

    setTimeout(() => {

        button.innerHTML =
        "Send Message";

        button.disabled = false;

        form.innerHTML = `
        <div class="success-message">
        <h3>✓ Message Sent Successfully</h3>
        <p>
        Thank you for contacting
        Landscape Solutions.
        We will respond shortly.
        </p>
        </div>
        `;

        localStorage.clear();

    },2500);

});
