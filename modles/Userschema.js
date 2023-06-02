import mongoose from "mongoose";


const Userschema = new mongoose.Schema({
    name: { type: String, required: true  },
    email: { type: String, required: true ,unique:true},
    password: { type: String, required: true }
});

const UserModel=mongoose.model('user',Userschema);
try {
    UserModel.createIndexes();
    
} catch (error) {
    console.log(error)
}
export default UserModel;