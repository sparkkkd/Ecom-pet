export interface IProductCard {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: {
		rate: number
		count: number
	}
}

type CartProductProps = Omit<IProductCard, 'rating' | 'description' | 'category'>

export interface ICartProduct extends CartProductProps {
	count: number
}
