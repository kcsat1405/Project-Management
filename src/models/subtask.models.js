import mongoose, {Schema} from "mongoose"

const subTask = new Schema({
    title:{
        required: true,
        type: String,
        trim: true
    },
    task:{
        type: Schema.Types.ObjectId,
        ref: "Task",
        required: true
    },
    isCompleted:{
        type: Boolean,
        default: false
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
},{timestamps: true})

export const Subtask = mongoose.model("Subtask", subTaskSchema)