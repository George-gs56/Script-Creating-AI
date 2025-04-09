import { useState } from 'react';
import './CreateScript.css';

const CreateScript = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const generateScript = async () => {
    setResponse("Generating...");

    // Mock Gemini/ChatGPT response
    setTimeout(() => {
      setResponse(`Generated script based on: "${prompt}"`);
    }, 1500);
  };

  return (
    <div className="create-script-container">
      <h2>AI Script Generator</h2>
      <textarea
        className="create-script-textarea"
        rows="4"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt"
      />
      <button className="generate-btn" onClick={generateScript}>Generate Script</button>
      <div className="response-card">
        <h5>AI Response:</h5>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default CreateScript;