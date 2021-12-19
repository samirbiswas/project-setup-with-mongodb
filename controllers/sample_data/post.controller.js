const SapmleData = require('../../models/sample_data')
const User = require('../../models/user')

/**
 * @author Samir Biswas
 * @description sample data api
 * @returns {Object}
 */

 exports.sampleData = async (req,res)=>{
    try {

        // find a user
        const findUser = await User.findOne({},{_id : 1})

        // create an array
        let array = [];
        for(i=1; i<=100; i++){
            array.push({
                serial : i,
                userId : findUser._id
            })
        }
       // insert array in database 
      await SapmleData.insertMany(array);

      // delete data with condition
      await SapmleData.deleteMany({
        $or: [
            { serial: {$gte: 20, $lte: 40 } },
            { serial: {$gte: 60, $lte: 70 } },
            { serial: {$gte: 90 ,$lte: 100} }
          ]
      })

        //response send
        return res.json({
            status: true,
         })

    } catch (error) {
        console.log('Error from sample data api',error);
    }
}