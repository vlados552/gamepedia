import React from 'react';

export const SearchIcon = ({ height, width }) => (
	<svg
		version='1.1'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		height={height || '1rem'}
		width={width || '1rem'}
		role='img'
		aria-labelledby='title'>
		<title id='title'>Search</title>
		<path
			fill='currentColor'
			d='M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zM15.516 14.016l4.969 4.969-1.5 1.5-4.969-4.969v-0.797l-0.281-0.281c-1.125 0.984-2.625 1.547-4.219 1.547-3.609 0-6.516-2.859-6.516-6.469s2.906-6.516 6.516-6.516 6.469 2.906 6.469 6.516c0 1.594-0.563 3.094-1.547 4.219l0.281 0.281h0.797z'></path>
	</svg>
);

export const ArrowRightIcon = ({ height, width }) => (
	<svg
		version='1.1'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		height={height || '1rem'}
		width={width || '1rem'}
		role='img'
		aria-labelledby='title'>
		<title id='title'>ArrowRight</title>
		<path
			fill='currentColor'
			d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z'
		/>
	</svg>
);

export const ArrowLeftIcon = ({ height, width }) => (
	<svg
		version='1.1'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		height={height || '1rem'}
		width={width || '1rem'}
		role='img'
		aria-labelledby='title'>
		<title id='title'>ArrowLeft</title>
		<path
			fill='currentColor'
			d='M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z'
		/>
	</svg>
);
