import React, { useState } from 'react';

function ReadMore({ text }) {
	const [isReadMore, setIsReadMore] = useState(true);
	function handleClick() {
		setIsReadMore(!isReadMore);
	}
	function renderReadMore() {
		if (isReadMore) {
			return (
				<>
					{text.slice(0, 250) + '...'}
					<button onClick={handleClick}>Read more</button>
				</>
			);
		} else {
			return (
				<>
					{text}
					<button onClick={handleClick}>Show less</button>
				</>
			);
		}
	}

	return <>{renderReadMore()}</>;
}

export default ReadMore;
