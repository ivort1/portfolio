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
                    src="/static/svg/dark/linkedin.svg"
                    alt="Linkedin"
                    width="16px"
                    height="16px"
                    arrowWidth="12px"
                    arrowHeight="12px">
                    Linkedin
                </custom-link>

                <custom-link
                    href="https://github.com/ivort1"
                    src="/static/svg/dark/github.svg"
                    alt="GitHub"
                    width="16px"
                    height="16px"
                    arrowWidth="12px"
                    arrowHeight="12px">
                    GitHub
                </custom-link>

                <custom-link
                    href="https://www.instagram.com/ivunortiz/"
                    src="/static/svg/dark/instagram.svg"
                    alt="Instagram"
                    width="16px"
                    height="16px"
                    arrowWidth="12px"
                    arrowHeight="12px">
                    Instagram
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