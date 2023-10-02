const mongoose=require('mongoose')
const connectdb=async()=>{
try{   
  await mongoose.connect('mongodb+srv://alirhouma870:fZOeF80yOeCDN5GC@cluster0.lpvwv8x.mongodb.net/?retryWrites=true&w=majority')
    console.log('you are connected to ur db')
}catch(err){
console.log(err)
}
}
module.exports=connectdb   