// mustache.js - Logic-less {{mustache}} templates with JavaScript
// https://mustache.github.io/
// https://github.com/janl/mustache.js

const colorScheme = [
  '#540d6e',
  '#ee4266',
  '#ffd23f',
  "#3bceac",
  "#0ead69",
  "#335c67",
  "#fff3B0",
  "#e09f3e",
  "#9e2a2b",
  "#540b0e"
];

const random = (max = 1, min = 0) => min + Math.floor(Math.random() * (max - min + 1));

const removeItem = index => {
  main.querySelectorAll('[data-js="delete"]')[index].addEventListener('click', evt => {
    const el = evt.target.closest('.item');
    el.parentNode.removeChild(el);
  });
};

const addItem = (main, template) => {
  const color = colorScheme[random(colorScheme.length - 1)];
  const num = random(30);
  const html = Mustache.render(template, { color, num });

  main.insertAdjacentHTML('beforeend', html);

  const count = document.querySelectorAll('.item').length;
  removeItem(count-1);
}

const tmpl = document.querySelector('[data-js="template"]').innerHTML;
const main = document.querySelector('[data-js="main"]');

for(let i = 0; i < 5; i++) {
  addItem(main, tmpl);
}

document.querySelector('[data-js="add"]').addEventListener('click', () => {
  addItem(main, tmpl);
});
