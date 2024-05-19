const mongoose = require('mongoose');
const roomSchema=new mongoose.Schema({
firstname:{
    type:String,
    required:'This file is required.'
},
lastname:{
    type:String,
    required:'This field is required.'
},
email:{
    type:String,
    required:'This file is required.'
},
phonenumber:{
    type:Array,
    required:'This field is required.'
},
// category:{
//     type:String,
//     enum:['Thai','American','Chinese','Mexican','Indian'],
//     required:'This field is required.'
// },
image:{
    type:String,
    required:'This file is required.'
},
});
// roomSchema.index({ name: 'text', description: 'text' });
//wild card indexing
// recipeSchema.index({"$**":"text" });
module.exports= mongoose.model('Room',roomSchema);