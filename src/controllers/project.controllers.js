import {User} from "../models/user.models.js"
import {Project} from "../models/project.models.js"
import {ProjectMember} from "../models/projectmember.model.js"

import {ApiResponse} from "../utils/apiresponse.js"
import {ApiError} from "../utils/api-error.js"
import {asyncHandler} from "../utils/async-handler.js"
import mongoose from "mongoose"
import { UserRolesEnum } from "../utils/constants.js"

const getProjects = asyncHandler(async(req,res)=>{
    //test
})

const getProjectById = asyncHandler(async(req,res)=>{
    //test
})

const createProject = asyncHandler(async(req,res)=>{
    const {name,description}= req.body

    await Project.create({
        name,
        description,
        createdBy: new mongoose.Types.ObjectId(req.user._id),
    })

    await ProjectMember.create({
        user: new mongoose.Types.ObjectId(req.user._id),
        project: new mongoose.Types.ObjectId(project._id),
        role: UserRolesEnum.ADMIN
    })

    return res
    .status(201)
    .json(new ApiResponse(
        201,
        project,
        "Project created successfully"
    ))
})

const updateProject = asyncHandler(async(req,res)=>{
    //test
})

const deleteProject = asyncHandler(async(req,res)=>{
    //test
})

const addMembersToProject = asyncHandler(async(req,res)=>{
    //test
})

const updateMemberRole = asyncHandler(async(req,res)=>{
    //test
})

const deleteMember = asyncHandler(async(req,res)=>{
    //test
})

export{
    addMembersToProject, getProjectById, getProjects, createProject, updateMemberRole,
    updateProject,deleteProject, deleteMember
}