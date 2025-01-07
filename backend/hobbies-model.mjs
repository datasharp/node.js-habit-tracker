// Models for the Hobby Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Failed to connect to Hobby Database. Try again.' });
    } else  {
        console.log('Success: You have successfully connected.');
    }
});




// SCHEMA: Define the collection's schema.
const hobbySchema = mongoose.Schema({ 
	name:    { type: String, required: true },
	duration:     { type: Number, required: true },
	dateCompleted: { type: Date, required: true },
    type: { type: String, required: true }
});

// Compile the model from the schema 
// by defining the collection name "hobbies". 
const hobbies = mongoose.model('Hobbies', hobbySchema);


// CREATE model *****************************************
const createHobby = async (name, duration, dateCompleted, type) => {
    const hobby = new hobbies({ 
        name: name, 
        duration: duration, 
        dateCompleted: dateCompleted ,
        type: type
    });
    return hobby.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveHobbies = async () => {
    const query = hobbies.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveHobbyByID = async (_id) => {
    const query = hobbies.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteHobbyById = async (_id) => {
    const result = await hobbies.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateHobby = async (_id, name, duration, dateCompleted, type) => {
    const result = await hobbies.replaceOne({_id: _id }, {
        name: name, 
        duration: duration, 
        dateCompleted: dateCompleted ,
        type: type
    });
    return { 
        _id: _id, 
        name: name, 
        duration: duration, 
        dateCompleted: dateCompleted ,
        type: type 
    }
}

// EXPORT the variables for use in the controller file.
export { createHobby, retrieveHobbies, retrieveHobbyByID, updateHobby, deleteHobbyById }