import styles from './App.module.sass'
import { Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/Home'

// Background noise img
import backgroundImage from './images/noise-bg.jpg'
import Header from './modules/Header/Header'
import SearchBlock from './modules/SearchBlock/SearchBlock'
import { AnimatePresence } from 'framer-motion'

function App() {
	return (
		<AnimatePresence mode='wait'>
			<div className={styles.app}>
				<div className={styles.noise} style={{ backgroundImage: `url(${backgroundImage})` }}></div>
				<Header />
				<SearchBlock />

				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
		</AnimatePresence>
	)
}

export default App
