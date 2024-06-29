import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
    {
        email:{type:String, required: true, unique: true},
        firstName:{type:String, required: true},
        lastName:{type:String, required: true},
        password:{type:String, required: true},
        mobile_number:{type:String, required: false},
        role:{type:String, enum:['Admin', 'Customer', 'Delivery_Partner'], default: 'Customer'},
        address:{type: String, required:false},
        province:{type:String, required: false},
        district:{type:String, required: false},
        post_code:{type:String, required: false}      
    }
)

const User = mongoose.model('User', UserSchema, 'users')
export default User

