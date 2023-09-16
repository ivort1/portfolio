const primaryBtnTemplate = document.createElement("template");
primaryBtnTemplate.innerHTML = 
`
    <style>
        @import url('/src/components/button/primary/button.css');
    </style>

    <a id="anchor">
        <img id="image"/>
        <slot></slot>
    </a>
`

class PrimaryButton extends HTMLElement {
    constructor() {
        super();
        
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(primaryBtnTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        const anchor = this.shadowRoot.getElementById("anchor");
        anchor.setAttribute("href", this.getAttribute("href"));
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("rel", "noopener noreferrer");

        const image = this.shadowRoot.getElementById("image");
        image.setAttribute("src", this.getAttribute("src"));
        image.setAttribute("alt", this.getAttribute("alt"));
    }
}

customElements.define("primary-button", PrimaryButton);