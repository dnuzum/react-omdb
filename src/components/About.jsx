var React = require('react');
const NavBar = require('./NavBar');

const About = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar />
        <h1>About</h1>
      </div>
    );
  }
});

module.exports = About;