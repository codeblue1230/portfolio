// External Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'firebase/auth'

// Internal Imports
import { Home, About, MyPortfolio, Contact } from './components/index'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/about' element={<About/>}/>
				<Route path='/portfolio' element={<MyPortfolio/>}/>
				<Route path='/contact' element={<Contact/>}/>
			</Routes>
		</Router>
  	</React.StrictMode>
)
