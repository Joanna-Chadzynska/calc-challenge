import React, { useReducer } from "react";
import ButtonsRow from "./ButtonsRow";
import History from "./History";
import MemoryRow from "./MemoryRow";

const actions = {
	CONCATENATE_NUMBER: "CONCATENATE_NUMBER",
	CHANGE_DISPLAY_VALUE: "CHANGE_DISPLAY_VALUE	",
	CLEAR_PREVIOUS_VALUE: "CLEAR_PREVIOUS_VALUE",
	CLEAR_SELECTED_FUNCTION: "CLEAR_SELECED_FUNCTION",
	CALL_SPECIAL_FUNCTION: "CALL_SPECIAL_FUNCTION",
};

const initState = {
	memoryValue: 0,
	displayValue: "0",
	previousValue: null,
	inFunctionDone: false,
	selectedFuncion: null,
	repeatedValue: 0,
	wasEqualClicked: false,
	wasScecialFunctionClicked: false,
	historyDisplay: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case actions.CONCATENATE_NUMBER:
			return {
				displayValue:
					state.displayValue === null ||
					state.displayValue === "0" ||
					state.wasScecialFunctionClicked
						? action.payload
						: state.displayValue + action.payload,

				previousValue: state.wasEqualClicked && 0,
				repeatedValue: state.wasEqualClicked && 0,
				wasEqualClicked: state.wasEqualClicked && false,
				isFunctionDone: false,
				wasScecialFunctionClicked: false,
			};
		case actions.CHANGE_DISPLAY_VALUE:
			const isNoValue = action.value === null || action.value === "";
			return {
				displayValue: isNoValue ? "0" : action.value.toString(),
			};

		case actions.CLEAR_PREVIOUS_VALUE:
			return {
				previousValue: null,
			};
		case actions.CLEAR_SELECTED_FUNCTIONE:
			return { selectedFuncion: null };

		case actions.CALL_SPECIAL_FUNCTION:
			return {
				wasEqualClicked: false,
				wasScecialFunctionClicked: true,
			};
		default:
			return state;
	}
};

const Calculator = () => {
	const [state, dispatch] = useReducer(reducer, initState);

	const { displayValue, historyDisplay, previousValue } = state;

	const addComma = () => {
		if (displayValue.includes(".")) {
			dispatch({
				type: actions.CHANGE_DISPLAY_VALUE,
				value: `${displayValue ? displayValue : "0"}.`,
			});
		}
	};
	const back = () => {
		dispatch({
			type: actions.CHANGE_DISPLAY_VALUE,
			value: displayValue ? displayValue.slice(0, -1) : null,
		});
	};
	const cancel = () => {
		dispatch({ type: actions.CHANGE_DISPLAY_VALUE, value: null });
	};

	const clear = () => {
		dispatch({ type: actions.CLEAR_SELECTED_FUNCTION });
		dispatch({ type: actions.CLEAR_PREVIOUS_VALUE });
		dispatch({ type: actions.CHANGE_DISPLAY_VALUE, value: null });
	};

	const invertNumber = () => {
		dispatch({
			type: actions.CHANGE_DISPLAY_VALUE,
			value:
				displayValue >= 0 ? -Math.abs(displayValue) : Math.abs(displayValue),
		});
	};

	const callSpecialFunction = (value) => {
		dispatch({ type: actions.CALL_SPECIAL_FUNCTION });
		dispatch({ type: actions.CHANGE_DISPLAY_VALUE, value: value });
	};

	const square = () => {
		callSpecialFunction(Math.sqrt(displayValue));
	};

	const power = () => {
		callSpecialFunction(displayValue ** 2);
	};

	const fraction = () => {
		callSpecialFunction(1 / displayValue);
	};

	const percent = () => {
		callSpecialFunction((previousValue * displayValue) / 100);
	};

	const attachFunctionToButton = (button) => {
		if (button.className.includes("calculator__button--is-number")) {
			dispatch({ type: actions.CONCATENATE_NUMBER, payload: button.content });
		}

		switch (button.id) {
			case "js-percent":
				return percent();
			case "js-cancel":
				return cancel();
			case "js-clear":
				return clear();
			case "js-back":
				return back();
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
				return console.log("subtracion");
			case "js-addition":
				return console.log("addition");
			case "js-invert":
				return invertNumber();
			case "js-comma":
				return addComma();
			case "js-equal":
				return console.log("equal");
			default:
				console.log("no function");
		}
	};
	return (
		<div className="calculator">
			<div className="calculator__main-wrapper">
				<div className="calculator__display" id="js-display">
					{displayValue}
				</div>
				<MemoryRow />
				<ButtonsRow handleClick={attachFunctionToButton} />
				<History history={historyDisplay} />
			</div>
		</div>
	);
};

export default Calculator;
