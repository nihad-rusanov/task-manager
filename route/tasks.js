const express = require("express");
const router = express();
const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router
  .route("/")
  .get(getAllTasks)
  .post(createTask);

router
  .route("/:id")
  .get(getSingleTask)
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;

// router.route('/').get((req,res) =>{
//     res.send("hi world")
// })
