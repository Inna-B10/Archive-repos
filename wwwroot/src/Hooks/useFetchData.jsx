import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useFetchData(url) {
	const [data, setData] = useState([])

	useEffect(() => {
		axios
			.get(url)
			.then(result => {
				setData(result.data.listProducts)
			})
			.catch(error => {
				console.log(error)
			})
	}, [url])

	return { data, setData }
}
