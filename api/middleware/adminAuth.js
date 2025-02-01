import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    // Get token from cookies
    const { token } = req.cookies;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Authentication token not found" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Ensure the email matches the admin email
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized access" });
    }

    next(); // Token valid, proceed to the next middleware
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(403).json({
      success: false,
      message: "Invalid or expired token. Please log in again.",
    });
  }
};

export default adminAuth;
