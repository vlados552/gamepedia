export const getData = (searchObject) => {
	const url = `${searchObject.api}${searchObject.endpoint}?key=${
		searchObject.key
	}&page_size=${searchObject.limit}${
		searchObject.hasOwnProperty('searchString')
			? `&search=${searchObject.searchString}`
			: ''
	}`;
	let result;
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			result = data.results;
		})
		.catch(console.error);
	return result;
};
