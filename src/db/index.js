import mongoose from "mongoose";

import {DB_NAME} from "../constants.js";

const connection = async () =>{
    try{
       const connIns= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Connected to MongoDB:", connIns.connection.host);
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default connection;