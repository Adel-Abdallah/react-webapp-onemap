import React, { useState } from 'react';

interface TextInputProps {
  onSubmit: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter query text"
        className="p-2 border rounded w-full"
      />
    </form>
  );
};

export default TextInput;
