import Order from '../../../models/Order'
import db from '../../../utils/db.js'

export default async function handler(req,res){
    const {method, query:{id}} = req
    db()

    if(method === "GET"){
        try {
            const order = await Order.findById(id)
            res.status(200).json(order)
        } catch (error) {
            res.status(500).json(error) 
        }
    }

    if(method === "PUT"){
        try {
            const order = await Order.findById(id)
            res.status(200).json(order)
        } catch (error) {
            res.status(500).json(error) 
        }
    }

}