const linkTemplate = document.createElement("template");
linkTemplate.innerHTML = 
`
    <link rel="stylesheet" href="/components/link/link.css">

    <a id="anchor">
        <slot name="svg" id="icon"></slot>
        <slot name="text" id="text"></slot>
        <svg-right-arrow id="arrow"></svg-right-arrow>
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

        const icon = this.shadowRoot.getElementById("icon");
        icon.setAttribute("src", this.getAttribute("src"));
        icon.setAttribute("alt", this.getAttribute("alt"));
        icon.setAttribute("width", this.getAttribute("width"));
        icon.setAttribute("height", this.getAttribute("height"));

        const arrow = this.shadowRoot.getElementById("arrow");
        arrow.setAttribute("width", this.getAttribute("arrowWidth"));
        arrow.setAttribute("height", this.getAttribute("arrowHeight"));
    }
}

customElements.define("custom-link", Link);