const secondaryBtnTemplate = document.createElement("template");
secondaryBtnTemplate.innerHTML = 
`
    <style>
        @import url('/src/components/button/secondary/button.css');
    </style>

    <a id="anchor">
        <slot></slot>
        <svg-right-arrow id="arrow"></svg-right-arrow>
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
    }
}

customElements.define("secondary-button", SecondaryButton);