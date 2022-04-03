import Order from '../../../models/Order'
import db from '../../../utils/db.js'

export default async function handler(req,res){
    const {method} = req
    db()

    if(method === "GET"){
        try {
            const allOrders = await Order.find()
            res.status(200).json(allOrders)
        } catch (error) {
            res.status(500).json(error) 
        }
    }

    if(method === "POST"){
        try {
            const order = await Order.create(req.body)
            res.status(200).json(order)
        } catch (error) {
           res.status(500).json(error) 
        }
    }

}