var React = require('react');
const NavBar = require('./NavBar');
const Link = require('react-router').Link;

const OMDBSearch = React.createClass({
  getInitialState: function() {
    return {searchTerm: '', results: [], loading: false};
  },
  searchChange: function(e) {
    this.setState({searchTerm: e.target.value});
  },
  search: function(e) {
    e.preventDefault();
    this.setState({loading: true});
    fetch(`http://omdbapi.com/?s=${this.state.searchTerm}`)
      .then(response => {
        response.json().then(data => {
          this.setState({results: data.Search || [], loading: false});
        });
      })
      .catch(error => {
        console.log('error!');
      });
  },
  render: function() {
    let results
    if (this.state.loading) {
      results = <h2>Loading...</h2>
    } else {
      results = this.state.results.map((movie, idx) => {
        return (
          <div className="well" key={idx}>
            <h2>{movie.Title}</h2>
            <Link to={`/results/${movie.imdbID}`}>Show Movie</Link>
          </div>
        );
      });
    }
    return (
      <div>
      <NavBar />
        <h1>Search for Movies</h1>
        <form onSubmit={this.search}>
          <input type="text" 
                 className="form-control" 
                 onChange={this.searchChange} 
                 value={this.state.searchTerm} />
          <input type="submit" className="btn btn-primary" />
        </form>
        <div>{results}</div>
      </div>
    );
  }
});

module.exports = OMDBSearch;