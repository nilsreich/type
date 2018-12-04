import {LitElement, html, property} from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

// We are lazy loading its reducer.
import counter from '../reducers/counter.js';
store.addReducers({
  counter
});

class MyApp extends LitElement {

  // Public property API that triggers re-render (synced with attributes)
  @property()
  foo = 'foo';

  @property({type: Number})
  whales = 5;

  constructor() {
    super();
    this.addEventListener('click', async (e) => {
      this.whales++;
      await this.updateComplete;
      this.dispatchEvent(new CustomEvent('whales', {detail: {whales: this.whales}}))
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