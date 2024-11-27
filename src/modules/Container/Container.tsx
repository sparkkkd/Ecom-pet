import styles from './Container.module.sass'

interface IContainerProps {
	children: React.ReactNode
	style?: React.CSSProperties
}

export default function Container({ children, style }: IContainerProps) {
	return (
		<div style={style} className={styles.container}>
			{children}
		</div>
	)
}
