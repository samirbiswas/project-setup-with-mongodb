const User = require('../../models/user');
const Trip = require('../../models/trip');
const Ticket = require('../../models/ticket');

/**
 * @author Samir Biswas
 * @description report api
 * @returns {Object}
 */

 exports.report = async (req,res)=>{
    try {
       
        const user = await Trip.aggregate(
            [
                { $lookup : {    from : "Ticket",
                                 localField : "_id",
                                 foreignField : "tripId",
                                 as : "Ticket"
                            }
               },
               {
                $unwind: {
                    path: "$Ticket",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $match: {
                    status:"ACTIVE"
                }
            },
          
                {
                    $project:
                      {
                        item: 1,
                        deckTicket: {
                            $cond: { if: { $eq: [ "$ticketType", "DECK" ] }, then: 1, else: 0 }
                          },
                          goodsTicket: {
                            $cond: { if: { $eq: [ "$ticketType", "GOODS" ] }, then: 1, else: 0 }
                          }
                      }
                 },

                // { "$group": {
                //   "_id": "$tripId",
                //   "deckTicket": {
                //     "$sum": "$deckTicket"
                //   },
                //   "goodsTicket": {
                //     "$sum": "$goodsTicket"
                //   },
                // }},
              ]
        )

        //response send
        return res.json({
           status: true,
           user,
          
        })


    } catch (error) {
        console.log('Error from report api',error);
    }
}