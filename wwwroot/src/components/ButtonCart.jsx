import axios from 'axios'
import PropTypes from 'prop-types'

ButtonCart.propTypes = {
	itemId: PropTypes.number.isRequired,
	handle: PropTypes.string.isRequired,
	updateCart: PropTypes.func.isRequired,
}

export default function ButtonCart({ itemId, handle, updateCart }) {
	const handleRemoveProduct = id => {
		const data = { Id: id }
		axios
			.post('https://localhost:7018/Shop/RemoveProduct', data)
			.then(result => {
				if (result.data.statusCode === 200) {
					alert('Item removed')
					updateCart(prevData => prevData.filter(item => item.id !== id))
				} else {
					alert('No item removed')
				}
			})
			.catch(error => {
				console.log(error)
			})
	}

	const handleAddProduct = id => {
		const data = { Id: id }
		axios
			.post('https://localhost:7018/Shop/AddProduct', data)
			.then(result => {
				if (result.data.statusCode === 200) {
					alert('Item added')
				} else {
					alert('No item added')
				}
			})
			.catch(error => {
				console.log(error)
			})
	}

	const handleClick = () => {
		if (handle === 'addItem') {
			handleAddProduct(itemId)
		} else if (handle === 'removeItem') {
			handleRemoveProduct(itemId)
		}
	}

	return (
		<button
			type='submit'
			className='button w3l-cart'
			data-id={`cart-${itemId}`}
			onClick={handleClick}>
			{handle === 'addItem' ? 'Add item' : 'Remove item'}
		</button>
	)
}
