import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
// IMPORT REACT ROUTER DOM
import { HashRouter } from 'react-router-dom'
// IMPORT APOLLO CLIENT
import { ApolloProvider } from '@apollo/client'
import client from './config/ApolloConfig/ApolloConfig'

createRoot(document.getElementById('root')).render(
	<HashRouter>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</HashRouter>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
