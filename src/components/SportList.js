import React from 'react';

const SportList = props => {
  const sports = props.sports.map((sport, index) =>
    <li className="list-group-item" key={index}>
      {sport.label}
    </li>
  );
  return (
    <ul className="list-group">
      {sports}
    </ul>
  );
};

export default SportList;
