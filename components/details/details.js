const detailsTemplate = document.createElement("template");
detailsTemplate.innerHTML =
`
    <link rel="stylesheet" href="components/details/details.css">

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

class Details extends HTMLElement {
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
        });

        window.addEventListener('toggle', (e) => {
            if (e.detail !== this) {
                this.close();
            }
        });
    }

    rotateArrow() {
        this.arrow.classList.toggle("rotate-arrow");
    }

    toggleContent() {
        this.content.classList.toggle("display-block");
        if (this.content.classList.contains("display-block")) {
            this.addFocus();
            window.dispatchEvent(new CustomEvent('toggle', { detail: this }));
        } else {
            this.removeFocus();
        }
    }

    addFocus() {
        if (this.content.classList.contains("display-block")) {
            this.summary.classList.add("focus");
            this.arrow.classList.add("focus");
        } else {
            this.summary.classList.remove("focus");
            this.arrow.classList.remove("focus");
        }
    }

    removeFocus() {
        this.summary.classList.remove("focus");
        this.arrow.classList.remove("focus");
    }

    rotateArrowBack() {
        if (this.arrow.classList.contains("rotate-arrow")) {
            this.arrow.classList.remove("rotate-arrow");
        }
    }

    close() {
        this.content.classList.remove("display-block");
        this.removeFocus();
        this.rotateArrowBack();
    }
}

customElements.define("custom-details", Details);