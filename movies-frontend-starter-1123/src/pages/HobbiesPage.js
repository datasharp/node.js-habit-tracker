import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HobbyList from '../components/HobbyList';
import { Link } from 'react-router-dom';

import { IoIosAddCircle, } from "react-icons/io";
import {MdModeEditOutline, MdDeleteSweep } from "react-icons/md";

function HobbiesPage({ setHobby }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [hobbies, setHobbies] = useState([]);

    // RETRIEVE the entire list of hobbies
    const loadHobbies = async () => {
        const response = await fetch('/hobbies');
        const hobbies = await response.json();
        setHobbies(hobbies);
    } 
    

    // UPDATE a single hobby
    const onEditHobby = async hobby => {
        setHobby(hobby);
        redirect("/update");
        
    }


    // DELETE a single hobby  
    const onDeleteHobby = async _id => {
        const response = await fetch(`/hobbies/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/hobbies');
            const hobbies = await getResponse.json();
            setHobbies(hobbies);
        } else {
            console.error(`helpful deletion message = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the hobbies
    useEffect(() => {
        loadHobbies();
    }, []);

    // DISPLAY the hobbies
    return (
        <>
            <h2>List of Hobbies</h2>
            <p>This is the hobby database.</p>
            <Link to="/create"><IoIosAddCircle />Add Hobby</Link>
            <HobbyList 
                hobbies={hobbies} 
                onEdit={onEditHobby} 
                onDelete={onDeleteHobby} 
                editIcon={<MdModeEditOutline/>}
                deleteIcon={<MdDeleteSweep />}
            />
        </>
    );
}

export default HobbiesPage;