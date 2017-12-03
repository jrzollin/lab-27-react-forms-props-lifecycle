import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

import SearchForm from './components/search-form';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      topics: [],
      searchFormBoard: '',
      searchFormLimit: 20
    };
  }

  render(){
    return (
      <div>
        <SearchForm />
      </div>
    )
  }

}

ReactDom.render(<App/>, document.getElementById('root'));
