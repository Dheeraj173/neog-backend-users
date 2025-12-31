const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: String,
    designation: String,
    idNumber:Number,
    dob:String,
    mail:String,
    telNumber:String,
    Address:String
})

const Employee = mongoose.model("Employee",employeeSchema);

module.exports = Employee;