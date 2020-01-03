import mongoose from "mongoose";
import Note from "../models/Note.js";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Note", Note);

class NotesService {
  async delete(id) {
    let data = await _repository.findByIdAndDelete(id);
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }
  async editNotesByBugId(BugId, update) {
    let data = await _repository.findByIdAndUpdate(BugId, update, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid Id", 404);
    }
    return data;
  }
  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }
  async getNotesByBugId(BugId) {
    let data = await _repository.find({ bug: BugId });
    return data;

    if (!data) {
      throw new ApiError("Invalid Id", 404);
    }
    return data;
  }
}
const noteService = new NotesService();
export default noteService;
