import express from "express";
import NotesService from "../services/NotesService.js";

export default class NotesController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.create)
      .post("/:id", this.delete);
  }
  async delete(res, req, next) {
    try {
      let data = await NotesService.delete(req.params.id);
      return res.send("Successful Delete of Note");
    } catch (error) {
      next(error);
    }
  }

  async create(res, req, next) {
    try {
      let data = await NotesService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async getNotesById(res, req, next) {
    try {
      let data = await NotesService.getNotesById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
