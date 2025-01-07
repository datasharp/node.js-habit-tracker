import React from 'react';
import Hobby from './Hobby';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function HobbyList({ hobbies, onDelete, onEdit }) {
    return (
        <table id="hobbies">
            <caption>Add and Edit Hobbies</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Duration</th>
                    <th>Date Completed</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {hobbies.map((hobby, i) => 
                    <Hobby 
                        hobby={hobby} 
                        key={i}
                        onDelete={onDelete}
                        
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default HobbyList;
