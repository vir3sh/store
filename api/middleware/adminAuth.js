import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    req.admin = decoded;
    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(403).json({
      success: false,
      message:
        error.name === "TokenExpiredError"
          ? "Session expired. Please log in again."
          : "Invalid authentication token",
    });
  }
};

export default adminAuth;
