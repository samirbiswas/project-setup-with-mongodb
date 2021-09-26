const isEmpty = require('./isEmpty.utils')


function checkPayload(payload){
    return isEmpty(payload)
}

module.exports = checkPayload;

