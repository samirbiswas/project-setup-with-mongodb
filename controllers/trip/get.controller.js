const Trip = require('../../models/trip')
 const User = require('../../models/user');

/**
 * @author Samir Biswas
 * @description active trip api
 * @returns {Object}
 */

 exports.activeTrip = async (req,res)=>{
    try {

        // find first one ACTIVE trip for all users 
        const users = await User.find({},{ name: 1 })
        .populate({
            path:'shipId',
            match: { status:'ACTIVE' },
            perDocumentLimit:1
        })

       //response send
        return res.json({
        status: true,
        users
    })

    } catch (error) {
        console.log('Error from active trip api',error);
    }
}