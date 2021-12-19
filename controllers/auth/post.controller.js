const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/key');

/**
 * @author Samir Biswas
 * @description Login a user
 * @field phone, password 
 * @returns {Object}
 */

exports.login = async (req,res)=>{
    try {
       const { phone, password } = req.body;
      // find user
       const foundUser = await User.findOne({ phone: phone} );
        
       if(!foundUser){
        return res.status(401).json({
            status:false,
            message:'Invalid credentials'
        })
      }
    
    // match with password
    const doMatch = await bcrypt.compare(password, foundUser.password);

    if(!doMatch){
        return res.status(401).json({
            status:false,
            message:'Invalid credentials'
        })
    }

   // delete password
    delete foundUser.password
    
    // check token valid or not
     jwt.verify(foundUser.api_token, config.jwtSecret, async (err, decode)=>{
        if(err){
        try {
            const payload = {
                _id: foundUser._id,
                name: foundUser.name,
                phone: foundUser.phone,
                email: foundUser.email,
                company_id: foundUser.company_id,
                company_name: foundUser.company_name,
                complain_number: foundUser.complain_number,
                nid: foundUser.nid,
                address: foundUser.address,
                shipId: foundUser.shipId,
                avatar: foundUser.avatar,
                userType: foundUser.userType
            }
          // create token
          const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '30d' });
          // update token
          await User.updateOne({ _id: foundUser._id }, { $set: { api_token: token } });
          //response send
          return res.json({
            status: true,
            message:'Logged in successfully'
          })

        } catch (error) {
         throw error
        }
        }
        return res.json({
            status: false,
            message:'Already logged in!'
        })
    });
    } catch (error) {
        console.log('Error from login api',error);
        return res.json({
            status: true,
            message:'server side error'
          })
    }
}