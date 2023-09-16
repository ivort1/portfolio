const mobileNavTemplate = document.createElement("template");
mobileNavTemplate.innerHTML = 
`
    <style>
        @import url("/src/components/mobile/nav/nav.css");
    </style>

    <nav id="nav">
        <div id="nav--content">
            <a href="/src/index.html" id="nav--content-title">Ivan Ortiz</a>

            <div id="nav--toggle-menu">
                <div id="bar-1"></div>
                <div id="bar-2"></div>
                <div id="bar-3"></div>
            </div>
        </div>
        <ul class="nav--links">
            <li>
                <a href="/src/index.html">Home</a>
            </li>
            <li>
                <a href="/src/pages/projects/projects.html">Projects</a>
            </li>
            <li>
                <a href="/src/pages/for-recruiters/for-recruiters.html">For recruiters</a>
            </li>
            <li>
                <img src="/static/svg/moon.svg" alt="moon" id="nav--dark-mode-icon" />
            </li>
        </ul>
    </nav>  
`

class Nav extends HTMLElement {
    constructor() {
        super();
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }
      
    toggleDarkMode() {
        let darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
        
        if (!darkModeEnabled) {
            document.body.classList.add("dark-mode");
            this.darkModeIcon.src="/static/svg/sun.svg";
            localStorage.setItem("darkModeEnabled", "true");
        } else {
            document.body.classList.remove("dark-mode");
            this.darkModeIcon.src="/static/svg/moon.svg";
            localStorage.setItem("darkModeEnabled", "false");
        }
    }

    toggleMenu() {
        const nav = this.shadowRoot.getElementById("nav"),
            style = window.getComputedStyle(nav),
            height = style.getPropertyValue("height"),
            navToggle = this.shadowRoot.getElementById("nav--toggle-menu"),
            navLinks = this.shadowRoot.querySelectorAll(".nav--links li");

        navToggle.classList.toggle("toggle");
        
        if(height === "68px") {
            nav.style.height = "20.625rem"
        } else {
            nav.style.height = "4.25rem"
        }

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
            link.style.animation = "";
            } else {
            link.style.animation = `navLinkFade 0.75s ease forwards ${index / 5 + 0.25}s`;
            }
        });
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(mobileNavTemplate.content);

        this.darkModeIcon = shadow.getElementById("nav--dark-mode-icon");

        const navToggle = shadow.getElementById("nav--toggle-menu");
        navToggle.addEventListener("click", () => this.toggleMenu());

        const darkModeToggle = shadow.getElementById("nav--dark-mode-icon");
        darkModeToggle.addEventListener("click", () => this.toggleDarkMode());
        
        if(localStorage.getItem("darkModeEnabled") === "true") {
            document.body.classList.add("dark-mode");
            this.darkModeIcon.src="/static/svg/sun.svg";
        } else {
            document.body.classList.remove("dark-mode");
            this.darkModeIcon.src="/static/svg/moon.svg";
        }
    }
}

customElements.define("mobile-nav", Nav);