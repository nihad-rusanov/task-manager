const Task = require("../model/tasks");

const getAllTasks = async (req, res) => {
  const allTasks = await Task.find();
  res.status(200).json({
    allTasks,
  });
};

const createTask = async(req,res) => {
  try {
    const { name } = req.body;
    if (!name) {
      throw new Error();
    }
    const task = await Task.create({ name });
    res.status(201).json({
      task,
    });
  } catch (err) {
    res.json({
      message: "please,enter something",
    });
  }
};

const getSingleTask = async(req,res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);
    if (id === Task._id) {
      throw new Error("hi");
    }
    res.status(200).json({
      task,
    });
  } catch (err) {
    res.json({
      message: "there is not such a id",
    });
  }
};

const updateTask = async(req,res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (id == Task._id || !name) {
      throw new Error();
    }
    const task = await Task.findById(id);
    task.name = name;
    task.save();

    res.status(200).json({
      task: task,
      message: "seccesfull updateded",
    });
  } catch (err) {
    res.json({
      message: "there are something wrong",
    });
  }
};

const deleteTask = async(req,res) => {
  try {
    const { id } = req.params;
    await Task.findOneAndRemove(id);
    if (id == Task._id) {
      throw new Error();
    }
    console.log(Task._id);
    res.status(200).json({
      message: "seccessful deleted",
    });
  } catch (err) {
    res.json({
      message: "there is not such a id",
    });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
