exports.serverError = (error, res,from='')=>{
    if(from) console.log(`Error from ${from},error`);
    const status = typeof error.status === 'number' ? error.status:500;
    const message = status !==500 ? error.message : `Internal Server Error`;
    return res.status(status).json({
        status:false,
        message
    })
}
   
   
