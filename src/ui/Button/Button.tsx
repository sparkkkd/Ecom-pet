import styles from './Button.module.sass'

interface ButtonProps {
	text: string
	onClick: () => void
	buttonStyles?: React.CSSProperties
}

export default function Button({ text, onClick, buttonStyles }: ButtonProps) {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		onClick()
	}

	return (
		<button onClick={handleClick} style={buttonStyles} className={styles.button}>
			{text}
		</button>
	)
}
