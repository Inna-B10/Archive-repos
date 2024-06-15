import axios from 'axios'
import { useEffect, useState } from 'react'
import useFetchData from '../Hooks/useFetchData'

export default function ButtonCart({ itemId, handle }) {
	const [btnText, setBtnText] = useState('')

	useEffect(() => {
		if (handle === 'addItem') {
			setBtnText('Add item')
		} else if (handle === 'removeItem') {
			setBtnText('Remove item')
		}
	}, [handle])

	const handleProductAction = (id, action) => {
		const url =
			action === 'addItem'
				? 'https://localhost:7018/Shop/AddProduct'
				: 'https://localhost:7018/Shop/RemoveProduct'
		const data = { Id: id }

		axios
			.post(url, data)
			.then(result => {
				if (result.data.statusCode === 200) {
					alert(action === 'addItem' ? 'Item added' : 'Item removed')
					useFetchData()
				} else {
					alert(action === 'addItem' ? 'No item added' : 'No item removed')
				}
			})
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<button
			type='submit'
			className='button w3l-cart'
			data-id='cart-1'
			onClick={() => handleProductAction(itemId, handle)}>
			{btnText}
		</button>
	)
}
