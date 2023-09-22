const svgEmailTemplate = document.createElement("template");
svgEmailTemplate.innerHTML =
`
    <style>
        #svg--email {
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
    
    <svg id="svg--email" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M298.789 313.693c-12.738 8.492-27.534 12.981-42.789 12.981-15.254 0-30.05-4.489-42.788-12.981L3.409 173.82A76.269 76.269 0 0 1 0 171.403V400.6c0 26.278 21.325 47.133 47.133 47.133h417.733c26.278 0 47.133-21.325 47.133-47.133V171.402a75.21 75.21 0 0 1-3.416 2.422z" fill="currentColor" data-original="#000000" opacity="1" class=""></path><path d="m20.05 148.858 209.803 139.874c7.942 5.295 17.044 7.942 26.146 7.942 9.103 0 18.206-2.648 26.148-7.942L491.95 148.858c12.555-8.365 20.05-22.365 20.05-37.475 0-25.981-21.137-47.117-47.117-47.117H47.117C21.137 64.267 0 85.403 0 111.408a44.912 44.912 0 0 0 20.05 37.45z" fill="currentColor" data-original="#000000" opacity="1" class=""></path></g></svg>
`;

class SvgEmail extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(svgEmailTemplate.content.cloneNode(true));
    }
}

customElements.define("svg-email", SvgEmail);