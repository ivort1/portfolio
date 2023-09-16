const secondaryBtnTemplate = document.createElement("template");
secondaryBtnTemplate.innerHTML = 
`
    <style>
        @import url('/src/components/button/secondary/button.css');
    </style>

    <a id="anchor">
        <img id="icon" />
        <slot></slot>
        <img id="arrow" src="/static/svg/right-arrow.svg" alt="arrow" />
    </a>
`

class SecondaryButton extends HTMLElement {
    constructor() {
        super();
        
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(secondaryBtnTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        const anchor = this.shadowRoot.getElementById("anchor");
        anchor.setAttribute("href", this.getAttribute("href"));
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("rel", "noopener noreferrer");

        const image = this.shadowRoot.getElementById("icon");
        image.setAttribute("src", this.getAttribute("src"));
        image.setAttribute("alt", this.getAttribute("alt"));
    }
}

customElements.define("secondary-button", SecondaryButton);