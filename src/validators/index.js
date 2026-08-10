import {body} from "express-validator"
import {AvailableUserRole} from "../utils/constants.js"

const userRegisterValidator=()=>{
    return[
        body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Email is not valid"),

        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username is required")
            .isLowercase()
            .withMessage("Username must be in lowercase")
            .isLength({min: 3, max: 20})
            .withMessage("Username must be between 3 and 20 characters"),

            body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required"),

            body("fullname")
            .optional()
            .trim()

    ]
}

const userLoginValidator=()=>{
    return[
        body("email").optional().isEmail().withMessage("Email is not valid"),
        body("password").notEmpty().withMessage("Password is required")
    ]
}

const userChangeCurrentPasswordValidator= ()=>{
    return[
        body("oldPassword").notEmpty().withMessage("old password is required"),
        body("new password").notEmpty().withMessage("new password is required"),
    ]
}

const userForgotPasswordValidator=()=>{
    return[
        body("email").notEmpty().withMessage("email is required")
        .isEmail()
        .withMessage("email is invalid"),
    ]
}

const userResetForgotPasswordValidator=()=>{
    return[
        body("newPassword")
        .notEmpty()
        .withMessage("Password is required")
    ]
}

const createProjectValidator=()=>{
    return[
        body("name")
        .notEmpty()
        .withMessage("name is required"),

        body("description")
        .optional()
    ]
}

const addMembertoProjectValidator=()=>{
    return[
        body("email")
        .trim()
        .notEmpty()
        .withMessage("email is required")
        .isEmail()
        .withMessage("email is not valid"),

        body("role")
        .notEmpty()
        .withMessage("role is required")
        .isIn(AvailableUserRole)
        .withMessage("role is not valid")
    ]
}



export{
    userRegisterValidator, userLoginValidator, userChangeCurrentPasswordValidator,
    userForgotPasswordValidator, userResetForgotPasswordValidator,
    createProjectValidator, addMembertoProjectValidator
}