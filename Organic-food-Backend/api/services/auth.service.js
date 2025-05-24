import User from '../models/auth.model.js';
import bcryptjs from 'bcryptjs';
import { sendEmail } from '../../utils/email.js';
import jwt from 'jsonwebtoken';
import { generateToken } from '../../middlewares/auth.middleware.js';

const HASHVALUE = process.env.HASHVALUE || '10';

export const register = async ({ fullname, emailaddress, password, confirmpassword }) => {
  const normalizedEmail = emailaddress.toLowerCase();

  const existingUser = await User.findOne({ emailaddress: normalizedEmail });
  if (existingUser) {
    const error = new Error('Email already exists');
    error.status = 409;
    throw error;
  }

  const newUser = new User({
    fullname,
    emailaddress: normalizedEmail,
    password,
    // role: role || 'user'
  });
  newUser.confirmPassword = confirmpassword;
  await newUser.save();
  const token = generateToken(newUser);

  await sendEmail(
    newUser.emailaddress,
    'Welcome!',
    'Thanks for signing up!',
    '<strong>Thanks for signing up!</strong>'
  );

  return {
    message: 'User registered successfully',
    userId: newUser._id,
    token,
  };
};


export const loginuser = async ({ emailaddress, password }) => {
  const normalizedEmail = emailaddress.toLowerCase();
  const user = await User.findOne({ emailaddress: normalizedEmail });
  console.log('User found:', user);
  console.log('Email address:', emailaddress);
  console.log('Normalized email:', normalizedEmail);

  if (!user) {
    throw new Error('Invalid email or password');
  }

  const isMatch = await user.comparePassword(password);
  console.log('Password match:', isMatch);
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign(
    { id: user._id, emailaddress: user.emailaddress },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
  console.log('Generated token:', token);
  await sendEmail(
    user.emailaddress,
    'Login Notification',
    'You have successfully logged in.',
    '<strong>You have successfully logged in.</strong>'
  );
  console.log('Email sent to:', user.emailaddress);

  return {
    token,
    user: {
      id: user._id,
      emailaddress: user.emailaddress,
      name: user.fullname,
    }
  };
};