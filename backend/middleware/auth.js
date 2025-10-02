import jwt from 'jsonwebtoken';


export const verifyJWT = (req, res, next) => {
  // Get token from the 'Authorization' header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  // If no token is provided
  if (!token) {
    return res.status(401).json({ message: 'No token provided' }); // 401 Unauthorized
  }

  try {
    // Verify the token using your secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Make sure to use the secret from environment variables

    // Attach userId to the request object for future use
    req.userId = decoded.userId;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error('Invalid or expired token:', error);
    // Return an error if the token is invalid or expired
    res.status(401).json({ message: 'Invalid or expired token' }); // 401 Unauthorized
  }
};
