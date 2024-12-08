import styles from './Home.module.sass'

import Categories from '../../modules/Categories/Categories'
import Container from '../../modules/Container/Container'
import Transition from '../../components/Transition/Transition'

import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<Transition>
			<section className={styles.section}>
				<Container>
					<div className={styles.wrapper}>
						<h1 className={styles.title}>
							Manage <br />
							your <br />
							style
						</h1>
						<span className={styles.subtitle}>
							With us you will be as fresh and stylish as possible, it is only necessary to consider
							the categories below
						</span>
						<Categories />
						<Link to='/catalog' className={styles.button}>
							Catalog
						</Link>
					</div>
				</Container>
			</section>
		</Transition>
	)
}
