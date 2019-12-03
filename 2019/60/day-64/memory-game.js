class MemoryGame {
  constructor(props) {
    this.$board = props.board;
    
    this.items = props.items;
    this.itemClass = props.itemClass;
    this.getHTML = props.getHTML;
    this.endMessage = props.endMessage;

    this.cardsValues = [];
    this.selectedCards = [];
    this.cardsFlipped = 0;
    this.output = '';

    this.cards = this.initCards();

    this.toFlipDown = this.toFlipDown.bind(this);
  }

  initCards() {
    return [...this.items, ...this.items];
  }

  init() {
    this.cardsFlipped = 0;
    this.output = '';
    this.cards = this.shuffle(this.cards);

    this.$board.innerHTML = this.createCards(this.cards);
    this.handleClick();

    return this.cards;
  }
  
  shuffle(cards){
    let currentIndex = cards.length, temporaryValue, randomIndex;

    while(currentIndex !== 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }

    return cards;
  }

  handleClick(){
    const $cards = document.querySelectorAll(this.itemClass);
    
    for (let i = 0, len = $cards.length; i < len; i++) {
      $cards[i].addEventListener('click', evt => {
        this.toFlipUp(evt.target, evt.target.getAttribute('data-value'));
      });
    }

    return $cards.length;
  }

  createCards(cards){
    for(let i = 0; i < cards.length; i++){
      this.output += this.getHTML(i, cards[i]);
    }

    return this.output;
  }
  
  pairMade(cards){
    this.cardsFlipped += 2;

    this.cardsValues = [];
    this.selectedCards = [];
    
    if(this.cardsFlipped == cards.length){
      this.$board.innerHTML = "";
      this.init();
      return this.endMessage;
    }

    return false;
  }

  toFlipDown(){
    const card1 = document.querySelector(`[data-id="${this.selectedCards[0]}"]`);
    const card2 = document.querySelector(`[data-id="${this.selectedCards[1]}"]`);

    this.styleFlipDown(card1);
    this.styleFlipDown(card2);

    this.cardsValues = [];
    this.selectedCards = [];
  }

  toFlipUp(card, value){
    if(card.innerHTML == "" && this.cardsValues.length < 2){
      this.styleFlipUp(card, value);
      
      if(this.cardsValues.length < 2){
        this.cardsValues.push(value);
        this.selectedCards.push(card.getAttribute('data-id'));
      }

      if(this.cardsValues.length == 2){
        if(this.cardsValues[0] == this.cardsValues[1]){
          this.pairMade(this.cards);
        } else {
          setTimeout(this.toFlipDown, 800);
        }
      }
    }
  }

  // style
  styleFlipUp(card, value){
	  card.style.background = '#fff';
    card.innerHTML = value;
  }

  styleFlipDown(card){
	  card.style.background = '#000';
    card.innerHTML = "";
  }
}

module.exports = MemoryGame;