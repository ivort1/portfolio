const svgRightArrowTemplate = document.createElement("template");
svgRightArrowTemplate.innerHTML =
`
    <style>
        #svg--right-arrow {
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

    <svg id="svg--right-arrow" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z" fill="currentColor" data-original="#000000" opacity="1" class=""></path></g></svg>
`;

class SvgRightArrow extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(svgRightArrowTemplate.content.cloneNode(true));
    }
}

customElements.define("svg-right-arrow", SvgRightArrow);