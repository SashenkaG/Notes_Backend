import Note from '../model/noteModel.js'

// Create a new note 
export const createNote = async (req, res) => {
  try {
    console.log("request", req.body);
    console.log("newNote");
    const { title, details } = req.body;
    console.log (title)
    const newNote = new Note({
      title,
      details,
      createdDate: new Date().toLocaleDateString(),
    });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get notes
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getNote = async (req, res) => {
  try {
    console.log("note is fetched");
      const noteId = req.params.id;
      const note = await Note.findById(noteId)
      if (!note) {
          return res.status(404).json({ error: "Note not found" });
      }
      res.status(200).json(note);
  } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a note
export const updateNote = async (req, res) => {
  try {
    console.log("note is updated", req.body);
      const noteId = req.params.id;
      console.log(noteId);
      const updatedNote = await Note.findByIdAndUpdate(noteId, req.body, { new: true });
      if (!updatedNote) {
          return res.status(404).json({ error: "Note not found" });
      }
      console.log(updatedNote)
      res.status(200).json(updatedNote);
  } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ error: "Internal Server Error" });
  }
};


// Delete a note
export const deleteNote = async (req, res) => {
  try {
    console.log("deleted successfully")
    const noteId = req.params.id;
    console.log(noteId)
    await Note.findByIdAndDelete(noteId);
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
