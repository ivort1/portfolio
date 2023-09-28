class Post extends HTMLElement {
    constructor() {
        super();
        this.id = "blog-post";

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadow.append(detailsTemplate.content.cloneNode(true));
    }
    
    connectedCallback() {
        this.fetchMarkdownFile();
    }

    fetchMarkdownFile() {
        const file_name = this.getAttribute("file_name");

        fetch(`/blog/projects/${file_name}.md`)
            .then(response => response.text())
            .then(text => {
                const template = document.createElement('template');
                template.innerHTML = marked.parse(text);
                this.shadowRoot.appendChild(document.importNode(template.content, true));
                console.log(marked.parse("# Hello World"));

            });
    }
}

customElements.define("blog-post", Post);