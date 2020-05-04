import CALC_ACTION_TYPES from "./actionTypes";

const initState = {
	memoryValue: 0,
	displayValue: "0",
	previousValue: null,
	selectedFunction: null,
	inFunctionDone: false,
	repeatedValue: 0,
	wasEqualClicked: false,
	wasSpecialFunctionClicked: false,
	historyDisplay: null,
};

const calcReducer = (state = initState, action) => {
	switch (action.type) {
		case CALC_ACTION_TYPES.CONCATENATE_NUMBER:
			return {
				...state,
				displayValue:
					state.displayValue === null ||
					state.displayValue === "0" ||
					state.wasSpecialFunctionClicked
						? action.payload
						: state.displayValue + action.payload,

				previousValue: state.wasEqualClicked ? 0 : state.previousValue,
				repeatedValue: state.wasEqualClicked ? 0 : state.repeatedValue,
				wasEqualClicked: state.wasEqualClicked && false,
				isFunctionDone: false,
				wasSpecialFunctionClicked: false,
			};

		// case CALC_ACTION_TYPES.CHANGE_DISPLAY_VALUE:
		// 	const isNoValue = action.value === null || action.value === "";
		// 	return {
		// 		...state,
		// 		displayValue: isNoValue ? "0" : action.value.toString(),
		// 	};

		case CALC_ACTION_TYPES.MEMORY_ADD:
			return {
				...state,
				wasSpecialFunctionClicked: true,
				memoryValue: state.memoryValue + Number(state.displayValue),
			};

		case CALC_ACTION_TYPES.MEMORY_CLEAR:
			return {
				...state,
				wasSpecialFunctionClicked: true,
				memoryValue: 0,
			};

		case CALC_ACTION_TYPES.MEMORY_MINUS:
			return {
				...state,
				wasSpecialFunctionClicked: true,
				memoryValue: state.memoryValue - Number(state.displayValue),
			};

		case CALC_ACTION_TYPES.MEMORY_READ:
			const isNoValu = action.value === null || action.value;
			return {
				...state,
				wasSpecialFunctionClicked: true,
				displayValue: isNoValu ? "0" : action.value.toString(),
			};

		case CALC_ACTION_TYPES.MEMORY_SET:
			return {
				...state,
				wasSpecialFunctionClicked: true,
				memoryValue: Number(state.displayValue),
			};

		case CALC_ACTION_TYPES.CALC_CLEAR:
			return {
				...state,
				previousValue: null,
				selectedFunction: null,
				displayValue: "0",
			};

		case CALC_ACTION_TYPES.CALC_CANCEL:
			return {
				...state,
				displayValue: "0",
			};

		case CALC_ACTION_TYPES.CALC_INVERT_NUMBER:
			return {
				...state,
				displayValue:
					state.displayValue >= 0
						? -Math.abs(state.displayValue)
						: Math.abs(state.displayValue),
			};

		case CALC_ACTION_TYPES.CALC_ADD_COMMA:
			return {
				...state,
				displayValue:
					!state.displayValue.includes(".") &&
					`${state.displayValue ? state.displayValue : "0"}.`,
			};

		case CALC_ACTION_TYPES.CALC_BACK:
			return {
				...state,
				displayValue: state.displayValue
					? state.displayValue.slice(0, -1)
					: null,
			};

		case CALC_ACTION_TYPES.CALC_EQUAL:
			return {
				...state,
				isFunctionDone: false,
				selectedFunction: !state.wasEqualClicked ? false : true,
				wasEqualClicked: true,
			};

		case CALC_ACTION_TYPES.CALC_CALL_SPECIAL_FUNCTION:
			const isNoValue = action.value === null || action.value === "";
			return {
				...state,
				wasEqualClicked: false,
				wasSpecialFunctionClicked: true,
				displayValue: isNoValue ? "0" : action.value.toString(),
			};

		case CALC_ACTION_TYPES.FUNC_GET_VALUES_TO_CALCULATIONS:
			return {
				...state,
				displayValue: Number(state.displayValue),
				previousValue: action.value
					? state.repeatedValue
					: Number(state.previousValue),
			};

		case CALC_ACTION_TYPES.HISTORY_CREATE:
			return {
				...state,
				historyDisplay: action.payload,
			};
		// case CALC_ACTION_TYPES.CHANGE_DISPLAY_VALUE:
		// 	const isNoValue = action.value === null || action.value === "";
		// 	return {
		// 		displayValue: isNoValue ? "0" : action.value.toString(),
		// 	};

		// case CALC_ACTION_TYPES.CLEAR_PREVIOUS_VALUE:
		// 	return {
		// 		previousValue: null,
		// 	};
		// case CALC_ACTION_TYPES.CLEAR_SELECTED_FUNCTIONE:
		// 	return { selectedFunction: null };

		// case CALC_ACTION_TYPES.CALL_SPECIAL_FUNCTION:
		// 	return {
		// 		wasEqualClicked: false,
		// 		wasSpecialFunctionClicked: true,
		// 	};
		default:
			return state;
	}
};

export default { calcReducer, initState };
