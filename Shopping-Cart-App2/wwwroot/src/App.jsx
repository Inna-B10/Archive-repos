import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import ProductsList from './components/ProductsList'
import ShoppingCart from './components/ShoppingCart'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<ProductsList />} />
				<Route path='/ShoppingCart' element={<ShoppingCart />} />
			</Routes>
		</Router>
	)
}
export default App
