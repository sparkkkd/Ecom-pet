import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App.tsx'

import { store } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter basename='/'>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)
