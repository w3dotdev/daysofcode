import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';

import './shared-styles.js';
import './list.js';

class Page1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host { display: block; padding: 10px; }
      </style>

      <div class="box">
        <img src="[[imageUrl]]" />
        <paper-input always-float-label label="Nome" name="name" value="{{name}}"></paper-input>
        <paper-input always-float-label label="Imagem" name="image-url" value="{{imageUrl}}"></paper-input>
        <paper-button raised on-click="_save">Atualizar</paper-button>
        <paper-button raised on-click="_create">Criar</paper-button>
      </div>
      <nc-list selected="{{selected}}" db="[[db]]" name="{{name}}" image-url="{{imageUrl}}" selected-id="{{selectedId}}"></nc-list>
    `;
  }

  static get properties() {
    return {
      name: String,
      imageUrl: String,
      selectedId: { type:String, notify: true },
      selected: { type:Object, notify: true, observer:'_onSelected' },
      db: { type: Array, notify: true  },
    };
  }

  ready() {
    if( !this.selected ) {
      this.selected = this.db[this.db.length - 1];
    }

    this.name = this.selected.name;
    this.imageUrl = this.selected.imageUrl;
    this.selectedId = this.selected.id;

    super.ready();
  }

  _onSelected(){
    this.name = this.selected.name;
    this.imageUrl = this.selected.imageUrl;
  }

  _fixPersonal(){
    if(!this.name ) {
      this.name = "Sem nome";
    }

    if( !this.imageUrl ) {
      this.imageUrl = 'https://place-hold.it/400x200/ccc';
    }
  }

  _save(){
    this._fixPersonal();
    let i = this.db.indexOf( this.selected );
    this.set(`selected.name`, this.name );
    this.set(`selected.imageUrl`   , this.imageUrl );
    this.notifyPath(`db.${i}.name`  , this.name );
    this.notifyPath(`db.${i}.imageUrl`  , this.imageUrl );
  }

  _create(){
    this._fixPersonal();

    const obj = { id: this.db.length, name: this.name, imageUrl: this.imageUrl };
    this.unshift('db', obj);
    this.selected = obj;
    this.selectedId = obj.id;
  }
}

window.customElements.define('nc-page1', Page1);
