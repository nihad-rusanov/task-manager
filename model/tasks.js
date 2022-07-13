const mongoose = require("mongoose")
const Schema = mongoose.Schema

const taskSchema = new Schema({
    name:{
        type:String,
        required:true,
        maxlength:20
    },
    completed:{
        type:Boolean,
        default:false
    }
}
)

module.exports = mongoose.model("Task",taskSchema)
