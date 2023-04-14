import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let alarmSchema = new Schema(
    {
        name : { type: String, index : true},
        time: { type: String},
        
    }, {
        collection: 'alarms'
    });

    export default mongoose.model('Alarm', alarmSchema);
