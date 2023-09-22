const svgDocumentTemplate = document.createElement("template");
svgDocumentTemplate.innerHTML =
`
    <style>
        #svg--document {
            height: 1rem;
            transition: color ease-in-out 0.2s;
            width: 1rem;
        
            /* Flexbox */
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
    </style>
    
    <svg id="svg--document" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M106 512h300c24.814 0 45-20.186 45-45V150H346c-24.814 0-45-20.186-45-45V0H106C81.186 0 61 20.186 61 45v422c0 24.814 20.186 45 45 45zm60-301h180c8.291 0 15 6.709 15 15s-6.709 15-15 15H166c-8.291 0-15-6.709-15-15s6.709-15 15-15zm0 60h180c8.291 0 15 6.709 15 15s-6.709 15-15 15H166c-8.291 0-15-6.709-15-15s6.709-15 15-15zm0 60h180c8.291 0 15 6.709 15 15s-6.709 15-15 15H166c-8.291 0-15-6.709-15-15s6.709-15 15-15zm0 60h120c8.291 0 15 6.709 15 15s-6.709 15-15 15H166c-8.291 0-15-6.709-15-15s6.709-15 15-15z" fill="currentColor" data-original="#000000" opacity="1" class=""></path><path d="M346 120h96.211L331 8.789V105c0 8.276 6.724 15 15 15z" fill="currentColor" data-original="#000000" opacity="1" class=""></path></g></svg>    
`;

class SvgDocument extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(svgDocumentTemplate.content.cloneNode(true));
    }
}

customElements.define("svg-document", SvgDocument);