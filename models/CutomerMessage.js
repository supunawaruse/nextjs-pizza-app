import mongoose from 'mongoose'

const CustomerMessageSchema = mongoose.Schema({

    customerName:{
         type: String,
         required:true,
         maxLength:100,
    },

    email:{
        type:String,
        required:true,
        maxLength:100,
    },

    subject:{
        type:String,
        required:true,
    },

    message:{
        type:String,
        required:true,
        maxLength:500
    },

},{
    timestamps:true
})

export default mongoose.models.CustomerMessage ||  mongoose.model('CustomerMessage',CustomerMessageSchema)

