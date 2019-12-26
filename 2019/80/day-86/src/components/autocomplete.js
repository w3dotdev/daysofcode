import React, { useState, useRef, useEffect } from "react";

const Autocomplete = ({ handleFilter , selectedItems, handleSelectNewItem, handleBlur, show, id }) => {
  const autocompleteRef = useRef(null);
  const itemRef = useRef(null);
  const idRef = useRef(id);
  const [parentHeight, setParentHeight] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);
  const [clickout, setClickout] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    autocompleteRef.current.focus();

    setParentHeight(autocompleteRef.current.clientHeight);
    setParentWidth(autocompleteRef.current.clientWidth);
    setOptions(getNotSelected(''));

    if (!clickout && id != null) {
      idRef.current = id;
      document.addEventListener('click', handleClick);
      setClickout(true);
    }
  }, [autocompleteRef, show]);

  const handleUpdateItem = evt => {
    const options = getNotSelected(evt.target.textContent.trim());
    setOptions(options);
  }

  const getNotSelected = filterText => {
    const options = handleFilter(filterText);
    const notSelected = options.filter(option => selectedItems.indexOf(option) < 0);
    if(notSelected.length == 0){
      return ['Item não encontrado'];
    }
    return notSelected;
  }

  const handleClick = evt => {
    const $element = document.getElementById(itemRef.current.id);
    let $target = evt.target;

    if ($element === null) return;
    if ($element.className.includes('hidden')) return;

    if(evt.target == document.querySelector(`#component-${idRef.current} .component-items`)){
      autocompleteRef.current.innerText = '';
      return;
    }

    do {
      if ($target == $element) return;
      $target = $target.parentNode;
    } while ($target);

    autocompleteRef.current.innerText = '';
    handleBlur(evt);
  }

  const handleSelectItem = item => {
    autocompleteRef.current.innerText = '';
    handleSelectNewItem(item);
  }

  return (
    <div ref={itemRef} id={`autocomplete-${id}`} className={`autocomplete ${show ? '' : 'hidden'}`} style={{ width: parentWidth, height: parentHeight }}>
      <div className="autocomplete-container">
        <div ref={autocompleteRef} className="autocomplete-text" contentEditable="true" onClick={evt => evt.stopPropagation()} onInput={evt => handleUpdateItem(evt)}></div>
        <ul className="autocomplete-list">
          {options.map((item, index) => <li key={index} className="autocomplete-item" onClick={() => handleSelectItem(item)}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Autocomplete;
