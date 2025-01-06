import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Hobby({ hobby, onEdit, onDelete }) {
    return (
        <tr>
            <td>{hobby.name}</td>
            <td>{hobby.duration}</td>
            <td>{hobby.dateCompleted}</td>
            <td>{hobby.type}</td>

            {/* Update these icons to something that matches your style. */}
            <td><MdDeleteForever onClick={() => onDelete(hobby._id)} /></td>
            <td><MdEdit onClick={() => onEdit(hobby)} /></td>
        </tr>
    );
}

export default Hobby;