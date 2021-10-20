import connection from '../db.config.js'
import User from '../models/User.js'
import Login from '../models/Login.js';
import bcrypt from 'bcrypt'


 export  const  addUser= async (req,res)=>{
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
    
export const userLogin=async (req,res)=>{
        //const result= await Login.findOne({where : {email: req.body.email, password: req.body.password}})
        const result = await Login.findByPk(req.body.email)
        if(result===null){
            res.json({
                message:"Sorry wrong credential  !"
            })
        }else{
           const valid= await bcrypt.compare(req.body.password, result.password);
           console.log("==========================================================================")
           console.log("password validation : ",valid)
            if(valid){
                res.json({
                    message: "User validated !",
                    result: await User.findByPk(req.body.email)
                })

            }else{
                res.json({
                    message:"Sorry wrong credential  !"
                })
            }
        }
    }
    
    
