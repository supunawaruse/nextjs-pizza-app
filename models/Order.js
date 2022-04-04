import mongoose from 'mongoose'

const OrderSchema = mongoose.Schema({

    firstName:{
         type: String,
         required:true,
         maxLength:60,
    },

    lastName:{
        type: String,
         required:true,
         maxLength:60,
    },

    email:{
        type: String,
        required:true,
        maxLength:100,
    },

    contactNo:{
        type: String,
        required:true,
        maxLength:60,
    },

    address:{
        type:String,
        required:true,
        maxLength:200,
    },

    pizzas:{
        type:Array,
        required:true,
    },

    total:{
        type:Number,
        required:true,
    },

    status:{
        type:Number,
        required:true,
        default: 0
    },

    paymentMethod:{
        type:Number,
        required:true,
    },
   
},{
    timestamps:true
})

export default mongoose.models.Order ||  mongoose.model('Order',OrderSchema)

