import { Router } from "express";
const rt = Router();

// Paths: for user add & delete & update
import user_controller from "./controllers/user.controller.js";
rt.route("/add/user").post((req, res) => {
  console.log(req.body);
});
rt.route("/delete/user").delete((req, res) => {});
rt.route("/update/user/:id").put((req, res) => {});
rt.route("/get/user").get((req, res) => {});
rt.route("/get/all/user").get((req, res) => {});
rt.route("/get/user/:id").get((req, res) => {});

export default rt;
