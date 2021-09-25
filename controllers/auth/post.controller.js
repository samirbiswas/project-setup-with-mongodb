exports.login = async (req,res)=>{
    try {
        res.send('hello login')
    } catch (error) {
        console.log('Error from login api',error);
    }
}