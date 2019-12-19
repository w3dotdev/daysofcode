import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';

import './shared-styles.js';

class List extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host { display: block; padding: 10px; }
      </style>

      <div class="db-list">
        <paper-radio-group selected="{{selectedId}}">
          <template is="dom-repeat" items="[[db]]">
            <paper-radio-button name="[[item.id]]" >
              <span>[[item.name]]</span>
              <img src="[[item.imageUrl]]" />
            </paper-radio-button>
          </template>
        </paper-radio-group>
      </div>
    `;
  }

  static get properties() {
    return {
      selectedId: { type:String, observer: '_idChanged', notify: true },
      selected: { type:Object , notify: true },
      db: { type: Array },
    };
  }

  ready() {
    if( !this.selected ) {
      this.selected = this.db[this.db.length - 1];
    }

    super.ready();
  }

  _idChanged(id) {
    const obj = this.db.find(el=> el.id === id);
    Object.assign(this, obj);
    this.set('selected', obj);
  }
}

window.customElements.define('nc-list', List);
