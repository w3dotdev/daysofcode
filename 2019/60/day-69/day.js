class Game {
  constructor(props) {
    this.$game = props.$game;
    this.$end = props.$end;

    this.arrItem1 = [];
    this.arrItem2 = [];
    this.itemQuantities = 10;
    this.colorClass1 = 'blue';
    this.colorClass2 = 'red' ;
    this.backgroundClass1 = 'running';
    this.backgroundClass2 = 'hamburguer' ;
    this.endMessage = 'FIM';

    this.interval = 400;
    this.newItem2 = setInterval(this.randomItem.bind(this), this.interval);

    this.createGame();
    this.init();
  }

  createGame() {
    for (let i = 0; i < this.itemQuantities; i++) {
      const div = document.createElement('div');
      div.classList.add('item');
      div.setAttribute('data-value', i);
      this.$game.appendChild(div);
    }
  }

  init() {
    this.$items = document.querySelectorAll('.item');
    this.$items.forEach(item => {
      item.addEventListener('click', this.handleClick.bind(this));
    });
  }

  randomItem() {
    const a = Math.random() * this.itemQuantities;
    const b = Math.floor(a);
    
    if (!this.$items[b]) {
      return;
    }

    if(this.arrItem2.indexOf(this.$items[b].dataset.value) == -1) {
      this.arrItem2.push(this.$items[b].dataset.value);

      this.$items[b].classList.remove(this.colorClass1);
      this.$items[b].classList.add(this.colorClass2);
      this.$items[b].classList.add(this.backgroundClass2);

      if(this.arrItem2.length == this.itemQuantities) {
        clearInterval(this.newItem2);

        this.$end.innerHTML = this.endMessage;
        this.$end.classList.add('red');
      }
    } 
    
    if(this.arrItem1.indexOf(this.$items[b].dataset.value) != -1) {
      this.arrItem1.splice(this.arrItem1.indexOf(this.$items[b].dataset.value), 1);
    }
  }

  handleClick(evt) {
    const { target } = evt;

    this.fire(evt);
    
    if(this.arrItem1.indexOf(target.dataset.value) == -1) {
      this.arrItem1.push(target.dataset.value);
      
      if(this.arrItem1.length == this.itemQuantities) {
        clearInterval(this.newItem2);

        this.$end.innerHTML = this.endMessage;
        this.$end.classList.add('blue');
      } 
    } 
    
    if(this.arrItem2.indexOf(target.dataset.value) != -1) {
      this.arrItem2.splice(this.arrItem2.indexOf(target.dataset.value) ,1);
    }

    target.classList.remove(this.colorClass2);
    target.classList.remove(this.backgroundClass2);
    target.classList.add(this.colorClass1);
    target.classList.add(this.backgroundClass1);
  }

  fire(evt) {
    const { target } = evt;
    const itemDim = target.getBoundingClientRect();
    const itemSize = {
      x: itemDim.right - itemDim.left,
      y: itemDim.bottom - itemDim.top,
    };
    
    const burst = new mojs.Burst({
      left: itemDim.left + (itemSize.x/2),
      top: itemDim.top + (itemSize.y/1.7),
      count: 9,
      radius: { 50 : 90 },
    });
    
    burst.play();
  }
}

new Game({
  $game: document.querySelector('.game'),
  $end: document.querySelector('.end')
});
