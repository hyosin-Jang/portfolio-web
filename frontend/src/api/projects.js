import {GET, POST, DELETE} from "../utils/axios"

// project
export const getProjects = async () => {
	return await GET("project")
}

export const getProjectDetail = async (projectId) => {
	return await GET(`project/${projectId}`)
}

// stacks
export const getStacks = async () => {
	return await GET(`project/stack`)
}

// comment
export const getComments = async (projectId) => {
	return await GET(`comment/${projectId}`)
}

export const postComment = async (projectId, body) => {
	return await POST(`comment/${projectId}`, body)
}

export const deleteComment = async (commentId, password) => {
	return await DELETE(`comment/${commentId}/${password}`)
}

// view
export const postView = async (projectId) => {
	return await POST(`view/${projectId}`)
}

// photo
export const getProjectImages = async () => {
	return await GET(`project/photo`)
}

export const getProjectDetailImage = async (projectId) => {
	return await GET(`project/${projectId}/photo`)
}
