import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getData } from '../Search/getData';
import { mockData } from '../Search/mockData';

function SearchResult() {
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

	return (
		<div className='flex-container flex-wrap flex-space-evenly flex-row-gap'>
			{data.length > 0
				? data.map((element) => {
						return (
							<section key={element.id}>
								<Link to={`/games/${element.id}`}>
									<img src={element.background_image} alt={element.name} />
									<p>{element.name}</p>
								</Link>
							</section>
						);
				  })
				: 'Loading...'}
		</div>
	);
}

export default SearchResult;
