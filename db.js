import mongoose from "mongoose";
const uri ="mongodb+srv://nagarsumit144:sumit0004@cluster0.l3yrn89.mongodb.net/";

const connectMongo = async () => {
    mongoose.set('strictQuery', false);
 mongoose.connect(uri, () => {
        console.log("Connected Mongo Successfully")
    })
}

export default connectMongo 