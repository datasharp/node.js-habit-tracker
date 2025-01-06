import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddHobbyPageForm = () => {

    const [name, setName]          = useState('');
    const [duration, setDuration]   = useState('');
    const [dateCompleted, setdateCompleted] = useState('');
    const [type, setType]          = useState('');
    
    const redirect = useNavigate();

    const addHobby = async () => {
        const newHobby = { name, duration, dateCompleted, type };
        const response = await fetch('/hobbies', {
            method: 'post',
            body: JSON.stringify(newHobby),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Hobby added succesfully`);
            redirect("/HobbiesPage.js");
        } else {
            alert(`Hobby not added due to: = ${response.status}`);
            redirect("/HobbiesPage.js");
        }
    };


    return (
        <>
        <article>
            <h2>Add a hobby</h2>
            <p>This is where you can add a new hobby to the list.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which hoby are you adding?</legend>
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
                        type="submit"
                        onClick={addHobby}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddHobbyPageForm;