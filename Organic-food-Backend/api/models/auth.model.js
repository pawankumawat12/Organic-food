import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true
  },
  EmailAddress: {
    type: String,
    unique: true,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
},
  { timestamps: true });

export default mongoose.model('User', userSchema);
