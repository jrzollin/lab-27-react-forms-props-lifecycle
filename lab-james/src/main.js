import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

import SearchForm from './components/search-form';


class App extends React.Component {

  constructor(props){
    super(props);
    this.setStateFromSearch = this.setStateFromSearch.bind(this);
    this.state = {
      topics: [],
    };
  }

  setStateFromSearch(passed){
    this.state = {topics: passed}
    console.log(this.state);
  }

  render(){
    return (
      <div>
        <SearchForm setStateFromSearch={this.setStateFromSearch}/>
      </div>
    )
  }

}

ReactDom.render(<App/>, document.getElementById('root'));
