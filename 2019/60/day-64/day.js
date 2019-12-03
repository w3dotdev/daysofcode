// Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
// It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!
// https://jestjs.io/
const MemoryGame = require('./memory-game');

let memoryGame;

describe('Memory Game', () => {
  beforeEach(() => {
    document.body.innerHTML =  `
      <div id="game-board"></div>
    `;

    memoryGame = new MemoryGame({
      board: document.getElementById("game-board"),
      items: ['A','B','C','D','E'],
      itemClass: '.card',
      getHTML: (index, value) => `<div class="card" data-id="card-${index}" data-value="${value}"></div>`,
      endMessage: 'O jogo acabou!!'
    });
  });

  it('memoryGame.init', () => {
    expect(memoryGame.init().constructor).toBe(Array);
    expect(memoryGame.init().length).toBe(10);
  });

  it('memoryGame.handleClick', () => {
    memoryGame.init();
    document.querySelector('[data-id="card-2"]').click();
    
    expect(memoryGame.selectedCards[0]).toBe('card-2');
    expect(memoryGame.cardsValues[0]).toBe(document.querySelector('[data-id="card-2"]').innerHTML);
  });

  it('memoryGame.shuffle', () => {
    memoryGame.init();

    const cards = memoryGame.initCards();
    const cards1 = [...cards];
    
    expect(cards).not.toBe(memoryGame.shuffle(cards1));
    expect(memoryGame.shuffle(cards).length).toBe(10);
  });

  it('memoryGame.pairMade', () => {
    memoryGame.init();

    const cards = memoryGame.initCards();
    expect(memoryGame.pairMade(cards.slice(0,2))).toBe('O jogo acabou!!');
  });

  it('memoryGame.toFlipUp', () => {
    memoryGame.init();
    const $card1 = document.querySelector('[data-id="card-2"]');
    const $card2 = document.querySelector('[data-id="card-3"]');

    $card1.click();
    $card2.click();
    
    expect($card1.style.background).toBe("rgb(255, 255, 255)");
    expect($card2.style.background).toBe("rgb(255, 255, 255)");
  });

  it('memoryGame.toFlipDown', done => {
    memoryGame.init();

    const cards = memoryGame.initCards();
    const $card1 = document.querySelector('[data-id="card-2"]');
    const $card2 = document.querySelector('[data-id="card-3"]');

    $card1.click();
    $card2.click();
    
    if ($card1.getAttribute('data-value') !== $card2.getAttribute('data-value')) {
      setTimeout(() => {
        expect($card1.style.background).toBe("rgb(0, 0, 0)");
        expect($card2.style.background).toBe("rgb(0, 0, 0)");
        done();
      }, 900);
    } else {
      setTimeout(() => {
        expect($card1.style.background).toBe("rgb(255, 255, 255)");
        expect($card2.style.background).toBe("rgb(255, 255, 255)");
        done();
      }, 900);
    }
  });
});