import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App.tsx'

import { store } from './store/store.ts'
import { SkeletonTheme } from 'react-loading-skeleton'

createRoot(document.getElementById('root')!).render(
	<SkeletonTheme baseColor='#eaeaea'>
		<BrowserRouter basename='Ecom-pet'>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</SkeletonTheme>
)
