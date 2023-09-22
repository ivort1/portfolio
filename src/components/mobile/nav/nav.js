const mobileNavTemplate = document.createElement("template");
mobileNavTemplate.innerHTML = 
`
    <link rel="stylesheet" href="/src/components/mobile/nav/nav.css">

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
        this.closedNavHeight = 0;
        this.expandedNavHeight = 0;
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(mobileNavTemplate.content);

        this.nav = this.shadowRoot.getElementById("nav");
        this.navContent = this.shadowRoot.getElementById("nav--content");

        this.closedNavHeight = 0;
        this.expandedNavHeight = 0;

        this.darkModeToggle = shadow.getElementById("nav--dark-mode-icon");
        this.darkModeToggle.addEventListener("click", () => this.toggleDarkMode());

        this.navToggle = shadow.getElementById("nav--toggle-menu");
        this.navToggle.addEventListener("click", () => this.toggleMenu());

        if(localStorage.getItem("darkModeEnabled") === "true") {
            document.body.classList.add("dark-mode");
            this.darkModeToggle.src="/static/svg/sun.svg";
        } else {
            document.body.classList.remove("dark-mode");
            this.darkModeToggle.src="/static/svg/moon.svg";
        }

        window.setTimeout(() => {
            this.setNavHeight();
        }, 250);
    }

    setNavHeight() {
        const navStyle = window.getComputedStyle(this.nav);
        const navHeight = parseFloat(navStyle.getPropertyValue("height"));
        this.closedNavHeight = navHeight;

        const navContentStyle = window.getComputedStyle(this.navContent);
        const navContentHeight = parseFloat(navContentStyle.getPropertyValue("height"));

        this.navContent.style.padding = `${((navHeight - navContentHeight) / 2) / 16}rem 0`;
    }
      
    toggleDarkMode() {
        let darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
        
        if (!darkModeEnabled) {
            document.body.classList.add("dark-mode");
            this.darkModeToggle.src="/static/svg/sun.svg";
            localStorage.setItem("darkModeEnabled", "true");
            document.documentElement.style.setProperty('--svg-arrow-path', '/static/svg/dark/up-arrow.svg');
        } else {
            document.body.classList.remove("dark-mode");
            this.darkModeToggle.src="/static/svg/moon.svg";
            localStorage.setItem("darkModeEnabled", "false");
            document.documentElement.style.setProperty('--svg-arrow-path', '/static/svg/light/up-arrow.svg');
        }

        window.dispatchEvent(new CustomEvent('darkModeToggle', { detail: darkModeEnabled }));
    }

    toggleMenu() {
        const navToggle = this.shadowRoot.getElementById("nav--toggle-menu");
        const navLinksLi = this.shadowRoot.querySelectorAll(".nav--links li");
        const navLinks = this.shadowRoot.querySelector(".nav--links");
        const navLinksStyle = window.getComputedStyle(navLinks);
        const navLinksHeight = navLinksStyle.getPropertyValue("height");
        const navLinksBottomPadding = navLinksStyle.getPropertyValue("padding-bottom");

        const style = window.getComputedStyle(this.nav);
        const height = style.getPropertyValue("height");

        navToggle.classList.toggle("toggle");

        if(parseFloat(height) === this.closedNavHeight) {
            this.nav.style.height = `${(this.closedNavHeight + parseFloat(navLinksHeight) + parseFloat(navLinksBottomPadding)) / 16}rem`
        } else {
            this.nav.style.height = `${this.closedNavHeight / 16}rem`
        }

        navLinksLi.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.75s ease forwards ${index / 5 + 0.25}s`;
            }
        });
    }
}

customElements.define("mobile-nav", Nav);