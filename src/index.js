import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
// import { StateManager } from './state-manager'
import { store } from './store'
import { App } from './app'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)
