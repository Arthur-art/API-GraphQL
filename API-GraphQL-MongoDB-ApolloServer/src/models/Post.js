import mongoose from "mongoose"

const Schema = mongoose.Schema({
    title:{
        type:String,
        require: true
    },
    content:{
        type:String,
        require: true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
});

export default mongoose.model("Post", Schema);