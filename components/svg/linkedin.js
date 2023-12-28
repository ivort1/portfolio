const svgLinkedInTemplate = document.createElement("template");
svgLinkedInTemplate.innerHTML =
`
    <style>
        #svg--linkedin {
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

    <svg id="svg--linkedin" enable-background="new 0 0 100 100" height="512" viewBox="0 0 100 100" width="512" xmlns="http://www.w3.org/2000/svg"><g id="_x31_0.Linkedin"><path d="m90 90v-29.3c0-14.4-3.1-25.4-19.9-25.4-8.1 0-13.5 4.4-15.7 8.6h-.2v-7.3h-15.9v53.4h16.6v-26.5c0-7 1.3-13.7 9.9-13.7 8.5 0 8.6 7.9 8.6 14.1v26h16.6z" fill="currentColor"></path><path d="m11.3 36.6h16.6v53.4h-16.6z" fill="currentColor"></path><path d="m19.6 10c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.7 9.6 9.7 9.6-4.4 9.6-9.7-4.3-9.6-9.6-9.6z" fill="currentColor"></path></g></svg>   
`
class SvgLinkedIn extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(svgLinkedInTemplate.content.cloneNode(true));
    }
}

customElements.define("svg-linkedin", SvgLinkedIn);