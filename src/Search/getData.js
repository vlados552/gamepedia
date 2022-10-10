export const getData = async (searchObject) => {
	const url = `${searchObject.api}${searchObject.endpoint}?key=${
		searchObject.key
	}&page_size=${searchObject.limit}${
		searchObject.hasOwnProperty('searchString')
			? `&search=${searchObject.searchString}`
			: ''
	}${searchObject.id != null ? `&id=${searchObject.id}` : ''}`;
	let result;
	await fetch(url)
		.then((res) => res.json())
		.then((data) => {
			if (searchObject.id != null) {
				result = [data];
			} else {
				result = data.results;
			}
		})
		.catch(console.error);
	return result;
};
