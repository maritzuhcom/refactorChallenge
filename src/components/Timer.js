import React, { Component } from 'react';

export default class Timer extends Component {
  state = {
    count: 0,
    showTime: false,
  }

  interval = 0;

  toggleTimer = () => {
    if (this.state.showTime) {
      clearInterval(this.interval);
      this.setState({
        showTime: false,
        count: 0,
      });
      return;
    }

    this.setState({
      showTime: true,
    });

    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <section id="timer">
        <button
          onClick={this.toggleTimer}
        >
          Toggle Timer
        </button>
        {this.state.showTime ?
          <div>
            <h2>Seconds so Far:</h2>
            <p>{this.state.count}</p>
          </div>
          : ''
        }
      </section>
    );
  }
}
