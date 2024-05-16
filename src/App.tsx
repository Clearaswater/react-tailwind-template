import React, { useState } from 'react';
import './App.css';

const message = 'Welcome to React+Tailwind';
const btnText = 'Click me to view the Power BI report';

function App() {
  const [showReport, setShowReport] = useState(false);

  const handleClick = () => {
    setShowReport(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">{message}</h1>
      <button
        className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        {btnText}
      </button>
      {showReport && (
        <div className="mt-8">
          <iframe
            title="try_finance"
            width="600"
            height="373.5"
            src="https://app.powerbi.com/view?r=eyJrIjoiZGVmNzIwNTktY2ZlYy00ZWQwLTg1NTYtYTJlNTU1NzIxNmExIiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;
