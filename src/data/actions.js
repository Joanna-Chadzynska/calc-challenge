import CALC_ACTION_TYPES from "./actionTypes";

// const {
// 	displayValue,
// 	historyDisplay,
// 	previousValue,
// 	repeatedValue,
// 	wasEqualClicked,
// 	selectedFunction,
// } = state;

// const callSpecialFunction = (value) => {
// 	dispatch({ type: actions.CALL_SPECIAL_FUNCTION });
// 	dispatch({ type: actions.CHANGE_DISPLAY_VALUE, value: value });
// };

// const getRepeatedValue = (hasRepeatedValue, newValue) => {
// 	if (hasRepeatedValue === null) return Number(newValue);

// 	return hasRepeatedValue
// 		? repeatedValue
// 		: wasEqualClicked
// 		? newValue
// 		: Number(previousValue);
// };

// const getValuesToCalculations = (hasRepeatedValue) => {
// 	const displayValue = Number(displayValue);
// 	const previousValue = hasRepeatedValue
// 		? repeatedValue
// 		: Number(previousValue);

// 	return [displayValue, previousValue];
// };

// const callPreviousFunctionAndChangeId = (
// 	previousFunction,
// 	hasRepeatedValue
// ) => {
// 	if (selectedFunction !== previousFunction && selectedFunction) {
// 		selectedFunction(hasRepeatedValue);
// 	}

// 	selectedFunction = previousFunction;
// };

// const handleSecondClickOnFunction = () => {
// 	repeatedValue = getRepeatedValue(null, previousValue);
// 	displayValue = "0";
// 	wasEqualClicked = false;
// };

// const addComma = () => {
// 	if (displayValue.includes(".")) {
// 		dispatch({
// 			type: actions.CHANGE_DISPLAY_VALUE,
// 			value: `${displayValue ? displayValue : "0"}.`,
// 		});
// 	}
// };
// const back = () => {
// 	dispatch({
// 		type: actions.CHANGE_DISPLAY_VALUE,
// 		value: displayValue ? displayValue.slice(0, -1) : null,
// 	});
// };
// const cancel = () => {
// 	dispatch({ type: actions.CHANGE_DISPLAY_VALUE, value: null });
// };

// const clear = () => {
// 	dispatch({ type: actions.CLEAR_SELECTED_FUNCTION });
// 	dispatch({ type: actions.CLEAR_PREVIOUS_VALUE });
// 	dispatch({ type: actions.CHANGE_DISPLAY_VALUE, value: null });
// };

// const invertNumber = () => {
// 	dispatch({
// 		type: actions.CHANGE_DISPLAY_VALUE,
// 		value:
// 			displayValue >= 0 ? -Math.abs(displayValue) : Math.abs(displayValue),
// 	});
// };

// const square = () => {
// 	callSpecialFunction(Math.sqrt(displayValue));
// };

// const power = () => {
// 	callSpecialFunction(displayValue ** 2);
// };

// const fraction = () => {
// 	callSpecialFunction(1 / displayValue);
// };

// const percent = () => {
// 	callSpecialFunction((previousValue * displayValue) / 100);
// };

// const attachFunctionToButton = (button) => {
// 	if (button.className.includes("calculator__button--is-number")) {
// 		dispatch({ type: actions.CONCATENATE_NUMBER, payload: button.content });
// 	}

// 	switch (button.id) {
// 		case "js-percent":
// 			return percent();
// 		case "js-cancel":
// 			return cancel();
// 		case "js-clear":
// 			return clear();
// 		case "js-back":
// 			return back();
// 		case "js-fraction":
// 			return fraction();
// 		case "js-power":
// 			return power();
// 		case "js-square":
// 			return square();
// 		case "js-divide":
// 			return console.log("divide");
// 		case "js-multiply":
// 			return console.log("multiply");
// 		case "js-subtraction":
// 			return console.log("subtraction");
// 		case "js-addition":
// 			return console.log("addition");
// 		case "js-invert":
// 			return invertNumber();
// 		case "js-comma":
// 			return addComma();
// 		case "js-equal":
// 			return console.log("equal");
// 		default:
// 			console.log("no function");
// 	}
// };
