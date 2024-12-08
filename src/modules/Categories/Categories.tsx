import styles from './Categories.module.sass'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchCategories } from '../../store/slices/categoriesSlice'
import { useEffect, useState } from 'react'
import Loader from '../../ui/Loader/Loader'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import ErrorText from '../../ui/ErrorText/ErrorText'
import { toggleCategory } from '../../store/slices/userActionSlice'
import { Link } from 'react-router-dom'

export default function Categories() {
	const { categories, isLoading, error } = useAppSelector((state) => state.categoriesSlice)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchCategories())
	}, [])

	return (
		<AnimatePresence>
			<motion.nav variants={containerVariants} className={styles.wrapper}>
				{isLoading && <Loader />}
				{error && <ErrorText errorText={`Can't load categories :(`} />}
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
	const [activeIndex, setActiveIndex] = useState<number>(-1)
	const dispatch = useAppDispatch()

	const handleCategoryClick = (category: string, index: number) => {
		dispatch(toggleCategory(category))
		setActiveIndex(index)
	}

	const categoriesWithAll: string[] = ['All', ...categories]

	return (
		<motion.ul
			className={styles.list}
			variants={containerVariants}
			initial='initial'
			animate='open'
			exit='exit'
		>
			{categoriesWithAll.map((item, index) => (
				<motion.li
					variants={variants}
					key={item}
					className={(activeIndex === index ? styles.active : '') + ' ' + styles.item}
					onClick={() => handleCategoryClick(item, index)}
				>
					<Link to={`/catalog`}>{item}</Link>
				</motion.li>
			))}
			{/* <motion.li
				variants={variants}
				className={styles.item}
				onClick={() => handleCategoryClick('', 1)}
			>
				<Link to={`/catalog`}>All</Link>
			</motion.li> */}
		</motion.ul>
	)
}
