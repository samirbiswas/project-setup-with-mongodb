
const mongoose = require("mongoose");
const {config,dbOptions} = require('./config/dbConfig')
const app = require('./app')

const PORT = 8000;

// test
  app.get('/api', (req, res) => {
    res.status(200).json({
      status: true,
      message:"hello"
    });
  });
// database conncetion
mongoose.connect(config.dbUrl, dbOptions, (err) => {
    if (err) return console.log("Failed to connect database",err);
    console.log('database connected');
  })

  app.listen(PORT, () => console.log(`Server is running on the port:${PORT}`));

  module.exports = { app };