import styles from './App.module.sass'
import { Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/Home'

// Background noise img
import backgroundImage from './images/noise-bg.jpg'
import Header from './modules/Header/Header'

function App() {
	return (
		<div className={styles.app}>
			<div className={styles.noise} style={{ backgroundImage: `url(${backgroundImage})` }}></div>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	)
}

export default App
