import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '../Icons/Icons';

function SearchForm(props) {
	const [searchString, setSearchString] = useState('');
	const navigate = useNavigate();
	function handleSubmit(e) {
		e.preventDefault();
		navigate(`/search/${searchString}`);
		setSearchString('');
	}
	function handleChange(e) {
		setSearchString(e.target.value);
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					placeholder='Search'
					type='text'
					name='searchString'
					required
					onChange={handleChange}
					value={searchString}
				/>
				<button type='submit'>
					<SearchIcon height='1rem' width='1rem' />
				</button>
			</form>
		</div>
	);
}

export default SearchForm;
