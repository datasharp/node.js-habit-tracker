// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 


import HobbiesPage from './pages/HobbiesPage';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddHobbyPageForm from './pages/AddHobbyPageForm';
import EditHobbyPageForm from './pages/EditHobbyPageForm';



// Imports of other pages
import TopicsPage from './pages/TopicsPage.js';
import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import OrderPage from './pages/OrderPage';


// Define the function that renders the content in Routes, using State.
function App() {

  const [hobby, setHobbyToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Portfolio</h1>
            <p>This is the web dev portfolio of Kayla Sharp.</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path="/" element={<HomePage/>} />
                    
                    <Route path="/homeHobbies" element={<HobbiesPage setHobby={setHobbyToEdit}/>} />
                    <Route path="/topics" element={<TopicsPage />} />   
                  

                    {/* Or these if your schema requires SHORT data input: */}
                     <Route path="/create" element={<AddHobbyPageForm />} />   
                     <Route path="/update" element={<EditHobbyPageForm hobbyToEdit={hobby} />} />

                    {/* extra credit pages */}
                    <Route path="/gallery" element={<GalleryPage/>} />
                    <Route path="/order" element={<OrderPage/>} />

                    
                     
                </Routes>
              </section>
          </main>

          <footer>
            <p>Copyright statement</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;