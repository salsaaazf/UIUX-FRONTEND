class CounterWithReset extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this.title = this.getAttribute('title') || 'Lorem Ipsum Title';
        this.initialValue = parseInt(this.getAttribute('value')) || 0;
        
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
                <counter-display title="${this.title}" value="${this.initialValue}"></counter-display>
                <counter-controls></counter-controls>
                <counter-reset></counter-reset>
            </div>
        `;
    }
    
    connectedCallback() {
        setTimeout(() => {
            const display = this.shadowRoot.querySelector('counter-display');
            const controls = this.shadowRoot.querySelector('counter-controls');
            const resetBtn = this.shadowRoot.querySelector('counter-reset');
            
            if (display && controls && resetBtn) {
                // Handle increment/decrement
                controls.addEventListener('count-change', e => {
                    display.count += e.detail.delta;
                });
                
                // Handle reset - balik ke 0
                resetBtn.addEventListener('counter-reset', () => {
                    display.count = 0;
                });
            }
        }, 0);
    }
}

customElements.define('counter-with-reset', CounterWithReset);
