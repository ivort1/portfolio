const data = [
    {
        text: "Email me",
        url: "mailto:ortiz.ivan93@gmail.com",
        icon: `<i class="fa-solid fa-envelope icon"></i>`,
        class: "text-link",
        arrowIcon: `<i class="fa-solid fa-arrow-right"></i>`
    },
    {
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/ivanortiz93",
        icon: `<i class="fa-brands fa-linkedin icon"></i>`,
        class: "text-link",
        arrowIcon: `<i class="fa-solid fa-arrow-right"></i>`
    },
    {
        text: "GitHub",
        url: "https://github.com/ivort1",
        icon: `<i class="fa-brands fa-github icon"></i>`,
        class: "text-link",
        arrowIcon: `<i class="fa-solid fa-arrow-right"></i>`
    }
]

const landingLinks = document.querySelector(".landing--links");
const footerContactLinks = document.querySelector(".footer--contact-links");

data.map(element => {
    const linksHtml =
    `
        <a href=${element.url} rel="noopener noreferrer" target="_blank" class=${element.class}>
            ${element.icon || ""}${element.text}${element.arrowIcon}
        </a>
    `

    landingLinks.insertAdjacentHTML("beforeEnd", linksHtml);
    footerContactLinks.insertAdjacentHTML("beforeEnd", linksHtml);
})