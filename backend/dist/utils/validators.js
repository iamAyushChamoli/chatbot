import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};
export const signupValidator = [
    body("name").notEmpty().withMessage("Name cannot be Empty"),
    body("email").trim().isEmail().withMessage("Email Format Is Incorrect"),
    body("password").trim().isLength({ min: 6 }).withMessage("Password should be atleast 6 Characters long")
];
//# sourceMappingURL=validators.js.map