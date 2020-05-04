import React from "react";

const History = ({ store }) => {
	const [state] = store;

	return (
		<div className='calculator__history-wrapper'>
			<p className='calculator__history-title'>History:</p>
			<div className='calculator__container'>{state.historyDisplay}</div>
		</div>
	);
};

export default History;
