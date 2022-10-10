import './reset.css';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ResultList from '../Result/ResultList';
import ResultItem from '../Result/ResultItem';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<header className='flex-container flex-wrap'>
				<Header />
			</header>
			<main className='flex-container flex-center flex-wrap flex-row-gap'>
				<Routes>
					<Route path='*' element={<ResultList />} />
					<Route path='/' element={<ResultList />} />
					<Route path='/games/page/:page' element={<ResultList />} />
					<Route path='/games/:id' element={<ResultItem />} />
					<Route path='/search/:search' element={<ResultList />} />
				</Routes>
			</main>
			<footer className='flex-container flex-center flex-center-justify'>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
