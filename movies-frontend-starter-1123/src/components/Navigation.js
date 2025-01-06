import React from 'react';
import { Link } from 'react-router-dom';


// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">Home</Link>
        <Link to="/HomeHobbies">Hobby List</Link>
        <Link to="/create">Log hobby</Link>
        
        <Link to="/gallery">Gallery</Link>
        <Link to="/order">Order Page</Link>
       
        

    </nav>
  );
}

export default Navigation;
