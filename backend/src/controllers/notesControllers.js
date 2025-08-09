import Note from '../../models/Note.js';

export async function getAllNotes(req, res)  {

    try {
        const notes = await Note.find()
        res.status(200).json(notes);

    } catch(error) {
         
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({
            message: "Error fetching notes",
          
        });
    }
   

};   

export  async function createNote (req, res)  {

    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content});
        await newNote.save();
        res.status(201).json({
            message: "Note created successfully"})

    } catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({
            message: "Error creating notes",
          
        }); 

    }
   

};   

export  async function updateNote (req, res) { 
    res.status(201).json({
        message: "Note updated successfully"});
}

export async  function deleteNote (req, res) { 
    res.status(201).json({
        message: "Note deleted successfully"});
} 