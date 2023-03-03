const moongose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = moongose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});
UserSchema.plugin(passportLocalMongoose);

module.exports = moongose.model('User', UserSchema);