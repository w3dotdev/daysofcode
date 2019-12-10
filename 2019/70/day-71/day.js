// Popmotion - Simple libraries for delightful interfaces
// https://popmotion.io/
const { chain, tween, styler, action, easing, composite, listen, pointer, value } = window.popmotion;

const mainSvg = document.getElementById('main-svg');
const subSvg = mainSvg.getElementById('drawing');

// CIRCLE
const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
mainSvg.prepend(circle);
// SILHOUETTE
const path = "M64.5 93.2c-.9 0-1.7.6-2.1 1.4-.2-.4-.5-.7-.8-.9 11.7-9.3 30.3-35.6 8.8-51.5v.1c-.6-1-1.3-2-2-2.9 6.2-1.6 10.7-7.1 10.7-13.8 0-5.5-3.2-10.3-7.8-12.7.9-.5 1.7-1.4 2.3-2.9 0-.1.1-.2.1-.3 0-.1 0-.1.1-.2.7-2 1.2-5 1.4-9.6C65.3 10.1 50 1.2 50 5.8c0-4.6-15.3 4.3-25.1-5.8.2 4.3.6 7.2 1.3 9.1 0 .1.1.2.1.3 0 .1.1.2.1.3 0 .1 0 .1.1.2.6 1.5 1.4 2.5 2.3 3C24.2 15.2 21 20 21 25.6c0 6.6 4.6 12.2 10.7 13.8-.7.9-1.4 1.8-1.9 2.8-21.5 15.8-3.2 42 8.6 51.3-.4.2-.7.6-.9 1-.4-.8-1.2-1.4-2.1-1.4-1.4 0-2.5 1.2-2.5 2.8 0 1.5 1.1 2.8 2.5 2.8.9 0 1.7-.6 2.1-1.4.4.8 1.2 1.4 2.1 1.4.9 0 1.7-.6 2.1-1.4.4.8 1.2 1.4 2.1 1.4.7 0 1.3-.3 1.7-.8 1.4.8 2.9 1.5 4.4 2.1 1.5-.6 2.9-1.3 4.3-2.1.4.5 1 .7 1.7.7.9 0 1.7-.6 2.1-1.4.4.8 1.2 1.4 2.1 1.4.9 0 1.7-.6 2.1-1.4.4.8 1.2 1.4 2.1 1.4 1.4 0 2.5-1.2 2.5-2.8.1-1.4-1-2.6-2.3-2.6zM35.1 37.4c-6.5 0-11.8-5.3-11.8-11.8s5.3-11.8 11.8-11.8S46.9 19 46.9 25.6s-5.3 11.8-11.8 11.8zm18-11.8c0-6.5 5.3-11.8 11.8-11.8 6.5 0 11.8 5.3 11.8 11.8s-5.3 11.8-11.8 11.8c-6.5 0-11.8-5.3-11.8-11.8z"
const silhouettePath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
subSvg.appendChild(silhouettePath);
// TOP
const path1 = 'M70.2 41.4c-1.1-2-2.5-3.7-4.2-5.2-.5.1-.9.1-1.4.1-4.1 0-7.8-2.2-9.8-5.5-1.4-.2-2.9-.4-4.5-.4-1.8 0-3.5.2-5.1.5-2.1 3.2-5.7 5.4-9.8 5.4h-.9c-1.6 1.5-2.9 3.2-4.1 5.1-.4 1.3-.6 35.7 10.7 50.2-.3-.2-.6-.3-1-.3-.9 0-1.7.5-2.1 1.3-.4-.8-1.2-1.3-2.1-1.3-1.3 0-2.4 1.2-2.4 2.7 0 1.5 1.1 2.7 2.4 2.7.9 0 1.7-.5 2.1-1.3.4.8 1.2 1.3 2.1 1.3.9 0 1.7-.5 2.1-1.3.4.8 1.2 1.3 2.1 1.3.7 0 1.3-.3 1.7-.8 1.4.8 2.8 1.5 4.3 2.1 1.5-.6 2.9-1.3 4.2-2 .4.5 1 .7 1.6.7.9 0 1.7-.5 2.1-1.3.4.8 1.2 1.3 2.1 1.3.9 0 1.7-.5 2.1-1.3.4.8 1.2 1.3 2.1 1.3 1.3 0 2.4-1.2 2.4-2.7 0-1.5-1.1-2.7-2.4-2.7-.9 0-1.7.5-2.1 1.3-.4-.8-1.2-1.3-2.1-1.3-.3 0-.5.1-.7.1 10.9-14.3 10.9-47.7 10.6-50z'
const topPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
subSvg.appendChild(topPath);
// BOTTOM
const path3 = 'M73.4 9.3c0-.1 0-.1.1-.2.7-1.9 1.2-4.9 1.4-9.3C65.2 9.7 50.2 1 50.2 5.5c0-4.5-15 4.2-24.6-5.7.2 4.2.6 7 1.2 8.9 0 .1.1.2.1.3 0 .1.1.2.1.3 0 .1 0 .1.1.1C31.3 19.8 42.5 1.3 50.2 34 57.9 1.4 69.1 19.7 73.3 9.6c0-.1 0-.2.1-.3z'
const bottomPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
subSvg.appendChild(bottomPath);
// NOSE
const path2 = 'M46.6 30c1.4-1.4 2.8-2.7 4-4 1.3 1.2 2.6 2.4 3.8 3.6.2.2.3.7.1.9-1.2 2.6-2.5 5.1-3.8 7.8l-2.5-5c-.5-1-1.1-2.1-1.7-3.1.1 0 .1-.1.1-.2z'
const nose = document.createElementNS('http://www.w3.org/2000/svg', 'path')
subSvg.appendChild(nose);
// LEFT EYE
const eyes = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
subSvg.appendChild(eyes);
// RIGHT EYE
const eyes1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
subSvg.appendChild(eyes1);

