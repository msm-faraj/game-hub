import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "853b1839610f489aa8aa9ed33140331a"
	},
})