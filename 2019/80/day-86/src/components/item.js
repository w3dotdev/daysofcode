import React from "react";

const Item = ({ item, handleRemoveItem }) => {
  return (
    <div className="component-item" onClick={evt => evt.stopPropagation()}>
      <span className="component-text">{item}</span>
      <span className="component-remove" onClick={() => handleRemoveItem(item)}>x</span>
    </div>
  );
}

export default Item;
