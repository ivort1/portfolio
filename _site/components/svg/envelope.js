const svgEnvelopeTemplate = document.createElement("template");
svgEnvelopeTemplate.innerHTML =
`
    <style>
        #svg--envelope {
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
    
    <svg id="svg--envelope" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m298.789 313.693c-12.738 8.492-27.534 12.981-42.789 12.981-15.254 0-30.05-4.489-42.788-12.981l-209.803-139.873c-1.164-.776-2.298-1.585-3.409-2.417v229.197c0 26.278 21.325 47.133 47.133 47.133h417.733c26.278 0 47.133-21.325 47.133-47.133v-229.198c-1.113.834-2.249 1.645-3.416 2.422z" fill="currentColor"/><path d="m20.05 148.858 209.803 139.874c7.942 5.295 17.044 7.942 26.146 7.942 9.103 0 18.206-2.648 26.148-7.942l209.803-139.874c12.555-8.365 20.05-22.365 20.05-37.475 0-25.981-21.137-47.117-47.117-47.117h-417.766c-25.98.001-47.117 21.137-47.117 47.142 0 15.085 7.496 29.085 20.05 37.45z" fill="currentColor"/></svg>
    
`;

class SvgEnvelope extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(svgEnvelopeTemplate.content.cloneNode(true));
    }
}

customElements.define("svg-envelope", SvgEnvelope);