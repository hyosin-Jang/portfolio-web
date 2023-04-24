export const getParsedDate = (timestamp) => {
	const now = new Date(timestamp)
	const month = now.getMonth() + 1
	const date = now.getDate()
	const hours = now.getHours().toString().padStart(2, "0")
	const minutes = now.getMinutes().toString().padStart(2, "0")

	return `${month}월 ${date}일 ${hours}:${minutes}`
}
