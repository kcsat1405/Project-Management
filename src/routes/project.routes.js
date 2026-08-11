import{Router} from "express";

import {addMembersToProject,
         getProjectById,
         getProjects,
         createProject,
         updateMemberRole,
         updateProject,
         deleteProject,
         deleteMember,
         getProjectMembers
        } from "../controllers/project.controllers.js"

import {validate} from "../middlewares/validator.middleware.js"

import {createProjectValidator, addMembertoProjectValidator} from "../validators/index.js"

import {verifyJWT, validateProjectPermission} from "../middlewares/auth.middleware.js"
import { UserRolesEnum } from "../utils/constants.js";

const router=Router();
router.use(verifyJWT)

router
    .route("/:projectId")
    .get(validateProjectPermission(AvailableUserRole), getProjectById)
    .put(validateProjectPermission([UserRolesEnum]), createProjectValidator(), validate, updateProject)
    .delete(validateProjectPermission([UserRolesEnum.ADMIN]), deleteProject)

router
    .route("/:projectId/members")
    .get(getProjectMembers)
    .post(validateProjectPermission([UserRolesEnum.ADMIN]), addMembertoProjectValidator(),
    validate, addMembersToProject)

router
    .route("/:projectId/members/:userId")
    .put(validateProjectPermission([UserRolesEnum.ADMIN]), updateMemberRole)
    .delete(validateProjectPermission([UserRolesEnum.ADMIN]), deleteMember)

export default router