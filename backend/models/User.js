import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        email: { type: String, index : true},
        name : { type: String},
        password: { type: String},

    }, {
        collection: 'users'
    });

    export default mongoose.model('User', userSchema);
