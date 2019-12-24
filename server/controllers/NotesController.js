import express from "express";
import NotesService from "../services/NotesService.js";

export default class NotesController {
  constructor() {
    this.router = express.Router().get("");
  }
  async getById(res, req, next) {
    try {
      let data = await NotesService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
