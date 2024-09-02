import React, { useState } from 'react';

interface TextInputProps {
  onSubmit: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = () => {
    if (inputText.trim()) {
      onSubmit(inputText);
      setInputText('');
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter query text"
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleSubmit}
        className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
      >
        Submit
      </button>
    </div>
  );
};

export default TextInput;
