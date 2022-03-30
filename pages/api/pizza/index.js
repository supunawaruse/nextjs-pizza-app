import Pizza from '../../../models/Pizza.js'
import db from '../../../utils/db.js'


export default async function handler(req,res){
    const {method} = req
    db()

    if(method === "GET"){

    }

    if(method === "POST"){
        try {
            const pizza = await Pizza.create(req.body)
            res.status(200).json(pizza)
        } catch (error) {
           res.status(500).json(error) 
        }
    }
}

