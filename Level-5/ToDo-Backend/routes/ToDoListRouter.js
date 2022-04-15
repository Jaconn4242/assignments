const express = require("express")
const ToDoListRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const ToDoList = [
    {
        name: "First To-Do Item",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    }
]

// GET Request
ToDoListRouter.get("/", (req, res, next) => {
    res.send(ToDoList)
})
// Post Request
ToDoListRouter.post("/", (req, res, next) => {
    const newToDo = req.body
    newToDo._id = uuidv4()
    ToDoList.push(newToDo)
    res.send(newToDo)
})
// GET Request by id
ToDoListRouter.get("/:ToDoId", (req, res, next) => {
    const ToDoId = req.params.ToDoId
    const foundToDo = ToDoList.find(ToDo => ToDo._id === ToDoId)
    res.send(foundToDo)
})
// PUT Request by id
ToDoListRouter.put("/:ToDoId", (req, res, next) => {
    const ToDoId = req.params.ToDoId
    const update = req.body
    const ToDoIndex = ToDoList.findIndex(ToDo => ToDo._id === ToDoId)
    const updatedToDo = Object.assign(ToDoList[ToDoIndex], update)
    res.send(updatedToDo)
})

// DELETE Request by id
ToDoListRouter.delete("/:ToDoId", (req, res, next) => {
    const ToDoId = req.params.ToDoId
    const ToDoIndex = ToDoList.find(ToDo => ToDo._id === ToDoId)
    ToDoList.splice(ToDoIndex, 1)
    res.send("Successfully Deleted")
})











module.exports = ToDoListRouter