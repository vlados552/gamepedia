import './reset.css';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Search/SearchForm';
import SearchResult from '../Search/SearchResult';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<header>
				<Header />
			</header>
			<main>
				{/* <SearchForm /> */}
				<Routes>
					<Route path='/' element={<SearchResult />} />
					<Route path='/:area/' element={<SearchResult />} />
					<Route path='/:area/:id' element={<SearchResult />} />
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
