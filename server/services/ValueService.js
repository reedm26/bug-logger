import mongoose from "mongoose";
import Value from "../models/Value";

const _repository = mongoose.model("Value", Value);

class BugsService {
  async getAll() {
    return await _repository.find({});
  }
}

const valueService = new BugsService();
export default valueService;
