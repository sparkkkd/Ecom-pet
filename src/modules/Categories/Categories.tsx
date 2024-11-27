import styles from './Categories.module.sass'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchCategories } from '../../store/slices/categoriesSlice'
import { useEffect } from 'react'
import Loader from '../../components/Loader/Loader'
import { AnimatePresence, motion, Variants } from 'framer-motion'

export default function Categories() {
	const { categories, isLoading, error } = useAppSelector((state) => state.categoriesSlice)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchCategories())
	}, [])

	console.log(error)

	return (
		<AnimatePresence>
			<motion.nav variants={containerVariants} className={styles.wrapper}>
				{isLoading && <Loader />}
				{error && <span className={styles.error}>Can't load categories :(</span>}
				{categories.length ? <CategoriesList categories={categories} /> : null}
			</motion.nav>
		</AnimatePresence>
	)
}

interface ICategoriesList {
	categories: string[]
}

const variants: Variants = {
	initial: {
		opacity: 0,
		y: -50,
	},
	open: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
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

function CategoriesList({ categories }: ICategoriesList) {
	return (
		<motion.ul
			className={styles.list}
			variants={containerVariants}
			initial='initial'
			animate='open'
			exit='exit'
		>
			{categories.map((item) => (
				<motion.li variants={variants} key={item} className={styles.item}>
					{item}
				</motion.li>
			))}
			<motion.li variants={variants} className={styles.item}>
				All
			</motion.li>
		</motion.ul>
	)
}
