const toggle = document.querySelector('[data-js="toggle"]');
const workstation = document.querySelector('[data-js="workstation"]');
const lights = document.querySelectorAll('[data-js="light"]');

toggle.addEventListener('click', () => {
  if (toggle.checked) {
    [...lights].forEach((light) => {
      light.classList.add('on');
    });
    workstation.classList.add('on');
  } else {
    [...lights].forEach((light) => {
      light.classList.remove('on');
    });
    workstation.classList.remove('on');
  }
});


const frames = document.querySelectorAll('[data-js="frame"]');
let mouseDown = false;

const mousemove = frame => evt => {
  if (mouseDown) {
    const offset = frame.getBoundingClientRect();
    var centerX = (offset.left) + (offset.width / 2);
    var centerY = (offset.top) + (offset.height / 2);
    // The atan2() method returns the arctangent of the quotient of its arguments, as a numeric value between PI and -PI radians.
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2
    var radians = Math.atan2(evt.pageX - centerX, evt.pageY - centerY);
    var angle = (radians * (180 / Math.PI) * -1) - 90;

    frame.style.transform = `rotate(${angle}deg)`;
  }
}

[...frames].forEach((frame) => {
  frame.addEventListener("mousedown", () => {
    mouseDown = true;
    frame.addEventListener("mousemove", mousemove(frame));
  });

  frame.addEventListener("mouseup", () => {
    mouseDown = false;
  });
});
