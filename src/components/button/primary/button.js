const primaryBtnTemplate = document.createElement("template");
primaryBtnTemplate.innerHTML = 
`
    <link rel="preload" href="/src/components/button/primary/button.css" as="style" onload="this.rel='stylesheet'">
   
    <a id="anchor">
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
    }
}

customElements.define("primary-button", PrimaryButton);