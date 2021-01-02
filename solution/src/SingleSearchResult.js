import React from 'react';

const SingleSearchResult = ({ info, clickHandler }) => {
  return (
    <div className="cursor-pointer hover:shadow p-4 border" onClick={() => clickHandler(info)} key={info.id}>
      <div>{info.name}</div>
    </div>
  );
}

export default SingleSearchResult;