// Ext JS - Ext JS provides the industry's most comprehensive collection of high-performance, customizable UI widgets
// - including HTML5 grids, trees, lists, forms, menus, toolbars, panels, windows, and much more.
//
// https://docs.sencha.com/extjs/7.0.0/index.html
// 
// https://docs.sencha.com/extjs/6.2.0/index.html
//
const box1 = {
  title: 'Box 2',
  titleAlign: 'center',
  margin: '10 0 0 0',
  data: { id: '123456', name: 'Hemerson Vianna', age: 33  },
  tpl: ['<h4>ID: {id}</h4>', '<h4>Nome: {name}</h4>', '<h4>Idade: {age}</h4>'],
  cls: 'box',
  style: { color: '#fff' },
  bodyStyle: { 'background-color': '#fff', padding: '10px' },
  flex: 1
};

const component1 = Ext.create('Ext.Component', {
  html: '<img src="https://place-hold.it/600x80/ccc" />'
});

const component2 = Ext.create('Ext.Component', {
  html: `
    <h1 class="title">What is Lorem Ipsum?</h1>
    <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <p class="text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <p class="text">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    <p class="text">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  `,
  padding: '20 10'
});

const form = Ext.create('Ext.form.Panel', {
  items: [{
    title: 'Fomrulário',
    bodyPadding: '10 15 0 10',
    layout: { type: 'vbox' },
    items: [{
        xtype: 'textfield',
        name: 'name',
        fieldLabel: 'Nome',
        allowBlank: false,
        cls: 'form-field'
      },{
      xtype: 'container',
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      items: [{
        layout: 'column',
        margin: '5 0 5 0',
        border: false,
        items: [{
          xtype: 'textfield',
          name: 'email',
          fieldLabel: 'Email',
          allowBlank: false,
          cls: 'form-field'
        }, {
          xtype: 'box',
          html: '@gmail.com',
          cls: 'suffix'
        }]
      }]
    }],
    buttons: [{
      text: 'Salvar',
      formBind: true,
      listeners: {
        click: function(btn){
          var formpanel = btn.up('form');
          var  form = formpanel.getForm();
          form.submit();
        }
      }
    }]
  }]
});

const item1 = {
  title: 'Item 1',
  border: false,
  cls: 'item',
  items: [
    component2
  ]
};

const item2 = {
  title: 'Item 2',
  border: false,
  cls: 'item',
  items: [
    form
  ],
};

const item3 = {
  title: 'Item 3',
  border: false,
  cls: 'item',
  layout: 'hbox',
  items: [
    box1,
    box1,
    box1
  ],
};

Ext.application({
  name: 'Day 78',
  launch: function() {
    const panel = Ext.create('Ext.tab.Panel', {
      title: 'Aplicação',
      titleAlign: 'center',
      align: 'stretch',
      height: 400,
      width: 600,
      cls: 'panel',
      tabBar: true,
      tabPosition: 'top',
      items: [
        item1,
        item2,
        item3
      ]
    });

    const tree = Ext.create('Ext.tree.Panel', {
      title: 'Árvore',
      width: 600,
      height: 200,
      root: {
        text: 'raiz',
        expanded: true,
        children: [
          { text: 'item 1', leaf: true },
          { text: 'item 2', leaf: true },
          { text: 'item 3', expanded: true, children: [{ text: 'subitem', leaf: true }] }
        ]
      }
    });

    Ext.create('Ext.container.Container', {
      renderTo: Ext.fly(document).query('.container'),
      title: 'Aplicação',
      border: false,
      cls: 'main',
      items: [component1, panel, tree]
    });
  }
});