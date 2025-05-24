import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  emailaddress: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please enter a valid email address',
    ],
  },
  password: {
    type: String,
    required: true
  },
  provider: {
    type: String,
    enum: ['local', 'google', 'facebook'],
    default: 'local'
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcryptjs.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcryptjs.compare(candidatePassword, this.password);
};
userSchema.virtual('confirmPassword')
  .get(function () {
    return this._confirmPassword;
  })
  .set(function (value) {
    this._confirmPassword = value;
  });


userSchema.pre('save', function (next) {

  if (!this.isModified('password')) {
    return next();
  }

  if (this.password !== this._confirmPassword) {

    this.invalidate('confirmPassword', 'Passwords do not match');
  }
  next();
});
const User = mongoose.model('User', userSchema);

export default User;
