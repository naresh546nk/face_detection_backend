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
                gender: req.body.gender,
                country: req.body.country
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
                message:"failed",
                error: error
            })
    
        }
    }
    
export const userLogin=async (req,res)=>{
        //const result= await Login.findOne({where : {email: req.body.email, password: req.body.password}})
        const result = await Login.findByPk(req.body.email)
        if(result===null){
            res.json({
                message:"Sorry wrong credential  !",
                result:null
            })
        }else{
           const valid= await bcrypt.compare(req.body.password, result.password);
            if(valid){
                res.json({
                    message: "User validated !",
                    result: await User.findByPk(req.body.email)
                })

            }else{
                res.json({
                    message:"Sorry wrong credential  !",
                    result: null
                })
            }
        }
    }
    

    export const setRank= async (req, res)=>{
        //console.log(req.query.email)
        const result= await User.findByPk(req.query.email)
        console.log(result.entries)

        const rank= await User.update({entries:result.entries+1},{where: {email: req.query.email}})
        //console.log(rank)

        res.json({
            message:"Rank update successfully !",
            rank: (result.entries+1) 
        })

    }

    export const getRank= async (req, res)=> {
        const result= await User.findByPk(req.query.email)
        console.log(result.entries);

        res.json({
            message: "ok",
            rank: result.entries
        })
    }
    
   export const getMessage=  (req, res)=> {
        console.log("server started.")
        res.send('Hello word !')
    }