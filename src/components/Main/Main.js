import React from "react";
import Display from "./Display";
import Memory from "./Memory";
import Buttons from "./Buttons";

const Main = ({ store }) => {
	const [state] = store;

	return (
		<div className='calculator__main-wrapper'>
			<Display displayValue={state.displayValue} />
			<Memory store={store} />
			<Buttons store={store} />
		</div>
	);
};

export default Main;
