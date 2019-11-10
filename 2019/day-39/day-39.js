const main = document.querySelector('[data-js="main"]');
const originalButton = document.querySelector('[data-js="original"]');
const sortButton = document.querySelector('[data-js="sort"]');
const reverseButton = document.querySelector('[data-js="reverse"]');

const north = ["AC","AM","AP","RO","RR","PA","TO"];
const northeast = ["PI","MA","CE","RN","PB","PE","SE","AL","BA"];
const midwest = ["MS","MT","GO","DF"];
const southeast = ["SP","RJ","ES","MG"];
const south = ["PR","SC","RS"];

const original = north.concat(northeast, midwest, southeast, south);
let states = [...original];

const renderList = (states, method) => {
  let html = '';

  switch(method) {
    case 'sort':
      // ascending order
      states.sort();
      // This doesn't work when the data we wish to sort using is deep inside a property of the array object, and not the array itself.
      // const example = [{ name: 'Hemerson', name: 'Nerd' }];
      // example.sort((param1, param2) => {
      //  const a = param1.name.toLowerCase(), b = param2.name.toLowerCase();
      //  return a > b ? 1 : b > a ? -1 : 0;
      // });
      break;
    case 'reverse':
      states.reverse();
      break;
    default:
      break;
  }

  states.forEach((element, index, array) => {
    if(index === 0) { html += '<ul class="list">'}

    html += `<li class="item ${element.toLowerCase()}">${element}</li>`;

    if(index === array.length) { html += '</ul>'  }
  });

  main.innerHTML = html;
};

renderList(original);

originalButton.addEventListener('click', () => {
  states = [...original];
  renderList(original);
});

sortButton.addEventListener('click', () => {
  renderList(states, 'sort');
});

reverseButton.addEventListener('click', () => {
  renderList(states, 'reverse');
});

// extra
const extra = [12, 1, 10, 20];
const asc = [...extra];
const desc = [...extra];

asc.sort((a, b) => a - b);
desc.sort((a, b) => b - a );

console.log(asc); // [1, 10, 12, 20]
console.log(desc); // [20, 12, 10, 1]
