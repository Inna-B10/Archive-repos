import { Fragment } from 'react'
import ButtonCart from './ButtonCart'

export default function ProductCart({ index, item, handle, updateCart }) {
	return (
		<Fragment>
			<div className='cart-grid' id={`cart-${index}`}>
				<div className='img'>
					<img src={`./assets/images/${item.image}`} alt='img' />
				</div>
				<div className='prod-name'>{item.name}</div>
				<ul className='info'>
					<li>${item.discountedPrice}</li>
					<li className='right-text'>${item.actualPrice}</li>
				</ul>
				<div className='snipcart-details'>
					<ButtonCart
						key={index}
						itemId={item.id}
						handle={handle}
						updateCart={updateCart}
					/>
				</div>
			</div>
		</Fragment>
	)
}
