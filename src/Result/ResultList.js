import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getData } from '../Search/getData';
import { mockData } from '../Search/mockData';
import { ArrowRightIcon, ArrowLeftIcon } from '../Icons/Icons';

function ResultList() {
	const params = useParams();
	const [data, setData] = useState([]);
	const navigate = useNavigate();
	const searchOptions = {
		api: 'https://api.rawg.io/api/',
		endpoint: 'games',
		searchParams: {
			key: process.env.REACT_APP_RAWG_KEY,
			limit: 20,
			page: params.hasOwnProperty('page') ? parseInt(params.page) : 1,
		},
	};
	if (params.hasOwnProperty('search')) {
		searchOptions.searchParams.search = params.search;
	}
	function handleArrowLeft() {
		navigate(`/games/page/${parseInt(params.page) - 1}`);
	}
	function handleArrowRight() {
		navigate(
			`/games/page/${
				params.hasOwnProperty('page') ? parseInt(params.page) + 1 : 2
			}`
		);
	}
	useEffect(() => {
		getData(searchOptions).then((data) => {
			setData(data);
		});
		// setData(mockData(params));
	}, [params]);

	return (
		<>
			<div className='flex-container flex-wrap flex-space-evenly flex-row-gap flex-column-gap'>
				{data.hasOwnProperty('results')
					? data.results.map((element) => {
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
			<div className='center'>
				{params.hasOwnProperty('page') && params.page != 1 ? (
					<div id='arrow-left' className='div-arrow' onClick={handleArrowLeft}>
						<ArrowLeftIcon height='1rem' width='1rem' />
					</div>
				) : null}
				{params.hasOwnProperty('page') ? params.page : 1} /{' '}
				{data.hasOwnProperty('count')
					? Math.floor(data.count / searchOptions.searchParams.limit)
					: '...'}
				<div id='arrow-right' className='div-arrow' onClick={handleArrowRight}>
					<ArrowRightIcon height='1rem' width='1rem' />
				</div>
			</div>
		</>
	);
}

export default ResultList;
