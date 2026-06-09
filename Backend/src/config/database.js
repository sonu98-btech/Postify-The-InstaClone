const mongoose = require("mongoose")
const dns = require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])

 const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to db")
 }

 module.exports = connectDB;
     