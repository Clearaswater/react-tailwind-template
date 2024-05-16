import React, { useState } from 'react';
import './App.css';

const message = 'Welcome to React+Tailwind';
const btnText1 = 'Click me to view the first Power BI report';
const btnText2 = 'Click me to view the Performance Power BI report';

function App() {
  const [showFirstReport, setShowFirstReport] = useState(false);
  const [showSecondReport, setShowSecondReport] = useState(false);

  const handleFirstClick = () => {
    setShowFirstReport(true);
  };

  const handleSecondClick = () => {
    setShowSecondReport(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">{message}</h1>
      <button
        className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={handleFirstClick}
      >
        {btnText1}
      </button>
      {showFirstReport && (
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
      <button
        className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={handleSecondClick}
      >
        {btnText2}
      </button>
      {showSecondReport && (
        <div className="mt-8">
          <iframe
            title="TAS_dashboard_64070504026"
            width="600"
            height="373.5"
            src="https://app.powerbi.com/view?r=eyJrIjoiOGU1ZjFmNmItMWNmZS00ODQzLThlZDItNzdiNTRlNzBjMmZiIiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;
