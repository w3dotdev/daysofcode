const players = [
  {name: 'Name 1', age: 18, score: 0, status: 0},
  {name: 'Name 2', age: 10, score: 30, status: 1},
  {name: 'Name 3', age: 15, score: 0, status: 1},
  {name: 'Name 4', age: 15, score: 40, status: 0}
];

const names = players.map(item => item.name);
const scores = players.map(item => item.score);

// Includes
const includes = names.includes('Name 2');
console.log(`Name 2 is ${includes ? `included` : `not included` }`);
// Name 2 is included

// IndexOf
const indexOf = scores.indexOf(0);
console.log(`Position ${indexOf}`, players[indexOf]);
// Position 0 {id: 1, name: "Name 1", age: 18, score: 0, status: 0}

// LastIndexOf
const lastIndexOf = scores.lastIndexOf(0);
console.log(`Position ${lastIndexOf}`, players[lastIndexOf]);
// Position 2 {id: 3, name: "Name 3", age: 15, score: 0, status: 1}

// Find
const find = players.find(item => item.status === 1);
console.log(`First item found:`, find);
// First item found: {id: 2, name: "Name 2", age: 10, score: 30, status: 1}

// FindIndex
const checkAdult = item => item.age >= 18;
const findIndex = players.findIndex(checkAdult);
console.log(`First position found: ${findIndex}`);
// First position found: 0

const prompt = document.querySelector('[data-js="prompt"]');
const form = document.querySelector('[data-js="form"]');
const example = document.querySelector('[data-js="example"]');
const input = document.querySelector('[data-js="input"]');

input.focus();

form.addEventListener('click', () => {
  input.focus();
});

input.addEventListener('input', evt => {
  let text = '';

  switch(evt.target.value) {
    case 'includes':
      text = `
        // Includes
        const includes = names.includes('Name 2');
        console.log(\`Name 2 is ${includes ? `included` : `not included` }\`);
        // Name 2 is included
      `;
      break;
    case 'indexof':
        text = `
          // IndexOf
          const indexOf = scores.indexOf(0);
          console.log(\`Position ${indexOf}\`, players[indexOf]);
          // Position 0 {id: 1, name: "Name 1", age: 18, score: 0, status: 0}
        `;
        break;
      case 'lastindexof':
          text = `
            // LastIndexOf
            const lastIndexOf = scores.lastIndexOf(0);
            console.log(\`Position ${lastIndexOf}\`, players[lastIndexOf]);
            // Position 2 {id: 3, name: "Name 3", age: 15, score: 0, status: 1}
          `;
          break;
      case 'find':
          text = `
            // Find
            const find = players.find(item => item.status === 1);
            console.log(\`First item found:\`, find);
            // First item found: {id: 2, name: "Name 2", age: 10, score: 30, status: 1}
          `;
          break;
      case 'findindex':
          text = `
            // FindIndex
            const checkAdult = item => item.age >= 18;
            const findIndex = players.findIndex(checkAdult);
            console.log(\`First position found: ${findIndex}\`);
            // First position found: 0
          `;
          break;
    default:
      text = evt.target.value.indexOf('hemerson') >= 0 ? ' // Nerd Calistenico' : '';
  }

  prompt.innerHTML = evt.target.value;
  example.innerHTML = text;
});
