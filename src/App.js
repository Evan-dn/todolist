import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items: [],
      currentItem:{
        text: '',
        key: ''
      }
    }
  }

  handleInput = (e) =>{
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
    // console.log("current item vaut : "e.target.value);
  }

  addItem = (e) =>{
    e.preventDefault();
    const newItem = this.state.currentItem;
    // console.log("newItem vaut : "newItem);
    if(newItem.text !==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem:{
          text: '',
          key: ''
        }
      })
    }
    console.log("items vaut : ", this.state.items);
  }

  render(){
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter text"
            value ={this.state.currentItem.text}
            onChange={this.handleInput}/>
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems items={this.state.items}/>
      </div>
    );
  }
}

export default App;
