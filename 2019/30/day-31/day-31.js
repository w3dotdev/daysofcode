const pyramid  = document.querySelector('[data-js="main"]');
const maxLevels = 10;

let html = '';

for (let level = 0; level < maxLevels; level++ ){
  html += '<ul class="row">';

  for (let column = 0; column < level+1; column++ ){
    html += '<li class="item"></li>';
  }

  html += '</ul>';
}

pyramid.innerHTML = html;
