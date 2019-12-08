const items = document.querySelectorAll(".item");
const on = items => {
  [...items].forEach(item => {
    item.addEventListener("click", itemOnClick.bind(this, item))
  });
}
const off = items => {
  [...items].forEach((item) => {
    item.removeEventListener("click", itemOnClick.bind(this, item))
  });
}
const paths = [
  { d: "M148.3 133.1c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm0-10z", id: "item_0"},
  { d: "M227.6 133.1c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm0-10z", id: "item_1"},
  { d: "M227.6 262.9c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm0-10z", id: "item_2"},
  { d: "M360.4 267.9c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm0-10z", id: "item_3"},
  { d: "M363.4 134.1c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm0-10z", id: "item_4"},
  { d: "M444 134.1c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm0-10z", id: "item_5"},
  { d: "M444 299c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm0-10z", id: "item_6"},
  { d: "M444 478.7c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm0-10z", id: "item_7"},
  { d: "M363.4 478.7c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm0-10z", id: "item_8"},
  { d: "M361.4 334.7c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm0-10z", id: "item_9"},
  { d: "M229.6 334.7c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm0-10z", id: "item_10"},
  { d: "M227.6 478.7c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm0-10z", id: "item_11"},
  { d: "M146.3 478.7c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm0-10z", id: "item_12"},
  { d: "M146.3 299c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm0-10z", id: "item_13"}
];

const checkSelectedItemDirection = item => {
  const activeItem = document.querySelector(".active");
  const previousActiveItem = activeItem.getAttribute("data-active");
  const previousActiveItemNumber = +previousActiveItem.split("_")[1];
  
  const selectedItem = item.getAttribute("id");
  const selectedItemNumber = +selectedItem.split("_")[1];
  
  const itemObj = {
    selItem: selectedItemNumber,
    preItem: previousActiveItemNumber,
    dir: selectedItemNumber <= previousActiveItemNumber ? "-" : "+" 
  };

  activeItem.setAttribute('data-active', selectedItem);

  return itemObj;
}

const animeTimeline = loopPaths => {
  if (loopPaths && loopPaths.length) {
    var timeline = anime.timeline();
    timeline.add({
      targets: ".active",
      d: {
        value: loopPaths[0]["d"],
        duration: 1000,
        easing: "easeInOutQuad"
      },
      complete: () => {
        document.querySelector(".active").getAttribute("data-active", loopPaths[0]["id"]);
        loopPaths.shift();
        animeTimeline(loopPaths);
      }
    });
  } else {
    on(items);
  }
}

const itemOnClick = item => {
  off(items);

  const itemObj = checkSelectedItemDirection(item);
  let loopPaths = [];

  switch (itemObj.dir) {
    case '-':
      loopPaths = paths.slice(itemObj.selItem, itemObj.preItem).reverse();
      animeTimeline(loopPaths);
      break;
    case '+':
      loopPaths = paths.slice(itemObj.preItem + 1, itemObj.selItem + 1);
      animeTimeline(loopPaths);
      break;
    default:
      break;
  }
}

on(items);