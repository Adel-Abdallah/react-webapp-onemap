import React from 'react';

const Dropdown: React.FC<{ options: string[], onSelect: (text: string) => void }> = ({ options, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)} className="border p-2 rounded w-full">
      <option value="">Select from past entries</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
