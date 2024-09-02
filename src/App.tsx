import React, { useState, useEffect } from 'react';
import TextInput from './components/TextInput';
import Dropdown from './components/Dropdown';
import FoldableJsonDisplay from './components/FoldableJsonDisplay';
import fetchJsonData from './components/utils/fetchJsonData';
import countECharacters from './components/utils/countECharacters';
import processData from './components/utils/processData';

const App = () => {
  const [pastEntries, setPastEntries] = useState<string[]>([]);
  const [responses, setResponses] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('pastEntries') || '[]');
    setPastEntries(savedEntries);
  }, []);

  const handleTextSubmit = async (text: string) => {
    setError(null);

    const updatedEntries = [text, ...pastEntries.filter(entry => entry !== text)].slice(0, 5);
    setPastEntries(updatedEntries);
    localStorage.setItem('pastEntries', JSON.stringify(updatedEntries));

    const response = await fetchJsonData(text);
    if (response.success) {
      const count = countECharacters(response.data);
      const sortedData = processData(response.data);
      setResponses([{ jsonData: response.data, processedData: { count, sortedData }, title: text }, ...responses]);
    } else {
      setError(response.message || 'Failed to fetch data. Please try again.');
    }
  };

  const handleSelect = (text: string) => {
    handleTextSubmit(text);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Web Application</h1>
      <TextInput onSubmit={handleTextSubmit} />
      <Dropdown options={pastEntries} onSelect={handleSelect} />
      {error && <div className="text-red-500 mt-4">{error}</div>}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {responses.map((response, index) => (
          <FoldableJsonDisplay
            key={index}
            title={`Response for "${response.title}"`}
            jsonData={response.jsonData}
            processedData={response.processedData}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
