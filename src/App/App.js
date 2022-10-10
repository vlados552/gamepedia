import './reset.css';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Search/SearchForm';
import ResultList from '../Result/ResultList';
import ResultItem from '../Result/ResultItem';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<header>
				<Header />
			</header>
			<main className='flex-container flex-center flex-wrap flex-row-gap'>
				<SearchForm />
				<Routes>
					<Route path='/' element={<ResultList />} />
					<Route path='/:area/' element={<ResultList />} />
					<Route path='/:area/:id' element={<ResultItem />} />
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
