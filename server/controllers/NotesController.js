import express from "express";
import NotesService from "../services/NotesService.js";

export default class NotesController {
  constructor() {
    this.router = express
      .Router()
      .post("", this.create)
      .delete("/:id", this.delete);
  }
  async delete(req, res, next) {
    try {
      let data = await NotesService.delete(req.params.id);
      return res.send("Successful Delete of Note");
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await NotesService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  // async getNotesByBugId(res, req, next) {
  //   try {
  //     let data = await NotesService.getNotesByBugId(req.params.id);
  //     return res.send(data);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}
