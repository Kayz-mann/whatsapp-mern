import mongoose from "mongoose"

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp:String,
    recieved: Boolean,
})

export default mongoose.model("messagecontents", whatsappSchema)


// schema defines hw data is going to be built
// this is where we design our schema