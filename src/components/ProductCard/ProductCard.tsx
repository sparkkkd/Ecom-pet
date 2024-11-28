import { IProductCard } from '../../models'
import styles from './ProductCard.module.sass'

import { useWindowSize } from '@uidotdev/usehooks'

type IProductCardProps = Omit<IProductCard, 'id' | 'description'>

export default function ProductCard({ title, price, category, image, rating }: IProductCardProps) {
	const size = useWindowSize()

	let titleMaxLength = 20

	if (size.width && size.width < 810) {
		titleMaxLength = 47
	}

	let shortTitle =
		title.length >= titleMaxLength - 3 ? title.slice(0, titleMaxLength - 3) + '...' : title

	return (
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
		</div>
	)
}
