import React, { useReducer } from "react";
import History from "./History/History";
import Main from "./Main";
import { calc } from "../data/index";

const Calculator = () => {
	const { calcReducer, initState } = calc;
	const store = useReducer(calcReducer, initState);

	return (
		<div className='calculator'>
			<Main store={store} />
			<History store={store} />
		</div>
	);
};

export default Calculator;
