import Skeleton from 'react-loading-skeleton'
import styles from './ProductCardSkeleton.module.sass'
import 'react-loading-skeleton/dist/skeleton.css'

interface ProductCardSkeletonProps {
	count: number
}

export default function ProductCardSkeleton({ count }: ProductCardSkeletonProps) {
	return Array(count)
		.fill(0)
		.map((_, index) => (
			<div className={styles.card} key={index}>
				<span className={styles.rate}>
					<Skeleton width={40} height={40} />
				</span>
				<span className={styles.count}>
					<Skeleton width={40} height={40} />
				</span>
				<div className={styles.img}>
					<Skeleton width={200} height={250} style={{ marginTop: 80 }} />
				</div>
				<Skeleton className={styles.title} width={100} height={10} />
				<div className={styles.productInfo}>
					<span className={styles.category}>
						<Skeleton width={100} height={10} />
					</span>
					<span className={styles.price}>
						<Skeleton width={100} height={10} />
					</span>
				</div>
			</div>
		))
}

{
	/* <div className={styles.card}>
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
		</div> */
}
