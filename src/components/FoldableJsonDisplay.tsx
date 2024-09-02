import React, { useState } from 'react';

interface FoldableJsonDisplayProps {
  title: string;
  jsonData: any;
  processedData: any;
}

const FoldableJsonDisplay: React.FC<FoldableJsonDisplayProps> = ({ title, jsonData, processedData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="bg-yellow-100 p-4 rounded border">
      <button onClick={toggleOpen} className="bg-blue-500 text-white p-2 rounded w-full text-left">
        {isOpen ? `Hide ${title}` : `Show ${title}`}
      </button>
      {isOpen && (
        <div className="mt-2 p-2 border rounded">
          <h3 className="font-bold mb-2">Original JSON Data</h3>
          <pre className="bg-gray-200 p-2 rounded overflow-auto">{JSON.stringify(jsonData, null, 2)}</pre>
          <h3 className="font-bold mt-4 mb-2">Processed JSON Data</h3>
          <pre className="bg-gray-200 p-2 rounded overflow-auto">{JSON.stringify(processedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FoldableJsonDisplay;
