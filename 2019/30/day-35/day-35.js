const firstLession = document.querySelector('[data-js="firstLession"]');

const pushButton = document.querySelector('[data-js="push"]');
const popButton = document.querySelector('[data-js="pop"]');
const shiftButton = document.querySelector('[data-js="shift"]');
const unshiftButton = document.querySelector('[data-js="unshift"]');
const items = ['shirt', 'pants', 'shoes'];
const hasJacket = items => items.includes('jacket');
const setHTML = items => firstLession.innerHTML = `${items.join(' - ')} <span class="${hasJacket(items) ? 'on': 'off'}">${hasJacket(items) ? 'Jacket ON' : 'Jacket OFF'}</span>`;

pushButton.addEventListener("click", () => {
  if(!hasJacket(items)) { items.push('jacket'); setHTML(items); }
});
popButton.addEventListener("click", () => {
  if(items[items.length-1] === 'jacket') { items.pop(); setHTML(items); }
});
unshiftButton.addEventListener("click", () => {
  if(!hasJacket(items)) { items.unshift('jacket'); setHTML(items); }
});
shiftButton.addEventListener("click", () => {
  if(items[0] === 'jacket') { items.shift(); setHTML(items); }
});

setHTML(items);

const row0 = document.querySelector('[data-js="row-0"]');
const row1 = document.querySelector('[data-js="row-1"]');
const row2 = document.querySelector('[data-js="row-2"]');
const row3 = document.querySelector('[data-js="row-3"]');
const row4 = document.querySelector('[data-js="row-4"]');

const balls = ['1', '2', '3'];

const balls1 = [...balls];
const getReturn1 = balls1.pop();

const balls2 = [...balls];
const getReturn2 = balls2.push('4');

const balls3 = [...balls];
const getReturn3 = balls3.shift();

const balls4 = [...balls];
const getReturn4 = balls4.unshift('0');

row0.innerHTML = `
  <div class="balls">${balls.map(ball => `<div class="ball">${ball}</div>`).join('')}</div>
  <span class="return">Array</span>
`;
row1.innerHTML = `
  <div class="balls">${balls1.map(ball => `<div class="ball">${ball}</div>`).join('')}</div>
  <span class="return">POP - returns the removed item (last): ${getReturn1}</span>
`;
row2.innerHTML = `
  <div class="balls">${balls2.map(ball => `<div class="ball">${ball}</div>`).join('')}</div>
  <span class="return">PUSH - returns the new array length: ${getReturn2}</span>
`;
row3.innerHTML = `
  <div class="balls">${balls3.map(ball => `<div class="ball">${ball}</div>`).join('')}</div>
  <span class="return">SHIFT - returns the removed item (first): ${getReturn3}</span>
`;
row4.innerHTML = `
  <div class="balls">${balls4.map(ball => `<div class="ball">${ball}</div>`).join('')}</div>
  <span class="return">UNSHIFT - returns the new array length: ${getReturn4}</span>
`;
