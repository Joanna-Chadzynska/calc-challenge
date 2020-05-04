import CALC_ACTION_TYPES from "./actionTypes";

// *** MEMORY ***//
export const memoryAdd = () => ({ type: CALC_ACTION_TYPES.MEMORY_ADD });

export const memoryClear = () => ({ type: CALC_ACTION_TYPES.MEMORY_CLEAR });

export const memoryMinus = () => ({ type: CALC_ACTION_TYPES.MEMORY_MINUS });

// export const changeDisplayValue = (value) => ({
// 	type: CALC_ACTION_TYPES.CHANGE_DISPLAY_VALUE,
// 	value,
// });

export const memoryRead = (value) => ({
	type: CALC_ACTION_TYPES.MEMORY_READ,
	value: value,
});

export const memorySet = () => ({ type: CALC_ACTION_TYPES.MEMORY_SET });

// *** SPECIAL FUNCTIONS *** //

export const clear = () => ({ type: CALC_ACTION_TYPES.CALC_CLEAR });

export const cancel = () => ({ type: CALC_ACTION_TYPES.CALC_CANCEL });

export const invertNumber = () => ({
	type: CALC_ACTION_TYPES.CALC_INVERT_NUMBER,
});

export const addComma = () => ({ type: CALC_ACTION_TYPES.CALC_ADD_COMMA });

export const back = () => ({ type: CALC_ACTION_TYPES.CALC_BACK });

export const equal = () => ({ type: CALC_ACTION_TYPES.CALC_EQUAL });

export const callSpecialFunction = (value) => ({
	type: CALC_ACTION_TYPES.CALC_CALL_SPECIAL_FUNCTION,
	value,
});

export const getValuesToCalculations = (value) => ({
	type: CALC_ACTION_TYPES.FUNC_GET_VALUES_TO_CALCULATIONS,
	value,
});

export const addToHistory = (payload) => ({
	type: CALC_ACTION_TYPES.HISTORY_CREATE,
	payload,
});
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
