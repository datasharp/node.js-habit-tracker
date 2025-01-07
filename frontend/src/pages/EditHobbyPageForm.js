import React, { useState, useEffect }  from 'react';
import { useNavigate } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";


export const EditHobbyPageForm = ({ hobbyToEdit }) => {
 
    const [name, setName]          = useState('');
    const [duration, setDuration]   = useState('');
    const [dateCompleted, setdateCompleted] = useState('');
    const [type, setType]          = useState('');

    const redirect = useNavigate();

    useEffect(() => {
        if (hobbyToEdit) {
            setName(hobbyToEdit.name);
            setDuration(hobbyToEdit.duration);

            setdateCompleted(formatDate(hobbyToEdit.dateCompleted));
            setType(hobbyToEdit.type);
        }
    }, [hobbyToEdit]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const editHobby = async () => {
        const response = await fetch(`/hobbies/${hobbyToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                duration: duration, 
                dateCompleted: dateCompleted,
                type: type
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Hobby successfully edited.`);
        } else {
            const errMessage = await response.json();
            alert(`Edit hobby failed due to: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2>Edit a hobby</h2>
            <p>Edit a hobby that has been completed.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which hobby are you editing?</legend>

                    <label for="name">Hobby name</label>
                    <input
                        type="text"
                        placeholder="Name of the hobby"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="duration">Duration of hobby</label>
                    <input
                        type="number"
                        value={duration}
                        placeholder="Duration of the hobby"
                        onChange={e => setDuration(e.target.value)} 
                        id="duration" />

                    <label for="dateCompleted">Date of hobby</label>
                    <input
                        type="date"
                        value={dateCompleted}
                        placeholder="Date hobby was done"
                        onChange={e => setdateCompleted(e.target.value)} 
                        id="dateCompleted" />

                    <label for="type">Type of hobby</label>
                    <input
                        type="text"
                        value={type}
                        placeholder="Type or category of hobby"
                        onChange={e => setType(e.target.value)} 
                        id="type" />

                    <label for="submit">
                    <button
                        onClick={editHobby}
                        id="submit"
                        
                    >Save{MdModeEditOutline}</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditHobbyPageForm;