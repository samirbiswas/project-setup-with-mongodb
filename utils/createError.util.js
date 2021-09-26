function createError(statusCode=500,message = 'Internal server error'){
    const error = new Error(message);
    error.status = statusCode;
    throw error
}

module.exports = createError;