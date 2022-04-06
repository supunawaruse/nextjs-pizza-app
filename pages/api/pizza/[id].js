import Pizza from '../../../models/Pizza.js'
import db from '../../../utils/db.js'


export default async function handler(req,res){
    const {method, query:{id}} = req
    db()

    if(method === "GET"){
        try { 
            const pizza = await Pizza.findById(id)
            res.status(200).json(pizza)
        } catch (error) {
            res.status(500).json(error) 
        }
    }

    if(method === "DELETE"){
        try { 
            await Pizza.findByIdAndDelete(id)
            res.status(200).json("Pizza has been deleted! ")
        } catch (error) {
            res.status(500).json(error) 
        }
    }

}
