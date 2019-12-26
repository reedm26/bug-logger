import mongoose from "mongoose";
import Bug from "../models/Bug.js";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Bug", Bug);

class BugsService {
  edit(id, body) {
    throw new Error("Method not implemented.");
  }
  deleteBug(id) {
    throw new Error("Method not implemented.");
  }
  getBugsNotes() {
    throw new Error("Method not implemented.");
  }
  async getBugsById() {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
  }
  async newBug(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }
  async getAllBugs() {
    return await _repository.find({});
  }
}

const bugsService = new BugsService();
export default bugsService;
