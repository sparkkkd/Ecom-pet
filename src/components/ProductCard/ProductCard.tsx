import styles from './ProductCard.module.sass'

import { useWindowSize } from '@uidotdev/usehooks'
import { Link } from 'react-router-dom'

import { ICartProduct, IProductCard } from '../../models'

import Button from '../../ui/Button/Button'
import { useAppDispatch } from '../../store/hooks'
import { addToCart } from '../../store/slices/userActionSlice'

import { toast } from 'sonner'

type IProductCardProps = Omit<IProductCard, 'description'>

export default function ProductCard({
	title,
	price,
	category,
	image,
	rating,
	id,
}: IProductCardProps) {
	const size = useWindowSize()

	let titleMaxLength = 20

	if (size.width && size.width < 810) {
		titleMaxLength = 47
	}

	let shortTitle =
		title.length >= titleMaxLength - 3 ? title.slice(0, titleMaxLength - 3) + '...' : title

	const dispatch = useAppDispatch()

	const handleAddToCart = () => {
		dispatch(addToCart({ title, price, image, id } as ICartProduct))
		toast.message('Success', {
			description: `${shortTitle} added to cart`,
		})
	}

	return (
		<div>
			<Link onClick={(e) => e.stopPropagation()} className={styles.link} to={`/product/${id}`}>
				<div className={styles.card}>
					<span className={styles.rate}>{rating.rate}</span>
					<span className={styles.count}>{rating.count}</span>
					<div className={styles.img}>
						<img src={image} alt='product-image' />
					</div>

					<h4 className={styles.title}>{shortTitle}</h4>
					<div className={styles.productInfo}>
						<span className={styles.category}>{category}</span>
						<span className={styles.price}>{price}$</span>
					</div>
					<Button
						buttonStyles={{ marginTop: 'auto' }}
						onClick={handleAddToCart}
						text='Add to cart'
					/>
				</div>
			</Link>
		</div>
	)
}
