class Pagination {
  constructor(container, config) {
    const newConfig = config || {};

    this.html = '';
    this.total = newConfig.total || 10;
    this.page = newConfig.page || 1;
    this.step = newConfig.step || 3;

    this.container = container;
    this.list = container.querySelector('.pagination-list');
    this.prev = container.querySelector('.prev');
    this.next = container.querySelector('.next');
    // start - example
    this.main = document.querySelector('[data-js="main"]');
    // end - example
    this.handleClick = this.handleClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);

    this.render();
  }

  renderFirst() {
    return '<li class="pagination-item"><button class="pagination-button">1</button></li><li class="pagination-item"><span>...</span></li>';
  }

  renderItems(begin, end) {
    let items = '';
    for (let i = begin; i < end; i++) {
      items += '<li class="pagination-item"><button class="pagination-button">' + i + '</button></li>';
    }

    return items;
  }

  renderLast() {
    return '<li class="pagination-item"><span>...</span></li><li class="pagination-item"><button class="pagination-button">' + this.total + '</button></li>';
  }

  handleClick(evt) {
    this.page = parseInt(evt.target.innerText);
    // start - example
    this.main.innerHTML = this.page;
    // end - example
    this.render();
  }

  handlePrevClick() {
    this.page--;

    if (this.page < 1) {
      this.page = 1;
    }

    this.render();
  }

  handleNextClick() {
    this.page++;

    if (this.page > this.total) {
      this.page = this.total;
    }

    this.render();
  }

  bind() {
    const items = this.list.querySelectorAll('.pagination-button');

    this.prev.addEventListener('click', this.handlePrevClick);
    this.next.addEventListener('click', this.handleNextClick);

    for (let i = 0; i < items.length; i++) {
      if (parseInt(items[i].innerText) === this.page) items[i].classList.add('active');
      items[i].addEventListener('click', this.handleClick);
    }
  }

  render() {
    // minimun: total = 10, step = 1
    if (this.total < this.step * 2 + 9) {
      this.html += this.renderItems(1, this.total + 1);
    }
    // ex: total = 20, page = 4 , step = 2; 4 < 5
    else if (this.page < this.step * 2 + 1) {
      this.html += this.renderItems(1, this.step * 2 + 4);
      this.html += this.renderLast();
    }
    // ex: total = 20, page = 17 , step = 2; === 17 > 16
    else if (this.page > this.total - this.step * 2) {
      this.html += this.renderFirst();
      this.html += this.renderItems(this.total - this.step * 2 - 2, this.total + 1);
    }
    // ex: total = 20, page = 5,6,7,8,9,10,11,12,13,14,15,16 , step = 2;
    else {
      this.html += this.renderFirst();
      this.html += this.renderItems(this.page - this.step, this.page + this.step + 1);
      this.html += this.renderLast();
    }
    // start - example
    this.main.innerHTML = this.page;
    // end - example
    this.list.innerHTML = this.html;
    this.html = '';
    this.bind();
  }
};

const thirtyEight = () => {
  new Pagination(document.querySelector('[data-js="pagination"]'), { total: 40, page: 1, step: 2 });
};

document.addEventListener('DOMContentLoaded', thirtyEight);

