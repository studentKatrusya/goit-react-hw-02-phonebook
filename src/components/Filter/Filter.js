import React from 'react';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <div className={s.flex}>
      <label className={s.label}>Find contact by name</label>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default Filter;
