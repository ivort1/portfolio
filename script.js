/* ____________________________


NavBar

_______________________________ */
const btnToggle = document.querySelector(".nav-toggle");
const mobileMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

btnToggle.addEventListener("click", function() {
    mobileMenu.classList.toggle("nav-active");
    // mobileMenu.classList.toggle("hidden");

    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {

            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
        }
    });

    btnToggle.classList.toggle("toggle");
})

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

footerCopyrightYear.insertAdjacentHTML("beforeEnd", `<span>${year}</span>`);