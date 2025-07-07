const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    age:{type:Number, required:true},
    gender:{type:String, required:true},
    college:{type:String, default:"AIARKP"},
    result:{type:String, required:true}
})

module.exports = mongoose.model("Students", studentSchema)