import mongoose from "mongoose";
import Note from "../models/Note.js";

const _repository = mongoose.model("Note", Note);

class NotesService {
  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }
  async getAll() {
    return await _repository.find({});
  }
}
