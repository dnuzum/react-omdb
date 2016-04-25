const React = require('react');
const Link = require('react-router').Link;

const NavBar = React.createClass({
  render: function() {
    return (
      <ul className="omdb-navbar">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    );
  }
});

module.exports = NavBar;