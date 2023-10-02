const mongoose=require('mongoose')
const contactSchema=mongoose.Schema({
 Name:String,
 lastName:String,
 age: Number,
 email:{
    type:String,
    unique:'True'
 }

})
module.exports=mongoose.model('contactSchema',contactSchema)