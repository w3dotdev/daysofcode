// PouchDB is an open-source JavaScript database inspired by Apache CouchDB that is designed to run well within the browser.
// https://pouchdb.com/
//
class Notes {
  constructor(databasename, remoteorigin){
    this.pdb = new PouchDB(databasename);
    this.remote = remoteorigin + "/" + databasename;

    this.pdb.info().then(result => {
      if(result.doc_count === 0) {
        this.pdb.put({_id: "1576718059329", title: 'Titulo 1', note: "Nota 1", modified: 1576718697977});
      }

      this.getData();
    });

    this.$deleteButton = document.querySelector('[data-js="delete"]');
    this.$form = document.querySelector('[data-js="form"]');
    this.$list = document.querySelector('[data-js="list"]');
    this.$searchForm = document.querySelector('[data-js="searchForm"]');

    this.handleReset = this.handleReset.bind(this);

    this.handlers();
  }

  handlers() {
    this.$searchForm.addEventListener('submit', evt => {
      evt.preventDefault();
      this.search();
    });

    this.$form.addEventListener('submit', evt => {
      evt.preventDefault();
      this.handleSave();
    });

    this.$form.addEventListener('reset', evt => {
      evt.preventDefault();
      this.handleReset();
    });

    this.$deleteButton.addEventListener('click', evt => {
      this.handleDelete(+evt.target.form._id.value);
      this.handleReset();
    });

    window.addEventListener('hashchange', evt => {
      if (window.location.hash.replace(/#/, '')) {
        const noteid = window.location.hash.match(/\d/g).join('');
        this.handleEdit(noteid);
        this.$deleteButton.removeAttribute('disabled');
      }
    });
  }

  getData(start, end) {
    const df = document.createDocumentFragment();
    const options = { include_docs: true };
    const body = this.$list.querySelector('tbody');

    if (start) {
      options.startkey = start;
    }

    if (end) {
      options.endkey = end;
    }

    this.pdb.allDocs(options, (error, response) => {
      const row = response.rows.map(this.addRow, this);

      row.map(item => {
        if (item) {
          df.appendChild(item);
        }
      });

      let i = body.childNodes.length;
      while (i--) {
        body.removeChild(body.childNodes.item(i));
      }

      body.appendChild(df);
    });

    this.resetHash();
  }

  handleReset() {
    this.$form.reset();
    this.$searchForm.reset();

    this.$form._id.value = '';
    this.$form._rev.value = '';
    this.$form.title.value = '';
    this.$form.note.value = '';

    this.$deleteButton.setAttribute('disabled', 'disabled');

    this.resetHash();
  }

  getTime(timestamp) {
    const ts = new Date(+timestamp);
    let time = [];

    time[0] = ts.getHours();
    time[1] = ('0' + ts.getMinutes()).substr(-2);

    return ' @ ' + time.join(':');
  }

  getDate(timestamp) {
    const d = [];
    const date = new Date(timestamp);

    d[0] = date.getFullYear();
    d[1] = ('0' + (date.getMonth() + 1)).substr(-2);
    d[2] = ('0' + date.getDate()).substr(-2);

    return d.join('-');
  }

  resetHash() {
    window.location.hash = '';
  }

  handleSave() {
    const note = {
      title: this.$form.title.value === '' ? 'Sem título' : this.$form.title.value,
      note: this.$form.note.value === '' ? '' : this.$form.note.value,
      modified: new Date().getTime()
    };
    const id = this.$form._id.value;

    note._id = id ? id : `${new Date().getTime()}`;

    if (this.$form._rev.value) {
      note._rev = this.$form._rev.value;
    }

    this.pdb.put(note, (error, response) => {
      if (response && response.ok) {
        this.getData();
        this.$form.reset();
      }
    });

    this.resetHash();
  }

  handleEdit(id) {
    this.pdb.get(id, {}, (error, response) => {
      const fields = Object.keys(response);
      if (!error) {
        fields.map(item => {
          if (this.$form[item] !== undefined) {
            this.$form[item].value = response[item];
          }
        });
      }
    });
  }

  handleDelete(id) {
    this.pdb.get(`${id}`, (error, doc) => {
      this.pdb.remove(doc);
      this.getData();
    });
  }

  search() {
    const loop = doc => {
      const searchkey = document.querySelector('[data-js="query"]').value.replace(/[$-\/?[-^{|}]/g, '\\$&').toLowerCase();
      const regex = new RegExp(searchkey, 'i');

      if (regex.test(doc.title.toLowerCase()) || regex.test(doc.note.toLowerCase())) {
        emit(doc._id, {
          title: doc.title,
          id: doc._id,
          modified: doc.modified
        });
      }
    }

    this.pdb.query(loop, (error, response) => {
      if (response) {
        const df = document.createDocumentFragment();
        const body = this.$list.getElementsByTagName('tbody')[0];
        const results = response.rows.map(item => {
          item.doc = item.value;
          delete item.value;
          return item;
        });
        const rows = results.map(this.addRow, this);

        rows.map(item => {
          if (item) {
            df.appendChild(item);
          }
        });

        body.innerHTML = '';
        body.appendChild(df);
      }
    });
  }

  addRow(obj) {
    const link = document.createElement('a');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    let created;
    let updated;

    link.href = `#/view/${obj.id}`;
    link.innerHTML = obj.doc.title === undefined ? 'Sem Título' : obj.doc.title;
    td.appendChild(link);
    tr.appendChild(td);

    created = td.cloneNode(false);
    created.innerHTML = this.getDate(+obj.id) + this.getTime(+obj.id);

    updated = created.cloneNode();
    updated.innerHTML = obj.doc.modified ? this.getDate(+obj.doc.modified) + this.getTime(+obj.doc.modified) : this.getDate(+obj.id) + this.getTime(+obj.id);

    tr.appendChild(created);
    tr.appendChild(updated);

    return tr;
  }
}

new Notes('example');
