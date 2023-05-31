const mongoose = require("mongoose") 

const blogSchema = new mongoose.Schema({ 
    title:{
        type:String,
        required:[true, "title is required"],
        trim:true
    },
    body:{
        type:String,
        required:[true, "body is required"],
        trim:true
    },
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Author",
        required:[true, "authorId is required"]       
    },
    tags:[String],
    category:{
        type:String,
        required:[true, "category is required"],
        trim:true
    },
    subcategory:[String],
    deletedAt:{
        type:Date,
        default:null
    },
    publishedAt:{
        type:Date,
        default:null
    },
    isDeleted:{
        type:Boolean,
        default:false    
    },
    isPublished:{
        type:Boolean,
        default:false   
    }   
},{timestamps:true})

module.exports = mongoose.model("Blog",blogSchema)