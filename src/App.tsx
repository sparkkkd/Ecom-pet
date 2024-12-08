import styles from './App.module.sass'

import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Pages
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'

// Background noise img
import backgroundImage from './images/noise-bg.jpg'

// Modules
import SearchBlock from './modules/SearchBlock/SearchBlock'
import Header from './modules/Header/Header'
import { Toaster } from 'sonner'

function App() {
	const location = useLocation()

	return (
		<div className={styles.app}>
			<div className={styles.noise} style={{ backgroundImage: `url(${backgroundImage})` }}></div>
			<Toaster richColors />
			<Header />
			<SearchBlock />
			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Home />} />
					<Route path='/catalog' element={<Catalog />} />
					<Route path='/product/:id' element={<Product />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</AnimatePresence>
		</div>
	)
}

export default App
