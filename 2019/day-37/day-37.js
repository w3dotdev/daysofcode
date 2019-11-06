// splice and slice
const original = document.querySelector('[data-js="original"]');
const original2 = document.querySelector('[data-js="original2"]');
const splice = document.querySelector('[data-js="splice"]');
const slice = document.querySelector('[data-js="slice"]');

const colors = ['fff', 'fc0', 'f00', '02d', 'dfc'];
const colors2 = [...colors];

const getCar = (color='fff', index) => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 800 360" fill="#${color}" width="85">
      <path d="M203.69 280.766c0 32.714-26.52 59.234-59.234 59.234s-59.234-26.52-59.234-59.234 26.52-59.234 59.234-59.234c32.713 0 59.233 26.52 59.233 59.234z"/>
      <path d="M333.426 54.557c3.154-3.652 6.748-6.79 13.383-6.382h286.554L775.78 161.253c1.571 3.322 2.366 5.867 2.765 8.016l.541 100.203c-2.647 5.744-5.76 10.647-11.315 11.158h-33.054c0-97.968-144.833-98.168-144.833 0H217.772c0-97.588-145.935-97.962-145.935 0H31.515c-3.438-1.608-6.531-.112-11.074-11.661L20 196.91c2.345-6.556 5.27-9.054 8.187-11.598l209.458-34.796 95.78-95.96z" fill-rule="evenodd"/>
      <path d="M720.924 280.741c0 32.714-26.52 59.234-59.234 59.234-32.713 0-59.233-26.52-59.233-59.234s26.52-59.234 59.233-59.234c32.714 0 59.234 26.52 59.234 59.234z"/>
      <path d="M668.162 142.812l-61.168-61.603c-1.61-1.367-2.876-3.25-5.673-2.836H494.544v86.268h181.978c8.612-1.717-2.72-13.335-8.36-21.83zM266.99 151.629l71.378-70.432c1.61-1.368 2.875-3.251 5.673-2.837h126.92v86.268H272.427c-7.558-2.98-8.58-7.5-5.436-12.999z" fill="#000" fill-rule="evenodd"/>
      <text x="400" y="270" fill="#000" font-size="120">${index}</text>
    </svg>`;
}

const getCars = (list, text) => list.map((color, index) => getCar(color, text ? index : '')).join('') ;

const sliced = colors.slice(1, 3);
const spliced = colors2.splice(3, 1, 'a52596');

original.innerHTML = getCars(colors, true);
slice.innerHTML = getCars(sliced);

original2.innerHTML = getCars(colors2, true);
splice.innerHTML = getCars(spliced);

// toString and join
const toStringAndJoin = document.querySelector('[data-js="toStringAndJoin"]');
const fruits = ['apple', 'banana'];

console.log(fruits);
console.log(fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.join('/'));
console.log(fruits.join());

toStringAndJoin.innerHTML = fruits.join(' - ');
