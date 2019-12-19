// Polymer Library - The Polymer library is our original web components library.
//
// https://polymer-library.polymer-project.org/
// npm install -g polymer-cli
// polymer serve --open
// http://127.0.0.1:8081
// build: polymer build --entrypoint index.html
//
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {setPassiveTouchGestures, setRootPath} from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/app-storage/app-localstorage/app-localstorage-document.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';

setPassiveTouchGestures(true);
setRootPath('/');

class NerdCalistenico extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host { --app-primary-color: #451d6d; --app-secondary-color: #fff; display: block; }

        app-header { background-color: var(--app-primary-color); color: #fff; padding: 0; }
        app-header paper-icon-button { --paper-icon-button-ink-color: #fff; }

        .drawer-list { display: flex; flex-direction: row; margin: 0 20px; }
        .drawer-list a { color: var(--app-secondary-color); display: block; font-size: 1.4rem; padding: 0 10px; text-decoration: none; }
        .drawer-list a.iron-selected { color: #ffeb54; font-weight: 700; }

        .selected{ text-align: right; }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>

      <app-localstorage-document key="db" data="{{db}}"></app-localstorage-document>

      <app-drawer-layout>
        <app-header-layout>
          <app-header reveals effects="waterfall">
            <app-toolbar class="toolbar">
              <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
                <a name="home" href="[[rootPath]]home">Home</a>
                <a name="page2" href="[[rootPath]]page2">Página 2</a>
              </iron-selector>
            </app-toolbar>
          </app-header>
          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <nc-page1 name="home" db="{{db}}" selected="{{selected}}"></nc-page1>
            <nc-page2 name="page2"></nc-page2>
            <nc-page404 name="page404"></nc-page404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
    }

    static get properties() {
      return {
        page: {
          type: String,
          reflectToAttribute: true,
          observer: '_pageChanged'
        },
        routeData: Object,
        subroute: Object,
        selected: Object,
        db: {
          type: Array,
          value: [
            {
              id: 1,
              name: 'Nome 1',
              imageUrl: 'https://place-hold.it/400x200/f00'
            },
            {
              id: 2,
              name: 'Nome 2',
              imageUrl: 'https://place-hold.it/400x200/ff0'
            }
          ]
        }
      };
    }

    static get observers() {
      return [
        '_routePageChanged(routeData.page)'
      ];
    }

    _routePageChanged(page) {
      if (!page) {
        this.page = 'home';
      } else if (['home', 'page2'].indexOf(page) !== -1) {
        if(!this.selected && page!== 'home') {
          return this.set('routeData.page','home');
        }

        this.page = page;
      } else {
        this.page = 'page404';
      }

      if (!this.$.drawer.persistent) {
        this.$.drawer.close();
      }
    }

    _pageChanged(page) {
      switch (page) {
        case 'home':
          import('./page1.js');
          break;
        case 'page2':
          import('./page2.js');
          break;
        case 'page404':
          import('./page404.js');
          break;
      }
    }
}

window.customElements.define('nerd-calistenico', NerdCalistenico);
