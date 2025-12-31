const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String},
    priority:{type:String, enum: ['Low', 'Medium', 'High']},
    dueDate: {type:Date},
    completed: Boolean,
    tags: [{type:String}],
},
{timestamps: true}
)

const Todos = mongoose.model("Todos",todosSchema);

module.exports = Todos;