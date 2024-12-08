import styles from './Cart.module.sass'

import Transition from '../../components/Transition/Transition'
import Container from '../../modules/Container/Container'
import BackArrow from '../../ui/BackArrow/BackArrow'
import CartProduct from '../../components/CartProduct/CartProduct'
import Button from '../../ui/Button/Button'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { toast } from 'sonner'
import { clearCart } from '../../store/slices/userActionSlice'

export default function Cart() {
	const { cart } = useAppSelector((state) => state.userActionSlice)
	const dispatch = useAppDispatch()

	const overallCartPrice = cart
		.reduce((acc, value) => acc + value.price * value.count, 0)
		.toFixed(2)

	const handleClearCart = () => {
		toast.message('Success', {
			description: 'Cart cleared',
		})

		dispatch(clearCart())
	}

	return (
		<Transition>
			<Container>
				<section className={styles.wrapper}>
					<BackArrow />

					<h3 className={styles.title}>Cart</h3>
					<Button
						buttonStyles={{ marginRight: 'auto' }}
						text='Clear cart'
						onClick={() => {
							handleClearCart()
						}}
					/>
					<span className={styles.overall}>
						Overall cart price: <strong>{overallCartPrice}$</strong>
					</span>
					<div className={styles.products}>
						{cart && cart.map((product) => <CartProduct key={product.id} {...product} />)}
					</div>
				</section>
			</Container>
		</Transition>
	)
}
