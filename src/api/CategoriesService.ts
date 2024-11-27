import $api from './http'
import { ICategories } from './models'

export default class CategoriesService {
	static async getAll() {
		return $api.get<ICategories>('categories', { withCredentials: false })
	}
}
