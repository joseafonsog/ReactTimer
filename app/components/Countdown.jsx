var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function () {
    return (
      <div>
        <p>Countdown.jsx</p>
        <Clock totalSeconds={129} />
      </div>
    );

  }
});

module.exports = Countdown;