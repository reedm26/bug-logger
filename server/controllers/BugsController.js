import express from "express";
import BugsService from "../services/BugsService.js";

export default class BugsController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .post("", this.create);

    //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
  }

  async getAll(req, res, next) {
    try {
      let data = await BugsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await BugsService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
}
