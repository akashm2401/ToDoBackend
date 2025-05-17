import { connectDB } from "../models/db.js";
import { TodoItems } from "../models/TodoItems.js";


export const getTodos = async (req, res) => {
    try {
        connectDB();
        const data = await TodoItems.find();
        res.json(
            {message: "Success", data: data}
        )
    } catch(err) {
        res.json(
            {error: err}
        )
    }
}

export const createTodo = async (req, res) => {

    try {

        const {title, desc} = req.body;
        console.log(title, desc);
        connectDB();
        const todoItem = new TodoItems({title, desc});
        await todoItem.save();
        
        res.json(
            {message: "Success"}
        )
    } catch (err) {
        res.json(
            {error: err}
        )
    }
}


export const deletTodo = async (req, res) => {

    try {

        const {id} = req.body;
        console.log(id);
        connectDB();
        await TodoItems.findByIdAndDelete(id);
        // TodoItems.save();
        
        res.json(
            {message: "Success"}
        )
    } catch (err) {
        res.json(
            {error: err}
        )
    }
}

export const updateTodo = async (req, res) => {
    try {

        const {id, title, desc} = req.body;
        console.log(id, title, desc);
        connectDB();
        await TodoItems.findOneAndUpdate({_id: id}, {title, desc}, { new: true });
        // TodoItems.save();
        
        res.json(
            {message: "Success"}
        )
    } catch (err) {
        res.json(
            {error: err}
        )
    }
}