import styles from './BackArrow.module.sass'

import { useNavigate } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'

export default function BackArrow() {
	const navigate = useNavigate()

	return (
		<div className={styles.wrapper} onClick={() => navigate(-1)}>
			<IoIosArrowRoundBack className={styles.arrow} />
		</div>
	)
}
