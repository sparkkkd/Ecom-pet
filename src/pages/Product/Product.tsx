import styles from './Product.module.sass'

import Transition from '../../components/Transition/Transition'
import Container from '../../modules/Container/Container'
import ErrorText from '../../ui/ErrorText/ErrorText'
import BackArrow from '../../ui/BackArrow/BackArrow'
import ProductSkeleton from '../../ui/ProductSkeleton/ProductSkeleton'

import { useParams } from 'react-router-dom'
import { productSlice } from '../../store/slices/productSlice'
import { useAppDispatch } from '../../store/hooks'
import { addToCart } from '../../store/slices/userActionSlice'

import { IProductCard } from '../../models'
import { toast } from 'sonner'

export default function Product() {
	const { id } = useParams()

	const { data: product, isLoading, isError } = productSlice.useFetchOneProductQuery(id!)
	const dispatch = useAppDispatch()

	const handleAddToCart = (product: IProductCard) => {
		dispatch(addToCart(product))
		toast.message('Success', {
			description: `${product.title} added to cart`,
		})
	}

	return (
		<Transition>
			<Container>
				<section className={styles.wrapper}>
					<BackArrow />
					<h3 className={styles.title}>{product?.title}</h3>

					{product ? (
						<div className={styles.card}>
							<div className={styles.img}>
								<img src={product?.image} alt='product-preview' />
							</div>
							<div className={styles.info}>
								<p className={styles.description}>{product?.description}</p>
								<p className={styles.price}>{product?.price}$</p>
								<button onClick={() => handleAddToCart(product)} className={styles.button}>
									Add to cart
								</button>
							</div>
						</div>
					) : (
						isLoading && <ProductSkeleton />
					)}

					{isError && <ErrorText errorText={`Can't load product :(`} />}
				</section>
			</Container>
		</Transition>
	)
}
