import jwt from "jsonwebtoken";
import { Secretkey } from "./utils.js";
export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ message: "Authorization header is missing" });
        return;
    }
    // console.log("Authorization header:", authHeader);
    if (!token) {
        res.status(401).json({ message: "Token is missing" });
        return;
    }
    jwt.verify(token, Secretkey, (err, decoded) => {
        if (err) {
            res.status(401).json({ message: "Invalid token" });
        }
        else {
            req.body.userid = decoded.id;
            next();
        }
    });
};
//# sourceMappingURL=Usermiddleware.js.map