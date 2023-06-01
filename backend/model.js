const mongoose = require('mongoose')

const login = mongoose.Schema({

email:{type:String},
password:{type:String},

})

const model = mongoose.model("Login",login);
module.exports = model