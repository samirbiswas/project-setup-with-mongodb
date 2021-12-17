/**
 * @author Samir Biswas
 * @description Login a user
 * @field phone , password 
 * @returns {Object}
 */
const User = require('../../models/user')

exports.login = async (req,res)=>{
    try {
      
       const { phone, password } = req.body;
       console.log( req.body );

        return res.json({
            status: true,
    
          });
    } catch (error) {
        console.log('Error from login api',error);
    }
}