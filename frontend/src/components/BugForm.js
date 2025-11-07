// Form to add a new bug
import React, { useState } from 'react';

export default function BugForm({ setBugs }) {
    const [title, setTitle] = useState('');

    // Send new bug to backend
    const handleSubmit = async e => {
        e.preventDefault();
        const currentTitle = title;
        setTitle('');

        const res = await fetch('http://localhost:5000/api/bugs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: currentTitle })
        });
    const newBug = await res.json();

    // Add a new bug to the list
    setBugs(prev => [...prev, newBug]);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Input for the bug title */}
            <input value={title} onChange={e => setTitle(e.target.value)}
            placeholder="Bug title"/>
            <button type="submit">Add Bug</button>
        </form>
    );
}
