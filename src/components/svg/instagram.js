const svgInstagramTemplate = document.createElement("template");
svgInstagramTemplate.innerHTML =
`
    <style>
        #svg-instagram {
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

    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg
    version="1.1"
    id="svg-instagram"
    xml:space="preserve"
    width="682.66669"
    height="682.66669"
    viewBox="0 0 682.66669 682.66669"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"><defs
        id="defs172"><clipPath
        clipPathUnits="userSpaceOnUse"
        id="clipPath182"><path
            d="M 0,512 H 512 V 0 H 0 Z"
            id="path180" /></clipPath></defs><g
        id="g174"
        transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g
        id="g176"><g
            id="g178"
            clip-path="url(#clipPath182)"><g
            id="g184"
            transform="translate(491.9902,256)"><path
                d="m 0,0 c -0.05,-21.046 -0.288,-42.093 -0.576,-63.138 -0.348,-25.391 -0.74,-50.793 -7.108,-75.749 -6.677,-26.17 -19.847,-48.74 -40.337,-65.449 -21.592,-17.608 -47.69,-26.863 -75.858,-28.576 -37.36,-2.272 -74.736,-3.17 -112.111,-3.082 -37.376,-0.088 -74.752,0.81 -112.111,3.082 -28.168,1.713 -54.266,10.968 -75.858,28.576 -20.49,16.709 -33.66,39.279 -40.338,65.449 -6.368,24.956 -6.76,50.358 -7.107,75.749 -0.288,21.045 -0.527,42.092 -0.576,63.138 0.049,21.046 0.288,42.093 0.576,63.138 0.347,25.391 0.739,50.793 7.107,75.749 6.678,26.17 19.848,48.74 40.338,65.449 21.592,17.608 47.69,26.863 75.858,28.576 37.359,2.272 74.735,3.17 112.111,3.082 37.375,0.088 74.751,-0.81 112.111,-3.082 28.168,-1.713 54.266,-10.968 75.858,-28.576 20.49,-16.709 33.66,-39.279 40.337,-65.449 6.368,-24.956 6.76,-50.358 7.108,-75.749 C -0.288,42.093 -0.05,21.046 0,0 Z"
                style="fill:currentColor;stroke:currentColor;stroke-width:40;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path186" /></g><g
            id="g188"
            transform="translate(360,256)"><path
                d="m 0,0 c 0,-57.99 -47.01,-105 -105,-105 -57.99,0 -105,47.01 -105,105 0,57.99 47.01,105 105,105 C -47.01,105 0,57.99 0,0 Z"
                style="fill:currentColor;stroke:currentColor;stroke-width:40;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path190" /></g><g
            id="g192"
            transform="translate(424,391)"><path
                d="m 0,0 c 0,-16.568 -13.432,-30 -30,-30 -16.568,0 -30,13.432 -30,30 0,16.568 13.432,30 30,30 C -13.432,30 0,16.568 0,0"
                style="fill:#00currentColor;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path194" /></g></g></g></g></svg>
`;

class SvgInstagram extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(svgInstagramTemplate.content.cloneNode(true));
    }
}

customElements.define("svg-instagram", SvgInstagram);