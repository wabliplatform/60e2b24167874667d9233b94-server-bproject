
const { MyprojectsPimageSchema } =require('./MyprojectsPimage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myprojectsSchema = new Schema({
Underscoreid:String , 
pimage:  
MyprojectsPimageSchema
 , 
ptitle:String , 
pstart:String , 
pend:String , 
pduration:String , 
pabstract:String , 
pdescription:String , 
pga:String , 
pwebsite:String 

})



module.exports = {
  Myprojects : mongoose.model('myprojects', myprojectsSchema),
}

