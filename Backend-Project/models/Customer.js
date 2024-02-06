const mongoose = require("mongoose");
const CustomerSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    email : {
        type :String,
        required : true
    },
    password : {
        type : String,
        required : true
},
})
const CustomerModel = mongoose.model("customers",CustomerSchema)
module.exports = CustomerModel