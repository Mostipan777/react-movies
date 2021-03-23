import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };
  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  changeType = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Search"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn deep-purple darken-4"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>
        <p>
          <label>
            <input
              className="with-gap deep-purple darken-4"
              name="type"
              type="radio"
              data-type="all"
              onChange={this.changeType}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              data-type="movie"
              type="radio"
              onChange={this.changeType}
              checked={this.state.type === 'movie'}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              data-type="series"
              type="radio"
              onChange={this.changeType}
              checked={this.state.type === 'series'}
            />
            <span>Series</span>
          </label>
        </p>
      </div>
    );
  }
}

export { Search };
