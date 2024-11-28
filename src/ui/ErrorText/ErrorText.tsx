import styles from './ErrorText.module.sass'

interface ErrorTextProps {
	errorText: string
}

export default function ErrorText({ errorText }: ErrorTextProps) {
	return <span className={styles.error}>{errorText}</span>
}
