// Dojo Toolkit - A JavaScript toolkit that saves you time and scales with your development process.
// Provides everything you need to build a Web app. Language utilities, UI components, and more, all in one place, designed to work together perfectly.
// https://dojotoolkit.org/ v1.16
//
// Dojo is a progressive framework for modern web applications built with TypeScript.
// https://dojo.io/ v6
//
require([
  'dojo/dom',
  'dojo/query',
  'dojo/keys',
  './highlight.js'
], (dom, query, keys, HighlightString) => {

  const _replace = new HighlightString({
    cssClass: 'result',
    searchNode: dom.byId('text')
  });

  query('[data-js="button"]').on("click", () => {
    _replace.clear();
    const _searchValue = query('[data-js="input"]').attr("value")[0];
    _replace.cssHighlight( _searchValue );
  });

  query('[data-js="input"]').on("keypress", evt => {
    const charOrCode = evt.charCode || evt.keyCode;

    if(keys.ENTER === charOrCode || keys.NUMPAD_ENTER === charOrCode){
      evt.preventDefault();
      _replace.clear();
      const _searchValue = query('[data-js="input"]').attr("value")[0];
      _replace.cssHighlight( _searchValue );
    }
  });
});
