const express = require('express')
// const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 5000

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));


// Database connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
//     useCreateIndex: true
}).then(() => console.log("Database Connected Succesfully")).catch((err) => console.log(err))



//routes
const routes = require('./routes/routes')
app.use("/api/post", routes);



// listen port
app.listen(port, () => console.log(`Server listening http://localhost:${port}`))