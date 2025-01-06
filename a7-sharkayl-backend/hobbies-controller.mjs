// Controllers for the Hobby Collection

import 'dotenv/config';
import express from 'express';
import * as hobbies from './hobbies-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/hobbies', (req,res) => { 
    hobbies.createHobby(
        req.body.name, 
        req.body.duration, 
        req.body.dateCompleted,
        req.body.type
        )
        .then(hobby => {
            console.log(`"${hobby.title}" was added to the collection.`);
            res.status(201).json(hobby);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed: Creating controller has failed.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/hobbies', (req, res) => {
    hobbies.retrieveHobbies()
        .then(hobbies => { 
            if (hobbies !== null) {
                console.log(`All hobbies were retrieved from the collection.`);
                res.json(hobbies);
            } else {
                res.status(404).json({ Error: 'Fail: The resource was not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed: There has been a bad request in getting hobbies.'});
        });
});


// RETRIEVE by ID controller
app.get('/hobbies/:_id', (req, res) => {
    hobbies.retrieveHobbyByID(req.params._id)
    .then(hobby => { 
        if (hobby !== null) {
            console.log(`"${hobby.title}" was retrieved, based on its ID.`);
            res.json(hobby);
        } else {
            res.status(404).json({ Error: 'Fail: ID was not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Fail: There was a bad request, maybe an ID was entered wrong.' });
    });

});


// UPDATE controller ************************************
app.put('/hobbies/:_id', (req, res) => {
    hobbies.updateHobby(
        req.params._id, 
        req.body.name, 
        req.body.duration, 
        req.body.dateCompleted,
        req.body.type
    )
    .then(hobby => {
        console.log(`"${hobby.title}" was updated.`);
        res.json(hobby);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Fail: Failed to update hobby.' });
    });
});


// DELETE Controller ******************************
app.delete('/hobbies/:_id', (req, res) => {
    hobbies.deleteHobbyById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} hobby was deleted.`);
                res.status(200).send({ Success: 'Successfully deleted hobby.' });
            } else {
                res.status(404).json({ Error: 'Failed to delete hobby. Hobby not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'There was some internal error.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});