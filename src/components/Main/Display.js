import React from "react";

const Display = ({ displayValue }) => {
	return (
		<div className='calculator__display' id='js-display'>
			{displayValue}
		</div>
	);
};

export default Display;
