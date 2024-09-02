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
      setInputValue(''); // Clear the input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter query text"
        className="p-2 border rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
      >
        Query
      </button>
    </form>
  );
};

export default TextInput;
