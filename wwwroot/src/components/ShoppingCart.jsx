import { Fragment } from 'react'
import useFetchData from './../Hooks/useFetchData'
import ProductCart from './ProductCart'

function ShoppingCart() {
	const { data } = useFetchData('https://localhost:7018/Shop/ShoppingCart')

	return (
		<Fragment>
			<div className='banner'>
				<div className='banner-layer'>
					<h1 className='title-w3layouts'>
						<span className='fa fa-cart-arrow-down' aria-hidden='true'></span>
						shopping cart
					</h1>
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
											handle='removeItem'
										/>
								  ))
								: 'No data'}
							<div className='clear'></div>
						</div>
					</div>
				</div>
				<div className='copyright text-center'>
					<p>footer</p>
				</div>
			</div>
		</Fragment>
	)
}

export default ShoppingCart
