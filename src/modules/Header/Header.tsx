import { Link } from 'react-router-dom'
import styles from './Header.module.sass'

import { CiSearch, CiUser, CiShoppingCart } from 'react-icons/ci'
import Container from '../Container/Container'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { toggleSearch } from '../../store/slices/userActionSlice'

export default function Header() {
	const dispatch = useAppDispatch()
	const cartCount = useAppSelector((state) => state.userActionSlice.cartCount)

	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.wrapper}>
					<CiSearch onClick={() => dispatch(toggleSearch())} className={styles.search} />
					<Link to='/' className={styles.logo}>
						sprk
					</Link>
					<div className={styles.userButtons}>
						<CiUser />
						<Link to='/cart'>
							<CiShoppingCart />
							<span className={styles.cartCount}>{cartCount ? cartCount : null}</span>
						</Link>
					</div>
				</div>
			</Container>
		</header>
	)
}
