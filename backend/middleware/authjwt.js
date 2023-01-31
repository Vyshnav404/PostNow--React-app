// const jwt = require('jsonwebtoken')


// const verifyToken =(req,res,next)=>{
//     const token = req.headers['x-access-token'];
//     console.log(token,"middleware");

//     if(!token){
//       return res.status(401).send({success:false,msg:'A token is required for authentication !!'})
//     }

//     try {
//         const decode = jwt.verify(token,process.env.JWTPRIVATEKEY);
//         req.user = decode;
//         return next();
//     } catch (error) {
//         res.status(400).send('Invalid Token !!')
//     }
  
// }

// module.exports = verifyToken;