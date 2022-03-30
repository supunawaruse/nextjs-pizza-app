import mongoose from "mongoose"

const PizzaSchema = mongoose.Schema({

    title:{
        type:String,
        required:true,
        maxLength:60,
    },

    desc:{
        type:String,
        required:true,
        maxLength:200,
    },

    img:{
        type:String,
        required:true
    },

    prices:{
        type:[Number],
        required:true
    },

    extraOptions:{
        type:[
            {
                text:{type:String, required:true},
                price:{type:Number, required:true}
            }
        ],
        required:true,
    },
    
},{
    timestamps:true
})

export default mongoose.models.Pizza || mongoose.model("Pizza",PizzaSchema)