import jwt from "jsonwebtoken";

export const verifytoken = async (req, res, next) => {
  try {
    let token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Access denied: No token provided." });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decodedToken) => {
      if (error) {
        if (error.name === "TokenExpiredError") {
          return res.status(401).json({ error: "Token expired." });
        }
        return res.status(401).json({ error: "Invalid token." });
      }
      req.user = decodedToken;
      next();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

