define([
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/dom-construct'
], function(declare , lang, domConstruct){
  return declare(null, {
    cssClass: 'highlight',
    searchNode: null,
    cache: null,
    constructor: function(options){
      lang.mixin( this, options);
    },
    replaceHtml: function(searchText, replacement, searchNode){
      if (!searchText || typeof replacement === 'undefined') return;

      searchNode = searchNode || this.searchNode;

      if(this.cache === null){
        this.cache = lang.clone( searchNode );
      }

      const regex = typeof searchText === 'string' ? new RegExp(searchText, 'gi') : searchText;
      const childNodes = (searchNode || document.body).childNodes;
      const excludes = 'html,head,style,title,link,meta,script,object,iframe';
      let cnLength = childNodes.length;

      while (cnLength--) {
        const currentNode = childNodes[cnLength];

        if (currentNode.nodeType === 1 && (excludes + ',').indexOf(currentNode.nodeName.toLowerCase() + ',') === -1) {
          this.replaceHtml(searchText, replacement, currentNode);
        }
        if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
          continue;
        }

        const parent = currentNode.parentNode,
          frag = (function(){
            const html = currentNode.data.replace(regex, replacement);
            const wrap = document.createElement('div');
            const frag = document.createDocumentFragment();

            wrap.innerHTML = html;
            while (wrap.firstChild){
              frag.appendChild(wrap.firstChild);
            }
            return frag;
          })();
        parent.insertBefore(frag, currentNode);
        parent.removeChild(currentNode);
      }
    },
    clear: function(){
      if(this.cache){
        domConstruct.place( this.cache , this.searchNode, "after");
        domConstruct.destroy(this.searchNode);

        this.searchNode = this.cache;
        this.cache = null;
      }
    },
    cssHighlight: function(searchText){
      const me = this;

      this.replaceHtml(searchText , function(text) {
        return '<span class="'+me.cssClass+'">'+text+'</span>';
      });
    }
  });
});
