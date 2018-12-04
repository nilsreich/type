var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { Button } from '@material/mwc-button';
class MyApp extends connect(store)(LitElement) {
    constructor() {
        super();
        // Public property API that triggers re-render (synced with attributes)
        this.foo = 'foo';
        this.whales = 5;
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
        return html `
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
      <mwc-button label="UP" @click="${(event) => this.hoch(event)}"></mwc-button>
      <mwc-button label="DOWN" @click="${(event) => this.down(event)}"></mwc-button>      <slot></slot>
    `;
    }
    async hoch(event) {
        this.whales++;
        store.dispatch(increment());
        await this.updateComplete;
        this.dispatchEvent(new CustomEvent('whales', { detail: { whales: this.whales } }));
    }
    check() {
        Button;
    }
    async down(event) {
        this.whales--;
        store.dispatch(decrement());
        await this.updateComplete;
        this.dispatchEvent(new CustomEvent('whales', { detail: { whales: this.whales } }));
    }
}
__decorate([
    property()
], MyApp.prototype, "foo", void 0);
__decorate([
    property({ type: Number })
], MyApp.prototype, "whales", void 0);
customElements.define('my-app', MyApp);
