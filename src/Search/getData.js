export const getData = async (searchObject) => {
	const url = new URL(`${searchObject.endpoint}`, `${searchObject.api}`);
	url.search = new URLSearchParams(searchObject.searchParams).toString();

	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
