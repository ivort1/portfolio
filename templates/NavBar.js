const template = document.createElement("template");
template.innerHTML = `<h1></h1>`;


class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("h1").innerText = this.getAttribute("name");
    }
}
window.customElements.define("my-template", NavBar);