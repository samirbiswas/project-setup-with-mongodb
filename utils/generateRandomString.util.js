function randomIntInRange(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateRandomId(length ,mode = '111') {
    mode = `${mode}`;

    const alphaCapital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphaSmall = 'abcdefghijklmnopqrstuvwxyz';
    const numeric = '0123456789';

    let selectString = ''
    if(+mode[0]) selectString += numeric; // add number
    if(+mode[1]) selectString += alphaCapital; // add capital letters
    if(+mode[2]) selectString += alphaSmall; // add small letter

    let returnString = '';
    for(let i = 0; i < length; i++){
      const random = randomIntInRange (0, selectString.length - 1);
    returnString += selectString[random]
    } 
   return returnString
} 

module.exports = generateRandomId;