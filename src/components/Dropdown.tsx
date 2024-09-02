import React from 'react';

interface DropdownProps {
  options: string[];
  onSelect: (text: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="p-2 border rounded w-full mb-4"
    >
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
