import React from 'react';

const SportList = props => {
  const sports = props.sports.map((sport, index) =>
    <li className="list-group-item" key={index}>
      {sport.label}
    </li>
  );
  return (
    <div>
      <ul className="list-group">
        <h5>Options:</h5>
        {sports}
      </ul>
    </div>
  );
};

export default SportList;
