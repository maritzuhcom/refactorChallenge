import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class ListItem extends Component {
  static propTypes = {
    text: PropTypes.string,
    time: PropTypes.number,
    onRequestClose: PropTypes.func,
  };

  static defaultProps = {
    text: 'ListItem!',
    time: Date.now(),
    onRequestClose: () => {
      console.warn('add an "onRequestClose" handler!');
    },
  };

  state = {
    done: false,
  }

  done = () => {
    this.setState({ done: !this.state.done });
  }

  render() {
    const todoClass = this.state.done ? 'done' : 'undone';
    return (
      <li id="listItem" className="list-group-item">
        <div className={`todoItem ${todoClass}`}>
          <span
            className="glyphicon glyphicon-ok icon"
            aria-hidden="true"
            onClick={this.done}
          />

          <span>
            {this.props.text}
          </span>

          <span className="date">
            {`Added: ${moment(this.props.time).format('ll')}`}
          </span>

          <button onClick={this.props.onRequestClose} >&times;</button>
        </div>
      </li>
    );
  }
}
