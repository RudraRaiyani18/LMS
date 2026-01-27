import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    userName : String,
    email :String,
    password :String,
    role :String
})

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;