const linkTemplate = document.createElement("template");
linkTemplate.innerHTML = 
`
    <link rel="stylesheet" href="/components/link/link.css">

    <a id="anchor">
        <img id="icon"/>
        <slot></slot>
        <img id="arrow" src="/static/svg/dark/right-arrow.svg" alt="arrow" />
    </a>
`

class Link extends HTMLElement {
    constructor() {
        super();
        
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(linkTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        const anchor = this.shadowRoot.getElementById("anchor");
        anchor.setAttribute("href", this.getAttribute("href"));
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("rel", "noopener noreferrer");

        const image = this.shadowRoot.getElementById("icon");
        image.setAttribute("src", this.getAttribute("src"));
        image.setAttribute("alt", this.getAttribute("alt"));
        image.setAttribute("width", this.getAttribute("width"));
        image.setAttribute("height", this.getAttribute("height"));

        const arrow = this.shadowRoot.getElementById("arrow");
        arrow.setAttribute("width", this.getAttribute("arrowWidth"));
        arrow.setAttribute("height", this.getAttribute("arrowHeight"));
    }
}

customElements.define("custom-link", Link);