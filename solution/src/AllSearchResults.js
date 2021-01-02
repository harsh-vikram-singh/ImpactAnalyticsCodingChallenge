import React from 'react';
import SingleSearchResult from './SingleSearchResult';

const AllSearchResults = ({ matchingResults, clickHandler }) => {
  if (matchingResults.length > 0) {
    return (
      <div>
        {matchingResults.map(val => <SingleSearchResult info={val} key={val.id} clickHandler={clickHandler} />)}
      </div>
    );
  }
  return <></>;
}

export default AllSearchResults;