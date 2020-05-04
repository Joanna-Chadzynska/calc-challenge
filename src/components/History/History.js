import React from "react";

const History = ({ store }) => {
	const [state] = store;
	const { historyDisplay } = state;

	return (
		<div className='calculator__history-wrapper'>
			<p className='calculator__history-title'>History:</p>
			<div className='calculator__container'>
				<p className='calculator__history-element'>
					{!historyDisplay
						? null
						: `${historyDisplay.firstValue} ${historyDisplay.char} ${historyDisplay.secondValue} = ${historyDisplay.result}`}
				</p>
			</div>
		</div>
	);
};

export default History;
