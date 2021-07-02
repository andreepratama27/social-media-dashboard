import { BASE_URL } from "constants/constants";

const httpService = <T>(url: string): Promise<T> => {
	return fetch(`${BASE_URL}${url}`).then(resp => resp.json())
}

export default httpService