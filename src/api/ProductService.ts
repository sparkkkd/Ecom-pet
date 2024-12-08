import { IProductCard } from '../models'
import $api from './http'

export default class ProductService {
	static async getAll() {
		return $api.get<IProductCard[]>('', { withCredentials: false })
	}

	static async getByCategory(category: string) {
		return $api.get<IProductCard[]>(`category/${category}`, { withCredentials: false })
	}

	static async getOne(id: number) {
		return $api.get<IProductCard>(`/${id}`, { withCredentials: false })
	}
}
