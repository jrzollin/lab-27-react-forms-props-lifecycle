import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

import SearchForm from './components/search-form';
import SearchResultList from './components/search-result-list';


class App extends React.Component {

  constructor(props){
    super(props);
    this.setStateFromSearch = this.setStateFromSearch.bind(this);
    this.state = {
      topics: [],
    };
  }

  setStateFromSearch(passed){
    this.setState({topics: passed});
  }

  render(){
    return (
      <div>
        <SearchForm setStateFromSearch={this.setStateFromSearch}/>
        <SearchResultList topics={this.state.topics}/>
      </div>
    )
  }

}

ReactDom.render(<App/>, document.getElementById('root'));
