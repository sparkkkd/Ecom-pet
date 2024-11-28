import styles from './Catalog.module.sass'

import Transition from '../../components/Transition/Transition'
import Container from '../../modules/Container/Container'
import Categories from '../../modules/Categories/Categories'
import ProductCard from '../../components/ProductCard/ProductCard'
import Loader from '../../ui/Loader/Loader'
import ErrorText from '../../ui/ErrorText/ErrorText'

import { useAppSelector } from '../../store/hooks'
import { productSlice } from '../../store/slices/productSlice'

export default function Catalog() {
	const { category } = useAppSelector((state) => state.userActionSlice)
	const { data: products, isLoading, error } = productSlice.useFetchProductsQuery(category)

	return (
		<Transition>
			<Container>
				<section className={styles.catalog}>
					<h3 className={styles.title}>Catalog</h3>
					<Categories />
					<div className={styles.products}>
						{products
							? products.map((product) => <ProductCard key={product.id} {...product} />)
							: null}
					</div>
					{isLoading && <Loader />}
					{error && <ErrorText errorText={`Can't load products :(`} />}
				</section>
			</Container>
		</Transition>
	)
}
