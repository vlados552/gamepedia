import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../Search/SearchForm';

function Header() {
	return (
		<nav className='flex-container flex-space-evenly flex-center'>
			<Link to={'/'}>
				<h1>Gamepedia</h1>
			</Link>
			<SearchForm />
		</nav>
	);
}

export default Header;
