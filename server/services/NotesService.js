import mongoose from "mongoose";
import Note from "../models/Note.js";

const _repository = mongoose.model("Note", Note);

class NotesService {
  async getById(id) {
    return await _repository.findById(id);
  }
  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }
  async getAllBugs() {
    return await _repository.find({});
  }
}
const noteService = new NotesService();
export default noteService;
