const svgCvTemplate = document.createElement("template");
svgCvTemplate.innerHTML =
`
    <style>
        #svg--cv {
            height: 1.5rem;
            transition: color ease-in-out 0.2s;
            width: 1.5rem;
        
            /* Flexbox */
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
    </style>    

    <svg id="svg--cv" fill="currentColor" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
        <path d="m330 150c-19.299 0-35-15.701-35-35v-115h-179c-30.327 0-55 24.673-55 55v402c0 30.327 24.673 55 55 55h280c30.327 0 55-24.673 55-55v-307zm-187 210h72.72c8.284 0 15 6.716 15 15s-6.716 15-15 15h-72.72c-8.284 0-15-6.716-15-15s6.716-15 15-15zm-15-65c0-8.284 6.716-15 15-15h220c8.284 0 15 6.716 15 15s-6.716 15-15 15h-220c-8.284 0-15-6.716-15-15zm235-95c8.284 0 15 6.716 15 15s-6.716 15-15 15h-220c-8.284 0-15-6.716-15-15s6.716-15 15-15z"></path><path d="m325 115c0 2.757 2.243 5 5 5h114.314c-2.744-5.066-6.274-9.719-10.515-13.732l-96.423-91.222c-3.742-3.54-7.91-6.493-12.375-8.825v108.779z"></path>
    </svg>

`;

class SvgCv extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(svgCvTemplate.content.cloneNode(true));
    }
}

customElements.define("svg-cv", SvgCv);