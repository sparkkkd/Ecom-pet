import { Link } from 'react-router-dom'
import styles from './Header.module.sass'

import { CiSearch, CiUser, CiShoppingCart } from 'react-icons/ci'

export default function Header() {
	return (
		<header className={styles.header}>
			<CiSearch className={styles.search} />
			<Link to='/' className={styles.logo}>
				sprk
			</Link>
			<div className={styles.userButtons}>
				<CiUser />
				<CiShoppingCart />
			</div>
		</header>
	)
}
