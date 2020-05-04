import React from "react";
import Display from "./Display";
import Memory from "./Memory";
import Buttons from "./Buttons";
import CALC_ACTION_TYPES from "../../data/actionTypes";
import {
	memoryAdd,
	memoryClear,
	memoryMinus,
	memoryRead,
	memorySet,
	clear,
	cancel,
	invertNumber,
	addComma,
	back,
	equal,
	callSpecialFunction,
	addToHistory,
} from "../../data/actions";

const Main = ({ store }) => {
	const [state, dispatch] = store;
	const { memoryValue, displayValue, previousValue } = state;

	// console.log(displayValue, previousValue);

	const square = () => {
		dispatch(callSpecialFunction(Math.sqrt(displayValue)));

		createHistoryElement(
			displayValue,
			"Math.sqrt",
			"",
			Math.sqrt(displayValue)
		);
	};

	const power = () => {
		dispatch(callSpecialFunction(displayValue ** 2));
		createHistoryElement(displayValue, "^", 2, displayValue ** 2);
	};

	const fraction = () => {
		const result = 1 / displayValue;
		dispatch(callSpecialFunction(result));
		createHistoryElement(1, "/", displayValue, result);
	};

	const percent = () =>
		dispatch(callSpecialFunction((previousValue * displayValue) / 100));

	const getValuesToCalculations = (hasRepeatedValue) => {
		const displayValue = Number(state.displayValue);
		const previousValue = hasRepeatedValue
			? state.repeatedValue
			: Number(state.previousValue);

		return [displayValue, previousValue];
	};

	const getRepeatedValue = (hasRepeatedValue, newValue) => {
		if (hasRepeatedValue === null) return Number(newValue);

		return hasRepeatedValue
			? state.repeatedValue
			: state.wasEqualClicked
			? newValue
			: Number(state.displayValue);
	};

	const createHistoryElement = (firstValue, char, secondValue, result) => {
		const history = {
			firstValue,
			char,
			secondValue,
			result,
		};
		dispatch(addToHistory(history));
	};

	const addition = (hasRepeatedValue) => {
		console.log(hasRepeatedValue);

		if (state.isFunctionDone) {
			console.log("done");
		}
		const [] = getValuesToCalculations(hasRepeatedValue);
	};

	const attachFunctionToButton = (button) => {
		if (button.className.includes("calculator__button--is-number")) {
			dispatch({
				type: CALC_ACTION_TYPES.CONCATENATE_NUMBER,
				payload: button.content,
			});
		}

		switch (button.id) {
			case "js-percent":
				return percent();
			case "js-cancel":
				return dispatch(cancel());
			case "js-clear":
				return dispatch(clear());
			case "js-back":
				return dispatch(back());
			case "js-fraction":
				return fraction();
			case "js-power":
				return power();
			case "js-square":
				return square();
			case "js-divide":
				return console.log("divide");
			case "js-multiply":
				return console.log("multiply");
			case "js-subtraction":
				return console.log("subtraction");
			case "js-addition":
				return addition();
			case "js-invert":
				return dispatch(invertNumber());
			case "js-comma":
				return dispatch(addComma());
			case "js-equal":
				return dispatch(equal());
			case "js-MC":
				return dispatch(memoryClear());
			case "js-MR":
				return dispatch(memoryRead(memoryValue));
			case "js-M+":
				return dispatch(memoryAdd());
			case "js-M-":
				return dispatch(memoryMinus());
			case "js-MS":
				return dispatch(memorySet());
			default:
				console.warn(
					`I didn't find element with id: ${button.id} functionality of calculator can be invalid`
				);
		}
	};

	return (
		<div className='calculator__main-wrapper'>
			<Display displayValue={state.displayValue} />
			<Memory attachFunctionToButton={attachFunctionToButton} />
			<Buttons attachFunctionToButton={attachFunctionToButton} />
		</div>
	);
};

export default Main;
