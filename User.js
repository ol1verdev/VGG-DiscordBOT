const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    code: {
        type: String,
        required:true
    },
    views:{
        type: Number,
        required: true,
        default: 1
    },
    admin: {
        type: Boolean,
        default: false
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required:true
    },
    isVerified: {
        type: Boolean,
        default: false,
        required: true
    },
    bio: {
        type: String,
        default:""
    },
    keyboard: {
        type: String,
        default: ""
    },
    headset: {
        type: String,
        default:""
    },
    mouse: {
        type: String,
        default:""
    },
    monitor: {
        type: String,
        default: ""
    },
    displaymode: {
        type: String,
        default: ""
    },
    frameratelimit: {
        type: String,
        default: ""
    },
    resolution: {
        type: String,
        default: ""
    },
    aspectratio: {
        type: String,
        default: ""
    },
    color: {
        type: String,
        default: ""
    },
    outlines: {
        type: String,
        default: ""
    },
    innerlines: {
        type: String,
        default: ""
    },
    outerlines: {
        type: String,
        default: ""
    },
    cpu: {
        type: String,
        default: ""
    },
    gpu: {
        type: String,
        default: ""
    },
    motherboard: {
        type: String,
        default: ""
    },
    memory: {
        type: String,
        default: ""
    },
    mainAgent: {
        type: String,
        default: ""
    },
    twitter: {
        type: String,
        default:""
    },
    twitch: {
        type: String,
        default:""
    }
});

module.exports = mongoose.model('User', UserSchema);