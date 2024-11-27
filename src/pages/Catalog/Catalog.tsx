import styles from './Catalog.module.sass'

import Transition from '../../components/Transition/Transition'
import Container from '../../modules/Container/Container'

export default function Catalog() {
	return (
		<Transition>
			<Container>
				<section className={styles.wrapper}>Catalog</section>
			</Container>
		</Transition>
	)
}
