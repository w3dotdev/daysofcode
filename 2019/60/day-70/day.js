// Velocity.js - Accelerated JavaScript animation.
// Velocity is an animation engine with the same API as jQuery's $.animate(). It works with and without jQuery.
// http://velocityjs.org/

const handleClick = title => {
  const $title = title;

  const activeClass = 'active';

  const $wrapper = document.querySelector('[data-js="wrapper"]');
  const $sections = $wrapper.querySelectorAll('.section');

  const $section = $title.parentNode;
  const $v1 = $section.querySelector('.v1');
  const $v2 = $section.querySelector('.v2');
  const $star = $section.querySelector('.star');
  const $content = $section.querySelector('.content');

  const $active = document.querySelector('.active');
  const $activeTitle = $active.querySelector('.title');
  const $activeStar = $active.querySelector('.star');
  const $activeContent = $active.querySelector('.content');
  const $activeV1 = $active.querySelector('.v1');
  const $activeV2 = $active.querySelector('.v2');

  if (!$section.classList.contains('active')) {
    Velocity($activeContent, 'slideUp', { duration: 400, easing: 'swing' });
    Velocity($activeV1, { rotateZ: '-180deg' }, { duration: 600, easing: 'swing' });
    Velocity($activeV2, { rotateZ: '90deg', }, { duration: 600, easing: 'swing' });
    Velocity($activeStar, { scale: 0.8 }, { duration: 400, easing: 'swing' });
    Velocity($active, { opacity: '.75' }, {
      duration: 400,
      easing: 'swing',
      complete: () => {
        Velocity($activeTitle, { backgroundColor: '#6c377c', width: '90%' }, { duration: 200, easing: 'swing' });
      }
    });

    Velocity($v1, { rotateZ: '0deg' }, { duration: 600, easing: 'swing' });
    Velocity($v2, { rotateZ: '0deg', }, { duration: 600, easing: 'swing' });
    Velocity($section, { opacity: '1' }, { duration: 400, easing: 'swing' });
    Velocity($star, { scale: 1.4 }, { duration: 400, easing: 'swing', loop: 2 });

    Velocity($title, { backgroundColor: '#fff', width: '100%' }, {
      duration: 200,
      easing: 'swing',
      complete: () => {
        Velocity($content, 'slideDown', {
          duration: 400,
          easing: 'swing',
          complete: () => {
            [...$sections].forEach(item => {
              if (item.classList.contains(activeClass)) {
                item.classList.remove(activeClass);
              }
            });

            if (!$section.classList.contains(activeClass)) {
              $section.classList.add(activeClass);
            }
          }
        });
      }
    });
  }
};

const init = () => {
  const $titles = document.querySelectorAll('.title');

  [...$titles].forEach(title => {
    title.addEventListener("click", handleClick.bind(this, title))
  });

  const $unactive = document.querySelectorAll('.section');
  const $unactiveV2 = document.querySelectorAll('.section .v2');
  const $active = document.querySelectorAll('.active');
  const $activeV2 = document.querySelectorAll('.active .v2');

  const loop = (array, props, time) => {
    [...array].forEach(item => {
      Velocity(item, props, time);
    });
  }

  loop($unactive, { opacity: '0.75' }, { duration: 500 })
  loop($unactiveV2, { rotateZ: '90deg' }, { duration: 500 });

  loop($active, { opacity: '1' }, { duration: 500 })
  loop($activeV2, { rotateZ: '0deg' }, { duration: 500 });
}


init();
