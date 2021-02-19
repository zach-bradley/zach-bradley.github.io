import React from 'react';
import './ItemGroup.css';
import {v4 as uuid} from 'uuid';

function ItemGroup({list}) {
  return (
    <div className="ItemGroup">
      {list?.map(item => (
        <div key={uuid()} className="Item">{item}</div>
      ))}
    </div>
  )
}

export default ItemGroup
