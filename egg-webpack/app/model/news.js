module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    name: {
      type: String
    },
    id: {
      type: String
    }
  });

  return mongoose.model('User', UserSchema);
}