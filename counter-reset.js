class CounterReset extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    background-color: #ff6b6b;
                    color: white;
                    border: 1px solid #000;
                    padding: 5px 15px;
                    font-size: 0.9rem;
                    cursor: pointer;
                    font-family: sans-serif;
                    margin-top: 5px;
                }
                button:hover {
                    background-color: #ff5252;
                }
            </style>
            <button id="reset">Reset</button>
        `;
    }
    
    connectedCallback() {
        this.shadowRoot.getElementById('reset')
            .addEventListener('click', () => this.emitReset());
    }
    
    emitReset() {
        this.dispatchEvent(new CustomEvent('counter-reset', {
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define('counter-reset', CounterReset);
