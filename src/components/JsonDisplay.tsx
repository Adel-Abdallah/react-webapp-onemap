import React from 'react';

interface JsonDisplayProps {
  originalData: any;
  processedData: { count: number; sortedData: any };
}

const JsonDisplay: React.FC<JsonDisplayProps> = ({ originalData, processedData }) => {
  const renderJson = (data: any) => (
    <pre className="bg-gray-100 p-4 rounded overflow-auto">{JSON.stringify(data, null, 2)}</pre>
  );

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Original JSON Data</h2>
      {renderJson(originalData)}

      {processedData && (
        <>
          <h2 className="text-xl font-bold mt-4">Processed JSON Data</h2>
          <p className="mb-2">Total 'e' and 'E' count: <span className="font-mono">{processedData.count}</span></p>
          {renderJson(processedData.sortedData)}
        </>
      )}
    </div>
  );
};

export default JsonDisplay;
