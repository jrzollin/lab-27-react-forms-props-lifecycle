import React from 'react';
import PropTypes from 'prop-types';

class SearchResultList extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    const {topics,} = this.props;

    const makeList = topics.map( (item, i) => (
        <li key={i}>
          <a target='_blank' href={item.data.url}>{item.data.title}</a>
        </li>
      ));

    return(
      <ul>
        {
          makeList
        }
      </ul>
    );

  }
}

export default SearchResultList;
