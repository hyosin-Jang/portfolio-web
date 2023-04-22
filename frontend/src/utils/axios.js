import axios from "axios"

const fetchWrap = async ({method, url, body, params}) => {
	const config = {
		baseURL: process.env.REACT_APP_APIURL,
		withCredentials: "true",
		...params,
	}

	try {
		const {data} =
			(method === "get" && (await axios.get(url, config))) ||
			(method === "post" && (await axios.post(url, body, config))) ||
			(method === "put" && (await axios.put(url, body, config))) ||
			(method === "patch" && (await axios.patch(url, body, config))) ||
			(method === "delete" && (await axios.delete(url, config))) ||
			{}

		return data
	} catch (error) {
		console.error(error)
	}
}

export const GET = (url, params) => fetchWrap({method: "get", url, params})

export const POST = (url, body, params) => fetchWrap({method: "post", url, body, params})

export const PUT = (url, body, params) => fetchWrap({method: "put", url, body, params})

export const PATCH = (url, body, params) => fetchWrap({method: "patch", url, body, params})

export const DELETE = (url) => fetchWrap({method: "delete", url})
