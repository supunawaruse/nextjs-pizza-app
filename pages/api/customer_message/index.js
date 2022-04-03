import CustomerMessage from '../../../models/CutomerMessage'
import db from '../../../utils/db.js'


export default async function handler(req,res){
    const {method} = req
    db()

    if(method === "POST"){
        try {
            const customerMessage = await CustomerMessage.create(req.body)
            res.status(200).json(customerMessage)
        } catch (error) {
           res.status(500).json(error) 
        }
    }
}

