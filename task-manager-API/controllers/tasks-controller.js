const Task = require("../models/task-model");

const getAllTasks = (req, res) => {
  res.send(`all taks`);
};
const createTask = (req, res) => {
  res.json(req.body);
  // res.send(`create task`);
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
  // res.send(`Get one task`);
};
const updateTask = (req, res) => {
  res.send(`update task`);
};
const deleteTask = (req, res) => {
  res.send(`delete task`);
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
