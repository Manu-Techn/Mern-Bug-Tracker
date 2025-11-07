// import React and hooks
import React, { useState, useEffect } from 'react';
import BugList from './components/BugList';
import BugForm from './components/BugForm';
import ErrorBoundary from './components/ErrorBoundary'; // boundary import

function App() { // store all bugs
  const [bugs, setBugs ] = useState([]); // load bugs from the backend
  useEffect(() => {
    fetch('http://localhost:5000/api/bugs')
      .then(res => res.json())
      .then(data => setBugs(data));
  }, []);

  return (
    <div>
      <h1>Bug Tracker</h1>
      {/* Form to add new bugs */}
      <BugForm setBugs={setBugs} />
      {/* List of all bugs */}
      <BugList bugs={bugs} setBugs={setBugs} />
    </div>
  );
}

export default App;
