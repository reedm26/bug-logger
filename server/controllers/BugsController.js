import express from "express";
import BugsService from "../services/BugsService.js";
import NotesService from "../services/NotesService";

export default class BugsController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAllBugs)
      .get("/:id", this.getBugsById)
      .get("/:id/notes", this.getNotes)
      .post("", this.newBug)
      .put("/:id", this.edit)
      .delete("/:id", this.deleteBug);

    //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
  }

  async deleteBug(req, res, next) {
    try {
      await BugsService.deleteBug(req.params.id);
      return res.send("Successful delete");
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let data = await BugsService.edit(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getNotes(req, res, next) {
    try {
      let data = await NotesService.getNotes();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getBugsById(req, res, next) {
    try {
      let data = await BugsService.getBugsById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getAllBugs(req, res, next) {
    try {
      let data = await BugsService.getAllBugs();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async newBug(req, res, next) {
    try {
      let data = await BugsService.newBug(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
}
