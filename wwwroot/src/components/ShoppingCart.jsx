import axios from 'axios'
import { Fragment, useEffect, useState } from 'react'
// import '../../public/assets/css/style.css'

function ShoppingCart() {
	const [data, setData] = useState([])

	const getData = () => {
		axios
			.get('https://localhost:7018/Shop/ShoppingCart')
			.then(result => {
				console.log(result.data.listProducts)
				setData(result.data.listProducts)
			})
			.catch(error => {
				console.log(error)
			})
	}

	useEffect(() => {
		getData()
	}, [])

	const handleRemoveProduct = id => {
		const data = {
			Id: id,
		}
		axios
			.post('https://localhost:7018/Shop/RemoveProduct', data)
			.then(result => {
				if (result.data.statusCode === 200) {
					alert('Item removed')
					getData()
				} else {
					alert('No item removed')
				}
			})
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<Fragment>
			<div className='banner'>
				<div className='banner-layer'>
					<h1 className='title-w3layouts'>
						<span className='fa fa-cart-arrow-down' aria-hidden='true'></span>
						shopping cart
					</h1>
				</div>

				{/* <div className='wthreeproductdisplay'> */}
				<div className='wthreeproductdisplay'>
					<div className='container'>
						<div className='top-grid'>
							{data && data.length > 0
								? data.map((item, index) => {
										return (
											<Fragment key={index}>
												<div className='cart-grid' id='cart-1'>
													<div className='img'>
														<img
															src={'./assets/images/' + item.image}
															alt='img'
														/>
													</div>
													<div className='prod-name'>{item.name}</div>
													<ul className='info'>
														<li>${item.discountedPrice}</li>
														<li className='right-text'>${item.actualPrice}</li>
													</ul>
													<div className='snipcart-details '>
														<input type='hidden' name='cmd' value='_cart' />
														<input type='hidden' name='add' value='1' />
														<input
															type='hidden'
															name='w3l_item'
															value='Striped Top'
														/>
														<input type='hidden' name='amount' value='25.00' />
														<input
															type='hidden'
															name='item_name'
															value='Product #001'
														/>
														<button
															type='submit'
															className='button w3l-cart'
															data-id='cart-1'
															onClick={() => handleRemoveProduct(item.id)}>
															Remove Item
														</button>
													</div>
												</div>
											</Fragment>
										)
								  })
								: 'No data'}

							<div className='clear'></div>
						</div>
					</div>
				</div>
				{/*
				// <div className='wthreecartaits wthreecartaits2 cart cart box_1'>
				<div>
					<form action='#' method='post' className='last'>
						<input type='hidden' name='cmd' value='_cart' />
						<input type='hidden' name='display' value='1' />
						<button
							className='w3view-cart'
							type='submit'
							name='submit'
							value=''>
							view cart
							<span className='fa fa-cart-arrow-down' aria-hidden='true'></span>
						</button>
					</form>
				</div>
        */}
				<div className='copyright text-center'>
					<p>footer</p>
				</div>
			</div>
		</Fragment>
	)
}
export default ShoppingCart
