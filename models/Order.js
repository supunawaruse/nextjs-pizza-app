import mongoose from 'mongoose'

const OrderSchema = mongoose.Schema({

    customer:{
         type: String,
         required:true,
         maxLength:60,
    },

    address:{
        type:String,
        required:true,
        maxLength:200,
    },

    pizza:{
        type:[
            {
                pizzaName:{type:String, required:true},
                price:{type:Number, required:true},
                size:{type:String, required:true},
                quantity:{type:Number,required:true}
            }
        ]
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

