var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    username: { type: String },
    email: { type: String },
    gender:{ type: String}
  }
);
module.exports = mongoose.model('User', UserSchema);
