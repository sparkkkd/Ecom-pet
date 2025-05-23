import styles from './Catalog.module.sass'

import Transition from '../../components/Transition/Transition'
import Container from '../../modules/Container/Container'
import Categories from '../../modules/Categories/Categories'
import ProductCard from '../../components/ProductCard/ProductCard'
import ErrorText from '../../ui/ErrorText/ErrorText'

import { useAppSelector } from '../../store/hooks'
import { productSlice } from '../../store/slices/productSlice'
import ProductCardSkeleton from '../../ui/ProductCardSkeleton/ProductCardSkeleton'

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
							: isLoading && <ProductCardSkeleton count={6} />}
					</div>

					{error && <ErrorText errorText={`Can't load products :(`} />}
				</section>
			</Container>
		</Transition>
	)
}
