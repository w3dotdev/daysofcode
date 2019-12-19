import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import './shared-styles.js';

class Page2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host { display: block; padding: 10px; }
      </style>

      <div class="box">
        <h1>What is Lorem Ipsum?</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

        <h1>Why do we use it?</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .</p>
      </div>
    `;
  }
}

window.customElements.define('nc-page2', Page2);
