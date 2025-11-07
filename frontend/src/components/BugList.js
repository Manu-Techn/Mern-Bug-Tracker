// Show all bugs
import React from "react";

export default function BugList({ bugs, setBugs }) {
    const handleStatusChange = async (IdleDeadline, newStatus) => {
        const res = await fetch(`http://localhost:5000/api/bugs/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: newStatus }),
        });
        const updateBug = await res.json();
        setBugs(prev => 
            prev.map(bug => (bug._id === id ? updateBug : bug))
        );
    };

    // Delete a bug
    const handleDelete = async id => {
        await fetch(`http://localhost:5000/api/bugs/${id}`, { method: 'DELETE' });
        setBugs(prev => prev.filter(bug => bug._id !==id));
    };

    return (
        <ul>
            {/* Go through each bug and show its title and status */}
            {bugs.map(bug => (
                <li key={bug._id}>
                    {bug.title} - {bug.status}
                    <button onClick={() => handleStatusChange(bug._id, 'in-progress')}>In Progress</button>
                    <button onClick={() => handleStatusChange(bug._id, 'resolved')}>Resolved</button>
                    <button onClick={() => handleDelete(bug._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}