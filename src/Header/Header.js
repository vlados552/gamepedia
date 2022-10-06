import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<nav>
			<Link to={'/'}>Gamepedia</Link>
			<Link to={'/games'}>Games</Link>
			<Link to={'/developers'}>Developers</Link>
			<Link to={'/genres'}>Genres</Link>
		</nav>
	);
}

export default Header;
