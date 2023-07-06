import React from 'react';
import { Link } from 'react-router-dom';

class Poop extends React.Component {
constructor(props) {
  super(props);
  this.getItems = this.getItems.bind(this);
  this.state = {
    uri: 'api/todoitems',
    todos: [],
  }
}
  // const uri = 'api/todoitems';
  // let todos = [];

  getItems = () => {
//TODO - this method doesn't work
    fetch('https://localhost:44355/api/todoitems', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      },
    })
      .then(response => console.log(response.json()))
      .then(data => console.log(this.displayItems(data)))
      .catch(error => console.error('Unable to get items.', error));
  }

  addItem = function() {
    const addNameTextbox = document.getElementById('add-name');
    //thismagic
    const item = {
      isComplete: false,
      name: addNameTextbox.value.trim()
    };

    fetch(this.state.uri, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(() => {
        this.getItems();
        addNameTextbox.value = '';
      })
      .catch(error => console.error('Unable to add item.', error));
  }

  deleteItem = function(id) {
    fetch(`${this.state.uri}/${id}`, {
      method: 'DELETE'
    })
      .then(() => this.getItems())
      .catch(error => console.error('Unable to delete item.', error));
  }

  displayEditForm = function(id) {
    const item = this.state.todos.find(item => item.id === id);

    document.getElementById('edit-name').value = item.name;
    document.getElementById('edit-id').value = item.id;
    document.getElementById('edit-isComplete').checked = item.isComplete;
    document.getElementById('editForm').style.display = 'block';
  }

  updateItem = function() {
    const itemId = document.getElementById('edit-id').value;
    const item = {
      id: parseInt(itemId, 10),
      isComplete: document.getElementById('edit-isComplete').checked,
      name: document.getElementById('edit-name').value.trim()
    };

    fetch(`${this.state.uri}/${itemId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(() => this.getItems())
      .catch(error => console.error('Unable to update item.', error));

    this.closeInput();

    return false;
  }

  closeInput = function() {
    document.getElementById('editForm').style.display = 'none';
  }

   displayCount = function(itemCount) {
    const name = (itemCount === 1) ? 'to-do' : 'to-dos';

    document.getElementById('counter').innerText = `${itemCount} ${name}`;
  }

  displayItems = function(data) {
    const tBody = document.getElementById('todos');
    tBody.innerHTML = '';

    this.displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(item => {
      let isCompleteCheckbox = document.createElement('input');
      isCompleteCheckbox.type = 'checkbox';
      isCompleteCheckbox.disabled = true;
      isCompleteCheckbox.checked = item.isComplete;

      let editButton = button.cloneNode(false);
      editButton.innerText = 'Edit';
      editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

      let deleteButton = button.cloneNode(false);
      deleteButton.innerText = 'Delete';
      deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);

      let tr = tBody.insertRow();

      let td1 = tr.insertCell(0);
      td1.appendChild(isCompleteCheckbox);

      let td2 = tr.insertCell(1);
      let textNode = document.createTextNode(item.name);
      td2.appendChild(textNode);

      let td3 = tr.insertCell(2);
      td3.appendChild(editButton);

      let td4 = tr.insertCell(3);
      td4.appendChild(deleteButton);
    });

    this.setState.todos = data;
  }
    render(){
    return (
        <div>
            <Link to='Page2'>Link to page 2</Link> <br/>
            <Link to='Page3'>Link to page 3</Link>
            <button onClick={this.getItems}>This gets something</button>
            <h1>This is a homepage</h1>
        </div>
        );
    }
}

export default Poop;