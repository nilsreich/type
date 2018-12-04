import { LitElement, html, property } from '@polymer/lit-element';
import { printLabel } from './my-math';


class MyApp extends LitElement {

    // Public property API that triggers re-render (synced with attributes)
    @property()
    foo = 'foo';

    @property({ type: Number })
    whales = 5;

    constructor() {
        super();
        let myObj = { a: 10, label: 3 };
        printLabel(myObj);
        this.addEventListener('click', async (e) => {
            e=e;
            this.whales++;
            await this.updateComplete;
            this.dispatchEvent(new CustomEvent('whales', { detail: { whales: this.whales } }))
        });
    }

    // Render method should return a `TemplateResult` using the provided lit-html `html` tag function
    render() {
        return html`
      <style>
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
      </style>
      <h4>Foo: ${this.foo}</h4>
      <div>Wale: ${'🐳'.repeat(this.whales)}</div>
      <slot></slot>
    `;
    }

}
customElements.define('my-app', MyApp);