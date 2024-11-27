import { Link } from 'react-router-dom'
import styles from './Header.module.sass'

import { CiSearch, CiUser, CiShoppingCart } from 'react-icons/ci'
import Container from '../Container/Container'
import { useAppDispatch } from '../../store/hooks'
import { toggleSearch } from '../../store/slices/userActionSlice'

export default function Header() {
	const dispatch = useAppDispatch()

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
						<CiShoppingCart />
					</div>
				</div>
			</Container>
		</header>
	)
}
