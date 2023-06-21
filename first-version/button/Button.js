class Button extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = "Custom component";
    }
}

customElements.define("custom-button", Button);