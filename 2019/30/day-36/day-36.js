const list = [];
let listName;

const inpListName = document.querySelector('[data-js="listName"]');
const inpAddItem = document.querySelector('[data-js="addItem"]');

const buttonSave = document.querySelector('[data-js="save"]');
const buttonDelete = document.querySelector('[data-js="delete"]');

const content = document.querySelector('.content');

inpListName.addEventListener('keypress', evt => {
  if (evt.which == 13) { // enter
    listName = evt.target.value;
    localStorage.setItem("listName", listName);
  }
});

inpAddItem.addEventListener('keypress', evt => {
  if (evt.which == 13) { // enter
    list.push(evt.target.value);

    console.log(list);

    const item = document.createElement('div');
    item.setAttribute('class', 'item');
    item.innerHTML = evt.target.value;
    content.appendChild(item);

    evt.target.value = '';
  }
});

buttonSave.addEventListener("click", () => {
  localStorage.setItem("list", list.join(','));
  localStorage.setItem("listName", listName);
});

buttonDelete.addEventListener('click', () => {
  localStorage.clear();
  inpListName.setAttribute('value', '');
  content.innerHTML = '';
});

// load
if(localStorage.getItem("list")) {
  const retrieve = localStorage.getItem("list").split(',');
  inpListName.setAttribute('value', localStorage.getItem("listName"));

  for (let i = 0; i < retrieve.length; i++) {
    const child = document.createElement('div');
    child.setAttribute('class', 'item');
    child.innerHTML = `${retrieve[i]}`;
    content.appendChild(child);
  }
}
