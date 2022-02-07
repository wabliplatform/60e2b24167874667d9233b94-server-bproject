
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tasksSchema = new Schema({
Underscoreid:String , 

tname:String , 

sdate:Number , 

edate:Number , 

vpms:Number , 

tdescription:String 


})

module.exports = {
  Tasks : mongoose.model('Tasks', tasksSchema),
}

