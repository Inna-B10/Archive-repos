import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetchData = url => {
	const [data, setData] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
		axios
			.get(url)
			.then(result => {
				setData(result.data.listProducts)
			})
			.catch(error => {
				setError(error)
				console.log(error)
			})
	}, [url])

	return { data, error }
}

export default useFetchData
