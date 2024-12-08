import { useWindowSize } from '@uidotdev/usehooks'
import { ICartProduct } from '../../models'
import { useAppDispatch } from '../../store/hooks'
import { removeAllFromCart, removeOneFromCart } from '../../store/slices/userActionSlice'
import styles from './CartProduct.module.sass'
import { toast } from 'sonner'

export default function CartProduct({ id, image, title, price, count }: ICartProduct) {
	const dispatch = useAppDispatch()

	const size = useWindowSize()

	let titleMaxLength = 20

	if (size.width && size.width < 811) {
		titleMaxLength = 60
	}

	let shortTitle =
		title.length >= titleMaxLength - 3 ? title.slice(0, titleMaxLength - 3) + '...' : title

	const handleRemoveAllFromCart = (id: number) => {
		dispatch(removeAllFromCart(id))
		toast.message('Success', {
			description: `All ${shortTitle} removed from cart`,
		})
	}

	const handleRemoveOneFromCart = (id: number) => {
		dispatch(removeOneFromCart(id))
		toast.message('Success', {
			description: `${shortTitle} removed from cart`,
		})
	}

	return (
		<div className={styles.wrapper}>
			<h4 className={styles.title}>{shortTitle}</h4>
			<div className={styles.img}>
				<img src={image} alt='product-preview' />
			</div>
			<p className={styles.price}>Price for one: {price}$</p>
			<p className={styles.price}>Overall price: {price * count}$</p>
			<p className={styles.count}>Count: {count}</p>
			<div className={styles.buttons}>
				<button onClick={() => handleRemoveAllFromCart(id)} className={styles.button}>
					Delete all
				</button>
				<button onClick={() => handleRemoveOneFromCart(id)} className={styles.button}>
					Delete one
				</button>
			</div>
		</div>
	)
}
