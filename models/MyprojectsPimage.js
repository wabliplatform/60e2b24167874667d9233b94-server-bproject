
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const myprojects_pimageSchema = new Schema({
data:String , 

name:String 


})

module.exports = {
  MyprojectsPimage : mongoose.model('MyprojectsPimage', myprojects_pimageSchema),
}

