const cardTemplate = document.createElement("template");
cardTemplate.innerHTML = 
`
    <link rel="stylesheet" href="/components/card/card.css">

    <div id="card">
        <h4>
            <slot name="card--title"></slot>
        </h4>
        <p>
            <slot name="card--body"></slot>
        </p>

        <div id="card--body-links">
            <a id="card--links-demo" target="_blank" rel="noopener noreferrer">
                Live demo
            </a>

            <a id="card--links-github" target="_blank" rel="noopener noreferrer">
                <svg-github></svg-github>
                GitHub
            </a>

            <a id="card--links-post" target="_blank" rel="noopener noreferrer">
                Learn more
                <svg-right-arrow></svg-right-arrow>
            </a>
        </div>
    </div>
`;

class Card extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(cardTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        const demo = this.shadowRoot.getElementById("card--links-demo");
        demo.setAttribute("href", this.getAttribute("demo-href"));

        const github = this.shadowRoot.getElementById("card--links-github");
        github.setAttribute("href", this.getAttribute("github-href"));

        const post = this.shadowRoot.getElementById("card--links-post");
        // post.setAttribute("href", this.getAttribute("post-href"));
    }
}

customElements.define("custom-card", Card);