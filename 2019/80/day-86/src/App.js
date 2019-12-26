// React - A declarative, efficient, and flexible JavaScript library for building user interfaces.
// https://reactjs.org/
//
// npx create-react-app day86
// npm start
//
import React, { useState, useEffect } from "react";
import Component from "./components";
import './App.css';

const App = () => {
  const [data, setData] = useState({
    front: ['Javascript'],
    analytics: ['Google Analytics']
  });

  useEffect(() => {
    // const fetchData = async () => {
      setData(data);
    // };
    // fetchData();
  }, []);

  const addItem = item => {
    const newData = Object.assign({}, data);
    newData.front.push(item);
    setData(newData);
  }

  const deleteItem = (itemToRemove) => {
    const newData = Object.assign({}, data);
    newData.front = newData.front.filter(item => item != itemToRemove);
    setData(newData);
  }

  const filterOptions = input => {
    const options = ['Javascript', 'Angular', 'React', 'Redux', 'Vue'];
    if(!input || input.length === 0){
      return options;
    }
    return options.filter(item => item.indexOf(input) >= 0);
  }

  return (
    data === null ? <div>Carregando...</div> :
    <div className="container">
      <form>
        <h1>Front-end</h1>
        <Component items={data.front} handleAddItem={addItem} handleDeleteItem={deleteItem} handleFilter={filterOptions} />
      </form>
    </div>
  );
}

export default App;
