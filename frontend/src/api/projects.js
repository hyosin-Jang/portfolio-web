import {GET, POST} from "../utils/axios"

// project
export const getProjects = async () => {
	return await GET("project")
}

export const getProjectDetail = async (projectId) => {
	return await GET(`project/${projectId}`)
}

// comment
//export const getComments = async (projectId) => {
//	return await GET(`comment/${projectId}`)
//}

export const postComment = async (projectId, body) => {
	return await POST(`comment/${projectId}`, body)
}

// view
export const postView = async (projectId) => {
	return await POST(`view/${projectId}`)
}
//export const getViewCount = async (projectId) => {
//	return await GET(`view/${projectId}`)
//}

// like

export const postLike = async (projectId) => {
	return await POST(`like/${projectId}`)
}

//export const getLike = async (projectId) => {
//	return await GET(`like/${projectId}`)
//}
