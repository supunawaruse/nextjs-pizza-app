import cookie from 'cookie'

const handler = (req,res) => {
    if(req.method === "POST"){
        res.setHeader("Set-Cookie",cookie.serialize("token", '',
        {maxAge:60 * 60,sameSite:"strict",path:'/'}
        ))
            res.status(200).json("Successfull")
    }
}

export default handler;