import React from 'react'
import './App.css'
// COMPONENTS
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
// IMPORT REACT ROUTER DOM
import { Routes, Route } from 'react-router-dom'

const App = () => (
	<Routes>
		<Route path="/" index element={<Home />} />
		<Route path="/detail/:code" element={<Detail />} />
	</Routes>
)
export default App
