var React = require('react');
const NavBar = require('./NavBar');

const ShowMovie = React.createClass({
  getInitialState: function() {
    return{movie: null};

  },
  componentDidMount: function() {
    fetch(`http://omdbapi.com/?i=${this.props.params.imdbID}`)
    .then(response => {
      response.json().then(data => {
        this.setState({movie: data});
      });
    })
    .catch(error => console.log('error'));
  },
  render: function() {
    if (!this.state.movie) return <h1>Loading...</h1>;
    return (
      <div>
        <NavBar />
        <h1>{this.state.movie.Title}</h1>
        <p>{this.state.movie.Plot}</p>
      </div>
    );
  }
});

module.exports = ShowMovie;