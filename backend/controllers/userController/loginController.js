const {User} = require('../../models/user');
const joi = require('joi');
const bcrypt = require('bcrypt')

const userLogin = async(req,res)=>{
    console.log(req.body);
    try {
        
        const {error} = validate(req.body);
        if(error)
        return res.status(400).send({message:error.details[0].message});

        const user = await User.findOne({email:req.body.email});
        
        if(!user)
        return res.status(401).send({message:"Invalid Email or Password"});

        const validPassword = await bcrypt.compare(
            req.body.password,user.password
        );
        
        if(!validPassword)
            return res.status(401).send({message:"Invalid Email or Password"})

           const token = user.generateAuthToken();
           
           res.status(200).send({data:token,message:"Logged in successfully"}) 
        
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"})
        console.log(error,"kkkk");
        
    }
}

const validate = (data)=>{
    const schema = joi.object({
        email:joi.string().email().required().label("Email"),
        password:joi.string().required().label("Password")
    });
    return schema.validate(data);
}

module.exports = {
    userLogin 
}