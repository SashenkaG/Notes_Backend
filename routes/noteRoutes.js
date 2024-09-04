import express from "express";
import { createNote, getAllNotes, updateNote, deleteNote, getNote } from "../controller/noteController.js";

const router = express.Router();

router.post('/create-notes', createNote);
router.get('/get-notes', getAllNotes);
router.get('/get-notes/:id', getNote);
router.put('/update-notes/:id', updateNote);
router.delete('/delete-notes/:id', deleteNote);

export default router;
