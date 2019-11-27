import React, {useContext} from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import { Switch, Route } from 'react-router-dom'
import {Context} from './CartContext'

const App = () => {    
	const test = useContext(Context)
	console.log("test")
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/">
					<Photos />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
			</Switch>
		</div>
	)
}

export default App