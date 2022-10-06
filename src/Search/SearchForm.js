import React from 'react';
import { SearchIcon } from '../Icons/Icons';

function SearchForm(props) {
	let searchString;
	function handleSubmit() {}
	function handleChange() {}
	return (
		<form onSubmit={handleSubmit} className='form-horizontal'>
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
	);
}

export default SearchForm;
