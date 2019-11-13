// Array.from
const items = document.querySelectorAll('.item-title');
const movies = Array.from(items, movie => {
  return { name: movie.textContent, studio: movie.getAttribute('data-studio'), year: movie.getAttribute('data-year'),  }
});
// isArray
if (Array.isArray(movies)) {

  console.log(movies);

  // some - will return true if any predicate is true
  if (movies.some(movie => movie.studio === "Marvel")) {
    console.log("There is Marvel movie");
  } else {
    console.log("There is no Marvel movie");
  }

  // every - will return true if all predicate is true
  if (movies.every(movie => movie.year >= 2020)) {
    console.log("Now from 2020");
  } else {
    console.log("Still has movie in 2019");
  }

  // Array.of
  const result1 = Array.of(movies.length);
  console.log(result1);

  const result2 = Array(movies.length);
  console.log(result2);
}
