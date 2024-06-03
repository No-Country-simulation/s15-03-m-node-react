import axios from "axios"

export const uploadImg = async (image) => {
	const file = image.target.files[0]
	console.log(file)
	const data = new FormData()

	data.append("file", file)
	data.append("upload_preset", "preset_storystarter")

	const response = await axios.post(
		"https://api.cloudinary.com/v1_1/dp4tgzu3l/image/upload",
		data
	)

	console.log(response.data.secure_url)
	return response.data.secure_url
}
