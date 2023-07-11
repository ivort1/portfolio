/* ____________________________


Dark mode

_______________________________ */
const darkModeIcon = document.getElementById("nav--dark-mode-icon");
localStorage.setItem("darkModeEnabled", "false");
let darkModeEnabled = localStorage.getItem("darkModeEnabled");
// localStorage.setItem("hasBeenToggled", "false");
// let hasBeenToggled = localStorage.getItem("hasBeenToggled");

// Check user's system settings to see if they prefer dark mode by default
// const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// if (prefersDarkMode && hasBeenToggled === "false") {
//     document.body.classList.add("dark-mode");
//     darkModeIcon.classList.replace("fa-moon", "fa-sun");
//     localStorage.setItem("darkModeEnabled", "true");
// } else {
//     localStorage.setItem("darkModeEnabled", "false");
// }

const toggleDarkMode = () => {
    if (darkModeEnabled === "true") {
        document.body.classList.remove("dark-mode");
        darkModeIcon.classList.replace("fa-sun", "fa-moon");
        darkModeEnabled = "false";
    } else {
        document.body.classList.add("dark-mode");
        darkModeIcon.classList.replace("fa-moon", "fa-sun");
        darkModeEnabled = "true";
    }

    localStorage.setItem("darkModeEnabled", darkModeEnabled);
    // localStorage.setItem("hasBeenToggled", "true");
}

/* ____________________________


NavBar

_______________________________ */
window.onscroll = () => {minimizeNavOnScroll()};

const minimizeNavOnScroll = () => {
    const nav = document.getElementById("nav"),
    style = window.getComputedStyle(nav),
    paddingTop = style.getPropertyValue('padding-top');

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        if(document.body.classList.contains("dark-mode")) {
            nav.style.backgroundColor = "#1E1E2C";
        } else {
            nav.style.backgroundColor = "#FFFFFF";
        }
        
        if(paddingTop != "40px") {
            nav.style.paddingTop = "1rem";
            nav.style.paddingBottom = "1rem";
        } 
    } else {
            nav.removeAttribute("style");
    }
} 


const toggle = () => {
    const nav = document.getElementById("nav"),
        style = window.getComputedStyle(nav),
        height = style.getPropertyValue('height'),
        navToggle = document.getElementById("nav-toggle"),
        navLinks = document.querySelectorAll(".nav-links li");

        if(height === "64px") {
            nav.style.height = "30rem";
        } else {
            nav.style.height = "4rem";
        }

        navToggle.classList.toggle("toggle");

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.25}s`;
            }
        });
}

/* ____________________________


Tooltip

_______________________________ */
const copyText = "ortiz.ivan93@gmail.com";
const copyEmailAddressButton = document.getElementById("contact--copy-email-address-tooltip");

const copyEmailAddress = async() => {
    try {
        await navigator.clipboard.writeText(copyText);
        copyEmailAddressButton.setAttribute("tooltip", "Copied!");
        copyEmailAddressButton.setAttribute("tooltip-position", "right");
        setTimeout(() => copyEmailAddressButton.removeAttribute("tooltip", "tooltip-position"), "3000");
        console.log("Copied to clipboard");
    
    } catch (err) {
        console.log("Failed to copy to clipboard", err);
    }
}

/* ____________________________


Footer

_______________________________ */
const date = new Date();
const year = date.getFullYear();

const footerCopyrightYear = document.querySelector(".footer--copyright-year");
footerCopyrightYear.textContent = (`Ivan Ortiz © ${year}`);