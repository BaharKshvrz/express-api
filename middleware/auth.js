import jwt from "jsonwebtoken"

const authenticationToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
        return res.
               status(401).
               send({ message: "Failed! Authentication token is missing."});
    }

    jwt.verify(token , process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return  res.
                    status(403).
                    send({ message: "Failed! You don’t have permission to access on this server"});
        }
        req.user = user;
        next();
    })
}

export default authenticationToken;