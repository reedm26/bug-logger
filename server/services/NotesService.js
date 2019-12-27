import mongoose from "mongoose";
import Note from "../models/Note.js";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Note", Note);

class NotesService {
  async delete(id) {
    let data = await _repository.findOneAndDelete(id);
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }
  async getNotesById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid Id");
    }
    return data;
  }
  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }
  async getBugsNotes(bugId) {
    return await _repository.find({});
  }
}
const noteService = new NotesService();
export default noteService;
