const moment = require('moment');

function validDate(date){
    return moment(date, 'YYYY-MM-DD',true).isValid();

}

module.exports =validDate;