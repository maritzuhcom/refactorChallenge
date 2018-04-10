/* eslint react/no-array-index-key: 0 */

import React, { Component } from 'react';
import ListItem from './ListItem';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      listItems: [],
      inputValue: '',
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  submitHandler = (e) => {
    e.preventDefault();

    const inputValue = this.state.inputValue.trim();

    if (inputValue === '') {
      // trim off any unwanted empty spaces if they submit a long empty string
      this.setState({ inputValue: '' });
      return;
    }

    const items = [...this.state.listItems];
    items.unshift({
      value: inputValue,
      timestamp: Date.now(),
    });

    this.setState({
      listItems: [...items],
      inputValue: '',
    });
  }

  removeItem = (index) => {
    const items = [...this.state.listItems];
    items.splice(index, 1);
    this.setState({
      listItems: [...items],
    });
  };

  renderListItems = () => this.state.listItems.map((item, i) => (
    <ListItem
      text={item.value}
      time={item.timestamp}
      key={item.timestamp}
      onRequestClose={() => { this.removeItem(i); }}
    />
  ))

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          className="formControl"
          placeholder="add a new todo..."
          value={this.state.inputValue}
          onChange={(e) => { this.setState({ inputValue: e.target.value }); }}
          ref={this.inputRef}
        />

        <button
          type="submit"
          className="btn btn-default"
        >
         Add
        </button>

        {this.renderListItems()}
      </form>
    );
  }
}
