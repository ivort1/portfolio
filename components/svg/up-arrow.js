const svgUpArrowTemplate = document.createElement("template");
svgUpArrowTemplate.innerHTML =
`
    <style>
        #svg--up-arrow {
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

    <svg id="svg--up-arrow" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 240.835 240.835" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M129.007 57.819c-4.68-4.68-12.499-4.68-17.191 0L3.555 165.803c-4.74 4.74-4.74 12.427 0 17.155 4.74 4.74 12.439 4.74 17.179 0l99.683-99.406 99.671 99.418c4.752 4.74 12.439 4.74 17.191 0 4.74-4.74 4.74-12.427 0-17.155L129.007 57.819z" fill="currentColor" data-original="#000000" opacity="1" class=""></path></g></svg>
`;

class SvgUpArrow extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(svgUpArrowTemplate.content.cloneNode(true));
    }
}

customElements.define("svg-up-arrow", SvgUpArrow);