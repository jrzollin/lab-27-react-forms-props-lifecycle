import React from 'react';
import superagent from 'superagent';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {

  constructor(props){
    super(props);
    this.performSearch = this.performSearch.bind(this);
    this.changeState = this.changeState.bind(this);
    this.state = {
      searchFormBoard: '',
      searchFormLimit: 15
    }
  }

  changeState(e){
    this.setState({[e.target.id]: e.target.value})
  }

  performSearch(e){
    e.preventDefault();
    const redditAPI = `http://www.reddit.com/r/${this.state.searchFormBoard}.json?limit=${this.state.searchFormLimit}`;
    superagent.get(redditAPI)
      .then(results => {
        this.props.setStateFromSearch(results.body.data.children);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render(){
    return(
      <div id='searchForm'>
        <form onSubmit={this.performSearch}>
          <label htmlFor="searchFormBoard">Search for:
            <input type="text" id="searchFormBoard" onChange={this.changeState}/>
          </label>
          <label htmlFor="searchFormLimit">Limit to (0 to 100):
            <input type="number" min="1" max="100" id="searchFormLimit" value={this.state.searchFormLimit} onChange={this.changeState} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

SearchForm.propTypes = {
  setStateFromSearch: PropTypes.func.isRequired,
}

export default SearchForm;
