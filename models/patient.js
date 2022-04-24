const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    first_name: {type:String, required: true, trim: true},
    last_name: {type:String, required: true, trim: true},
    email: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    screen_name: {type:String, required: true, unique: true},
    yearofbirth: {type:String, required: true},
    height: {type:Number, required: true},
    records: [{
        record_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Record'}
    }],
    brief_bio: {type:String}, 
    engagement:{type:Number, required: true},
    photo:{type:String},
    support_message:{type:String},
    clinician:{clinicianID: {type: mongoose.Schema.Types.ObjectId, ref: 'Clinician'}},
    required_data:{
        glucose:{type:Boolean,required: true},
        weight:{type:Boolean,required: true},
        exercise:{type:Boolean,required: true},
        insulin:{type:Boolean,required: true}
    },
    bound:{
            glucose_upper:{type: Number, required: true},
            glucose_lower:{type: Number, required: true},
            weight_upper:{type: Number, required: true},
            weight_lower:{type: Number, required: true},
            exercise_upper:{type: Number, required: true},
            exercise_lower:{type: Number, required: true},
            insulin_upper:{type: Number, required: true},
            insulin_lower:{type: Number, required: true}
    }
},{versionKey: false})
//Create collection patients in mongodb
const Patient = mongoose.model('Patient', schema);
module.exports = Patient;