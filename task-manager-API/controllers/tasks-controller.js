const Task = require("../models/task-model");

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: TaskID } = req.params;
    const task = await Task.findOne({ _id: TaskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${TaskID}` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const updateTask = (req, res) => {
  res.send(`update task`);
};
const deleteTask = async (req, res) => {
  try {
    const { id: TaskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: TaskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${TaskID}` });
    }
    res.status(200).json({ message: "Task has been deleted" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
