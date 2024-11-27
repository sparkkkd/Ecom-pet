import styles from './Transition.module.sass'
import { ReactNode } from 'react'

import { motion } from 'framer-motion'

interface TransitionProps {
	children: ReactNode
}

export default function Transition({ children }: TransitionProps) {
	return (
		<>
			{children}
			<motion.div
				className={styles.slideIn}
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
			/>
			<motion.div
				className={styles.slideOut}
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
			/>
		</>
	)
}
