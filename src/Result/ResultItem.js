import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../Search/getData';
import ReadMore from '../ReadMore/ReadMore';

function ResultItem(props) {
	const params = useParams();
	const [data, setData] = useState({});
	const searchOptions = {
		api: 'https://api.rawg.io/api/',
		endpoint: `games/${params.id}`,
		searchParams: {
			key: process.env.REACT_APP_RAWG_KEY,
		},
	};

	useEffect(() => {
		getData(searchOptions).then((data) => {
			setData(data);
		});
	}, [params]);

	function renderData() {
		return (
			<div className='grid-container grid-template-item'>
				<img className='grid-area-ai' src={data.background_image} alt='' />
				<h3 className='grid-area-an'>{data.name}</h3>
				<h6 className='grid-area-ar'>Released: {data.released}</h6>
				<p className='grid-area-ac'>Metacritic: {data.metacritic}</p>
				<p className='grid-area-ad'>
					<ReadMore text={data.description_raw} />
				</p>
			</div>
		);
	}

	return Object.keys(data).length > 0 ? renderData() : 'Loading...';
}

export default ResultItem;
