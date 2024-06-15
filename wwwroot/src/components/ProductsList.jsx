import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import useFetchData from './../Hooks/useFetchData'
import ProductCart from './ProductCart'

function ProductsList() {
	const { data } = useFetchData('https://localhost:7018/Shop/ProductsList')

	return (
		<Fragment>
			<div className='banner'>
				<div className='banner-layer'>
					<h1 className='title-w3layouts'>Products list</h1>
				</div>
				<div className='wthreeproductdisplay'>
					<div className='container'>
						<div className='top-grid'>
							{data.length > 0
								? data.map((item, index) => (
										<ProductCart
											key={index}
											index={index}
											item={item}
											handle='addItem'
										/>
								  ))
								: 'No data'}
							<div className='clear'></div>
						</div>
					</div>
				</div>
				<div className='wthreecartaits wthreecartaits2 cart cart box_1'>
					<input type='hidden' name='cmd' value='_cart' />
					<input type='hidden' name='display' value='1' />
					<Link to='/ShoppingCart'>
						<button className='w3view-cart' type='submit'>
							view cart
							<span className='fa fa-cart-arrow-down' aria-hidden='true'></span>
						</button>
					</Link>
				</div>
				<div className='copyright text-center'>
					<p>footer</p>
				</div>
			</div>
		</Fragment>
	)
}

export default ProductsList
