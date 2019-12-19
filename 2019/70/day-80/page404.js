import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class Page404 extends PolymerElement {
  static get template() {
    return html`
      <p>Página não encontrada. <a href="[[rootPath]]">Voltar para a página inicial.</a></p>
    `;
  }
}

window.customElements.define('nc-page404', Page404);
