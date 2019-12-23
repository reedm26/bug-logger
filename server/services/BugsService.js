import mongoose from "mongoose";
import Bug from "../models/Bug.js";

const _repository = mongoose.model("Bug", Bug);

class BugsService {
  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }
  async getAll() {
    return await _repository.find({});
  }
}

const bugsService = new BugsService();
export default bugsService;
