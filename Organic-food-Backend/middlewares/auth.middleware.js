import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

export const generateToken = (user) => {
  const payload = {
    userId: user._id,
    emailaddress: user.emailaddress,
  };

  const options = {
    expiresIn: '1h', 
  };

  const token = jwt.sign(payload, JWT_SECRET, options);

  return token;
};

// import jwt from 'jsonwebtoken';

// export const generateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1]; 

//   if (!token) {
//     return res.status(401).json({
//       data: {},
//       error: ['Access denied. No token provided.'],
//       responseCode: 401,
//     });
//   }

//   try {
//     const expiredToken = {
//         expiresIn: '1h',
//     }
//     const decoded = jwt.verify(token, process.env.JWT_SECRET, expiredToken);
//     req.user = decoded; 
//     next();
//   } catch (err) {
//     return res.status(403).json({
//       data: {},
//       error: ['Invalid or expired token.'],
//       responseCode: 403,
//     });
//   }
// };
