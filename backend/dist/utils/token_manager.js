import jwt from "jsonwebtoken";
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.REACT_APP_JWT_SECRET, {
        expiresIn,
    }); //JWT KEY
    return token;
};
//# sourceMappingURL=token_manager.js.map