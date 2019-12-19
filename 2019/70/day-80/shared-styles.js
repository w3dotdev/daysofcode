import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .box { background-color: #fff; border-radius: 4px; color: #333; padding: 10px; }
      .title { color: #333; font-size: 22px; margin: 15px 0; }

      paper-radio-button { --layout-inline_-_display:none }
      paper-radio-button[checked] { box-shadow: inset 0 0 1rem purple; }
      paper-radio-button img { display: block }
      paper-radio-button span { color: #fff; display: block; }
      paper-radio-button div { margin: 0; padding: 0; }

      .db-list { text-align: center }

      img { max-width: 12rem; max-height: 12rem; }
      .box img { border-radius: 4px; border: 1px solid #000; position: absolute; top: 50px; right: 20px; }

      label { display: inline-block }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
