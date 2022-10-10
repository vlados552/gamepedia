import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockData } from '../Search/mockData';

function ResultItem(props) {
	const params = useParams();
	const [data, setData] = useState([]);
	const searchOptions = {
		api: 'https://api.rawg.io/api/',
		endpoint: params.hasOwnProperty('area') ? params.area : 'games',
		key: process.env.REACT_APP_RAWG_KEY,
		limit: 20,
		id: params.hasOwnProperty('id') ? params.id : null,
	};

	useEffect(() => {
		// getData(searchOptions).then((data) => {
		// 	setData(data);
		// });
		setData(mockData(params));
	}, [params]);

	function renderData() {
		return (
			<div className='grid-container grid-template-item'>
				<img className='grid-area-ai' src={data[0].background_image} alt='' />
				<h3 className='grid-area-an'>{data[0].name}</h3>
				<h6 className='grid-area-ar'>Released: {data[0].released}</h6>
				<p className='grid-area-ac'>Metacritic: {data[0].metacritic}</p>
			</div>
		);
	}

	return data.length > 0 ? renderData() : 'Loading...';
}

export default ResultItem;
