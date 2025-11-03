class CombinedCounter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        const title = this.getAttribute('title') || 'Lorem Ipsum Title';
        const value = parseInt(this.getAttribute('value')) || 0;
        
        this.shadowRoot.innerHTML = `
            <style>
                .wrapper {
                    border: 1px solid #000;
                    padding: 1px;
                    width: 180px;
                    font-family: sans-serif;
                }
            </style>
            <div class="wrapper">
                <counter-display title="${title}" value="${value}"></counter-display>
                <counter-controls></counter-controls>
            </div>
        `;
    }
    
    connectedCallback() {
        // Tunggu sebentar biar child elements udah ter-render
        setTimeout(() => {
            const display = this.shadowRoot.querySelector('counter-display');
            const controls = this.shadowRoot.querySelector('counter-controls');
            
            if (display && controls) {
                controls.addEventListener('count-change', e => {
                    display.count += e.detail.delta;
                });
            }
        }, 0);
    }
}

customElements.define('combined-counter', CombinedCounter);
