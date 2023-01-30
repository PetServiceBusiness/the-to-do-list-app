import React from 'react';

const textAreaStyles = {
  width: 700,
  height: 100,
  textAlign: 'center',
  margin: 'auto',
  backgroundColor: 'pink',
};

function ani() {
  document.getElementById('btn').className = 'anim';
}
function rem() {
  document.getElementById('btn').className = '';
}

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      toDoList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
    ani();
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
    rem();
  }
  render() {
    const items = this.state.toDoList.map(i => <li className='item'>{i}</li>);
    return (
      <div>
        <h1>the to-do list app</h1>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          className='textareastyle'
          placeholder="Separate items with commas. This box is scalable if you want to fit more content inside." /><br />
        <button onClick={this.handleSubmit} id='btn'>Create List</button>
        <h3>My To-Do List:</h3>
        <ul className='list'>
          {items}
        </ul>
      </div>
    );
  }
};

export default MyToDoList;
