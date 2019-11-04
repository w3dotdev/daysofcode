// Examples
const fibonacci = [0, 1];
for (let i = 2; i <= 10; i++) {
  fibonacci[ i ] = fibonacci[ i - 1 ] + fibonacci[ i - 2 ];
}
console.log(fibonacci.join(', ')); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
//
const fibonacci2 = n => {
  if (n === 1) {
    return [0, 1];
  } else {
    const result = fibonacci2(n - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;
  }
};
console.log(fibonacci2(10).join(', ')); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
//
const fibonacci3 = n => {
  return n < 2 ? n : fibonacci3(n - 1) + fibonacci3(n - 2);
}
console.log(fibonacci3(10)); // 55
console.log(fibonacci3(7)); // 13
//
const fibonacci4 = (n, prev1, prev2) => {
  const current = prev1 + prev2;
  let result = ` ${current}`;

  if (n > 1) {
    result += fibonacci4(n - 1, current, prev1);
  }

  return result;
}
console.log(fibonacci4(10, 137.5, 0)); // 137.5 275 412.5 687.5 1100 1787.5 2887.5 4675 7562.5 12237.5

// Visual example
const main = document.querySelector('[data-js="main"]');
const getHTML = n => fibonacci4(n, 90, 0).split(' ').map((angle, index) =>  index > 0 ? `<div class='leaf-${index+9}' style='width: ${index / 2}px; transform: rotate(${angle}deg);'></div>` : '').join('');

main.innerHTML = getHTML(100);
