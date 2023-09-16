const detailsTemplate = document.createElement("template");
detailsTemplate.innerHTML =
`
    <style>
        @import url("/src/components/details/details.css");
    </style>    

    <div id="details">
        <div id="details--summary">
            <slot name="summary"></slot>
            <img id="details--arrow" src="/static/svg/light/up-arrow.svg" alt="arrow" />
        </div>
        <div id="details--content"><slot name="content"></slot></div>
    </div>
`;

class Details extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(detailsTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        this.summary = this.shadowRoot.getElementById("details--summary");
        this.content = this.shadowRoot.getElementById("details--content");
        this.arrow = this.shadowRoot.getElementById("details--arrow");

        this.summary.addEventListener("click", () => {
            this.rotateArrow();
            this.toggleContent();
            this.addFocus();
        });

        window.addEventListener('toggle', (e) => {
            if (e.detail !== this) {
                this.summary.classList.remove("focus");
                this.arrow.setAttribute("src", "/static/svg/light/up-arrow.svg");
            }
        });
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
            this.arrow.setAttribute("src", "/static/svg/light/up-arrow-focus.svg");
        } else {
            this.arrow.setAttribute("src", "/static/svg/light/up-arrow.svg");
        }

        window.dispatchEvent(new CustomEvent('toggle', { detail: this }));
    }
}

customElements.define("custom-details", Details);