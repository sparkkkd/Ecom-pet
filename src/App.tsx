import styles from './App.module.sass'

import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Pages
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'

// Background noise img
import backgroundImage from './images/noise-bg.jpg'
import Header from './modules/Header/Header'

import SearchBlock from './modules/SearchBlock/SearchBlock'

function App() {
	const location = useLocation()

	return (
		<div className={styles.app}>
			<div className={styles.noise} style={{ backgroundImage: `url(${backgroundImage})` }}></div>
			<Header />
			<SearchBlock />
			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Home />} />
					<Route path='/catalog' element={<Catalog />} />
				</Routes>
			</AnimatePresence>
		</div>
	)
}

export default App
