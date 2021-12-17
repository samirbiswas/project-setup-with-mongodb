/**
 * @author Samir Biswas
 * @description Login a user
 * @field phone , password 
 * @returns {Object}
 */
const User = require('../../models/user')

exports.login = async (req,res)=>{
    try {
        const user = await User.find();
        return res.json({
            status: true,
            user
          });
    } catch (error) {
        console.log('Error from login api',error);
    }
}