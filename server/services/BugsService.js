import mongoose from "mongoose";
import Bug from "../models/Bug.js";

const _repository = mongoose.model("Value", Bug);

class BugsService {
  async getAll() {
    return await _repository.find({});
  }
}

const bugsService = new BugsService();
export default bugsService;
