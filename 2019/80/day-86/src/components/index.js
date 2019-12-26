import React, { useState, useRef, useEffect } from "react";
import Item from './item';
import Autocomplete from './autocomplete';

const Component = ({ items, handleAddItem, handleDeleteItem, handleFilter }) => {
  const [isNewItem, setNewItem] = useState(false);
  const itemsContainer = useRef();
  const [id, setId] = useState(null);

  useEffect(() => {
    if(id == null){
      setId(randomId());
    }

  }, [isNewItem]);

  const randomId = () => {
    return Math.floor(Math.random()*10000);
  }

  const handleToggleNewItem = evt => {
    evt.stopPropagation();

    if(!isNewItem){
      setNewItem(true);
    } else {
      setNewItem(false);
    }

    return false;
  }

  const handleSelectNewItem = item => {
    handleAddItem(item);
    setNewItem(false);
  }

  const handleBlur = evt => {
    evt.stopPropagation();

    setNewItem(false);
  }

  const handleRemoveItem = itemToRemove => {
    handleDeleteItem(itemToRemove);
  }

  return (
    <div className="component" id={`component-${id}`}>
      <div ref={itemsContainer} className={`component-items ${isNewItem ? 'component--active' : ''}`} onClick={evt => handleToggleNewItem(evt)} >
        {items.map(
          (item, index) => {
            return (
              <Item key={index} item={item} handleRemoveItem={handleRemoveItem}/>
            );
          }
        )}
        <Autocomplete handleFilter ={handleFilter } selectedItems={items} handleSelectNewItem={handleSelectNewItem} handleBlur={handleBlur} show={isNewItem} id={id}/>
      </div>
    </div>
  );
}

export default Component;
