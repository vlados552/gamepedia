import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SearchForm from './Search/SearchForm';
import SearchResult from './Search/SearchResult';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<header>
				<Header />
			</header>
			<main>
				<SearchForm />
				<Routes>
					<Route path='/' element={<SearchResult area={'games'} />} />
					<Route path='/games/:id' element={<SearchResult area={'games'} />} />
					<Route
						path='/developers/:id'
						element={<SearchResult area={'developers'} />}
					/>
					<Route
						path='/genres/:id'
						element={<SearchResult area={'genres'} />}
					/>
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
