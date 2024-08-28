import express from "express";
import { createNote, getAllNotes, updateNote, deleteNote } from "../controller/noteController.js";

const router = express.Router();

router.post('/create-notes', createNote);
router.get('/get-notes', getAllNotes);
router.put('/update-notes/:id', updateNote);
router.delete('/delete-notes/:id', deleteNote);

export default router;
