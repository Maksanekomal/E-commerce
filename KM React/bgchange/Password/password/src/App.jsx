import React, { useState } from 'react';

function App() {
  const [password, setPassword] = useState(''); // State to store the generated password
  const [length, setLength] = useState(12); // State to store the password length (default 12)

  // Function to generate a random password
  const generatePassword = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length)); // Random character selection
    }
    setPassword(generatedPassword); // Set generated password to state
  };

  // Handle the change in range value
  const handleLengthChange = (event) => {
    setLength(event.target.value); // Update length based on range input
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900"> {/* Changed to bg-gray-900 */}
      <div className="text-center p-8 bg-white rounded shadow-lg w-full sm:w-96">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Password Generator</h1>

        {/* Range input to adjust the password length */}
        <div className="mb-4">
          <label htmlFor="password-length" className="block text-lg text-gray-800">Password Length: {length}</label>
          <input
            id="password-length"
            type="range"
            min="8"
            max="20"
            step="1"
            value={length}
            onChange={handleLengthChange}
            className="w-full h-2 bg-gray-300 rounded-lg"
          />
        </div>

        {/* Button to trigger the password generation */}
        <button
          onClick={() => generatePassword(length)} // Pass the length value
          className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
        >
          Generate Password
        </button>

        {/* Display the generated password */}
        <div className="p-4 bg-gray-200 rounded shadow-lg mt-4">
          <h2 className="text-xl font-semibold text-gray-800">Generated Password:</h2>
          <p className="mt-2 text-gray-800">{password ? password : "Your password will appear here."}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
