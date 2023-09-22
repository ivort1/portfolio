const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = 
`
    <link rel="stylesheet" href="/components/footer/footer.css">

    <footer id="footer">
        <div id="footer--content">
            <div id="footer--text">
                Developed using vanilla JavaScript, HTML, and CSS, without the use of frameworks or libraries.
                <br>View the source code on <a href="https://github.com/ivort1/portfolio" rel="noopener noreferrer" target="_blank" id="footer--github-link">GitHub</a>.
            </div>
        
            <div id="footer--links">
                <custom-link
                    href="https://www.linkedin.com/in/ivanortiz93"
                    alt="LinkedIn"
                    width="16px"
                    height="16px"
                    arrowWidth="12px"
                    arrowHeight="12px">
                        <span slot="svg"><svg-linkedin></svg-linkedin></span>
                        <span slot="text">LinkedIn</span>
                </custom-link>

                <custom-link
                    href="https://github.com/ivort1"
                    alt="GitHub"
                    width="16px"
                    height="16px"
                    arrowWidth="12px"
                    arrowHeight="12px">
                        <span slot="svg"><svg-github></svg-github></span>
                        <span slot="text">GitHub</span>
                </custom-link>

                <custom-link
                    href="https://www.instagram.com/ivunortiz/"
                    alt="Instagram"
                    width="16px"
                    height="16px"
                    arrowWidth="12px"
                    arrowHeight="12px">
                        <span slot="svg"><svg-instagram></svg-instagram></span>
                        <span slot="text">Instagram</span>
                </custom-link>
            </div>

            <div id="footer--copyright"></div>
        </div>
    </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(footerTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        const copyright = this.shadowRoot.getElementById("footer--copyright");
        const date = new Date();
        copyright.innerText = `© ${date.getFullYear()} Ivan Ortiz`;
    }
}

customElements.define("custom-footer", Footer);