// CIRCLE
const circleStyler = styler(circle);
circleStyler.set({ x: 100, y: 100, fill: '#fff' });

const animateBackground = tween({
  from: { r: 0 },
  to: { r: 100 },
  duration: 500,
});
const circleFn = action(({ complete }) => animateBackground.start({ update: circleStyler.set, complete }));

// SILHOUETTE
const silhouetteStyler = styler(silhouettePath);

silhouettePath.setAttribute('stroke-dasharray', '470')
silhouettePath.setAttribute('stroke-dashoffset', '110')
silhouetteStyler.set({
  opacity: 0,
  d: path,
  strokeWidth: 0.4,
  stroke: '#590f84',
  fill: '#590f84',
  fillOpacity: 0,
})
const drawBody = tween({
  from: { 'stroke-dashoffset': 470, opacity: 1 },
  to: { 'stroke-dashoffset': 110 },
  duration: 2000,
})
const fillBody = tween({
  from: { fillOpacity: 0 },
  to: { fillOpacity: 1 },
  duration: 500,
})

const animateBody = chain(drawBody,fillBody);
const silhouetteFn = action(({ complete }) => animateBody.start({ update: silhouetteStyler.set, complete }))

// TOP
const topStyler = styler(topPath);
topStyler.set({
  fill: '#fff085',
  stroke: '#fff085',
  strokeWidth: 1,
  opacity: 0,
  d: path1,
})

const animateTop = tween({
  from: { x: 0, y: -10, opacity: 1 },
  to: { x: -0.3, y: 1.8 },
  duration: 500,
  ease: easing.backOut,
})
const topFn = action(({ complete }) => animateTop.start({ update: topStyler.set, complete }))

// BOTTOM
const bottomStyler = styler(bottomPath);
bottomStyler.set({
  fill: '#fff085',
  stroke: '#fff085',
  strokeWidth: 1,
  opacity: 0,
  d: path3,
});

const animateBottom = tween({
  from: { x: -100, opacity: 1 },
  to: { x: 0 },
  duration: 500,
  ease: easing.backOut
});
const bottomFn = action(({ complete }) => animateBottom.start({ update: bottomStyler.set, complete }))

// NOSE
const noseStyler = styler(nose);
noseStyler.set({ fill: '#cc39ea', opacity: 0, d: path2 });

const animateHorn = tween({
  from: { x: -20, y: -30, opacity: 1 },
  to: { x: -1, y: -1 },
  duration: 500,
});
const noseFn = action(({ complete }) => animateHorn.start({ update: noseStyler.set, complete }))

// LEFT EYE
const eyeStyler = styler(eyes);
eyeStyler.set({ opacity: 0, fill: '#000', r: 3, x: 64, y: 24 });

const showEye = tween({
  from: { scaleY: 0, opacity: 1 },
  to: { scaleY: 1 },
  duration: 200,
});
const eyeFn = action(({ complete }) => showEye.start({ update: eyeStyler.set, complete }))

// RIGHT EYE
const eyeStyler1 = styler(eyes1);
eyeStyler1.set({
  opacity: 0,
  fill: '#000',
  r: 3,
  x: 35,
  y: 24
});

const showEye1 = tween({
  from: { scaleY: 0, opacity: 1 },
  to: { scaleY: 1 },
  duration: 200,
});
const blinkEye1 = tween({
  from: { scaleY: 1 },
  to: { scaleY: 0.1 },
  duration: 50,
  flip: 1,
});

const eyeFn1 = action(({ complete }) => {
  showEye1.start({ update: eyeStyler1.set, complete: () => {
    complete()
    setInterval(() => blinkEye1.start({ update: eyeStyler1.set }), 2000)
  }})
});

// DRAG
const box = document.querySelector('.box');
const divStyler = styler(box);
const boxXY = value({ x: 0, y: 0 }, divStyler.set);

listen(box, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(boxXY.get()).start(boxXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    boxXY.stop();
  });

// Sequence of actions
chain(
  circleFn,
  silhouetteFn,
  composite({
    topFn,
    bottomFn,
  }),
  eyeFn1,
  eyeFn,
  noseFn,
).start();
