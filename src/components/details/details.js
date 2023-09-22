const detailsTemplate = document.createElement("template");
detailsTemplate.innerHTML =
`
    <style>
        @import url("/src/components/details/details.css");
    </style>    

    <div id="details">
        <div id="details--summary">
            <slot name="summary"></slot>
            <svg-up-arrow id="details--arrow"></svg-up-arrow>
        </div>
        <div id="details--content">
            <slot name="content"></slot>
        </div>
    </div>
`;

class Details extends HTMLElement {ac
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(detailsTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        this.details = this.shadowRoot.getElementById("details");
        this.summary = this.shadowRoot.getElementById("details--summary");
        this.content = this.shadowRoot.getElementById("details--content");
        this.arrow = this.shadowRoot.getElementById("details--arrow");

        this.summary.addEventListener("click", () => {
            this.rotateArrow();
            this.toggleContent();
            this.addFocus();
            this.scrollToTop();
        });

        window.addEventListener('toggle', (e) => {
            if (e.detail !== this) {
                this.summary.classList.remove("focus");
            }
        });
    }

    scrollToTop() {
        this.details.scrollIntoView({ behavior: "smooth" });
    }

    rotateArrow() {
        this.arrow.classList.toggle("rotate-arrow");
    }

    toggleContent() {
        this.content.classList.toggle("display-block");
    }

    addFocus() {
        this.summary.classList.add("focus");

        if (this.summary.classList.contains("focus")) {
            this.arrow.classList.add("focus");

        } else {
            this.arrow.classList.remove("focus");
        }

        window.dispatchEvent(new CustomEvent('toggle', { detail: this }));
    }
}

customElements.define("custom-details", Details);