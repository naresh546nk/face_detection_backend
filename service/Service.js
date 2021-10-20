import connection from '../db.config.js'
import User from '../models/User.js'
import Login from '../models/Login.js';


const Service= async (req,res)=>{
    console.log("api call happend !")
    console.log(req.body);
    const t=await connection.transaction();
    try{
        
        const user= await User.create({
           
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender
        },{transaction: t})

        const login=await Login.create({
            email :req.body.email,
            password: req.body.password

        },{transaction : t})

        user.setLogin(login);

        t.commit();
        res.json({
            message:"user addess success fully !",
            user: user
        })

    }catch(error){
        console.log(error)
        t.rollback();
        res.json({
            message:"failed !",
            error: error
        })

    }
}
export default Service;