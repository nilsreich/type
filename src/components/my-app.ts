import { LitElement, html, property } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';


// We are lazy loading its reducer.
import counter from '../reducers/counter.js';
store.addReducers({
  counter
});

// These are the actions needed by this element.
import { increment, decrement } from '../actions/counter.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

import {Button} from '@material/mwc-button';


class MyApp extends connect(store)(LitElement) {

    // Public property API that triggers re-render (synced with attributes)
    @property()
    foo = 'foo';

    @property({ type: Number })
    whales = 5;

    constructor() {
        super();
/*         this.addEventListener('click', async (e) => {
            e=e;
            this.whales++;
            this._counterIncremented();
            await this.updateComplete;
            this.dispatchEvent(new CustomEvent('whales', { detail: { whales: this.whales } }))
        }); */
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
      <mwc-button label="UP" @click="${(event : any) => this.hoch(event)}"></mwc-button>
      <mwc-button label="DOWN" @click="${(event : any) => this.down(event)}"></mwc-button>      <slot></slot>
    `;
    }

    async hoch(event: any) {
      this.whales++;
      store.dispatch(increment());
      await this.updateComplete;
      this.dispatchEvent(new CustomEvent('whales', { detail: { whales: this.whales } }))
    }

    check(){
      Button;
    }

    async down(event: any) {
      this.whales--;
      store.dispatch(decrement());
      await this.updateComplete;
      this.dispatchEvent(new CustomEvent('whales', { detail: { whales: this.whales } }))
    }

}
customElements.define('my-app', MyApp);