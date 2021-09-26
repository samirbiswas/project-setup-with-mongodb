function validLimitOffset(value){
    return Number(value) && Math.ceil(value) > 0;
}

module.exports = validLimitOffset;