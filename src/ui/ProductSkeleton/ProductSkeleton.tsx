import Skeleton from 'react-loading-skeleton'
import styles from './ProductSkeleton.module.sass'

export default function ProductSkeleton() {
	return (
		<div className={styles.card}>
			<Skeleton className={styles.img} />
			<div className={styles.info}>
				<Skeleton className={styles.description} />
				<Skeleton className={styles.price} />
				<Skeleton className={styles.button} />
			</div>
		</div>
	)
}
