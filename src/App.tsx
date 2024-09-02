import React, { useState, useEffect } from 'react';
import TextInput from './components/TextInput';
import Dropdown from './components/Dropdown';
import JsonDisplay from './components/JsonDisplay';
import fetchJsonData from './components/utils/fetchJsonData';
import countECharacters from './components/utils/countECharacters';
import processData from './components/utils/processData';

const App = () => {
  const [pastEntries, setPastEntries] = useState<string[]>([]);
  const [jsonData, setJsonData] = useState<any>(null);
  const [processedData, setProcessedData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('pastEntries') || '[]');
    setPastEntries(savedEntries);
  }, []);

  const handleTextSubmit = async (text: string) => {
    setError(null);
    const updatedEntries = [text, ...pastEntries].slice(0, 5);
    setPastEntries(updatedEntries);
    localStorage.setItem('pastEntries', JSON.stringify(updatedEntries));

    const response = await fetchJsonData(text);
    if (response.success) {
      setJsonData(response.data);
      const count = countECharacters(response.data);
      const sortedData = processData(response.data);
      setProcessedData({ count, sortedData });
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
      {jsonData && <JsonDisplay originalData={jsonData} processedData={processedData} />}
    </div>
  );
};

export default App;