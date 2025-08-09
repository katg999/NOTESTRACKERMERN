import mongoose from "mongoose";


//1 - you need to create a schema
//2- you could create a model based off that schema


const noteSchema = new mongoose.Schema({

    title : {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,

    },

    
},
{ timestamps: true } //this will add createdAt and updatedAt fields to the schema
);



const Note = mongoose.model("Note", noteSchema); //create a model based on the schema

export default Note;