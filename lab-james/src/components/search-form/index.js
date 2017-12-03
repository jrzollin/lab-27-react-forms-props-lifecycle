import React from 'react';

// const redditAPI = `http://reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`;


class SearchForm extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id='searchForm'>
        <form>
          Search for:<br></br>
          <input type="text"></input><br></br>
          Limit to (0 to 100):<br></br>
          <input type="number" min="1" max="100"></input><br></br>
        </form>
      </div>
    )
  }
}

export default SearchForm;
