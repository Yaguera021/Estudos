import React from 'react';
import GroupProps from '../../interfaces/GroupProps';
import './index.css';

const SelectGroup: React.FC<GroupProps> = ({ label, name, options, selectedValue, onChange }) => {
  return (
    <div className={`${name}-container`}>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={selectedValue} onChange={(e) => onChange(Number(e.target.value))}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectGroup;
