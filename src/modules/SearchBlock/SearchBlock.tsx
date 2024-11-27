import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { toggleSearch } from '../../store/slices/userActionSlice'
import styles from './SearchBlock.module.sass'

import { AnimatePresence, motion, Variants } from 'framer-motion'

const variants: Variants = {
	initial: {
		opacity: 0,
	},
	open: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
}

const containerVariants: Variants = {
	initial: {
		transition: {
			staggerChildren: 0.1,
		},
	},

	open: {
		transition: {
			staggerChildren: 0.1,
		},
	},

	exit: {
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.1,
		},
	},
}

const itemVariants: Variants = {
	initial: {
		opacity: 0,
		y: -50,
		transition: {
			duration: 0.5,
		},
	},

	open: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
}

export default function SearchBlock() {
	const dispatch = useAppDispatch()

	const { isSearch } = useAppSelector((state) => state.userActionSlice)

	return (
		<AnimatePresence>
			{isSearch && (
				<motion.div
					variants={variants}
					initial='initial'
					animate='open'
					exit='initial'
					layout
					className={styles.wrapper}
				>
					<motion.div className={styles.actions} variants={containerVariants}>
						<motion.input
							variants={itemVariants}
							className={styles.input}
							type='text'
							placeholder='Search...'
						/>
						<motion.button
							variants={itemVariants}
							onClick={() => dispatch(toggleSearch())}
							className={styles.close}
						>
							Close
						</motion.button>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
