import CALC_ACTION_TYPES from "./actionTypes";

const initState = {
	memoryValue: 0,
	displayValue: "0",
	previousValue: null,
	inFunctionDone: false,
	selectedFunction: null,
	repeatedValue: 0,
	wasEqualClicked: false,
	wasSpecialFunctionClicked: false,
	historyDisplay: null,
};

const calcReducer = (state, action) => {
	switch (action.type) {
		case CALC_ACTION_TYPES.CONCATENATE_NUMBER:
			return {
				displayValue:
					state.displayValue === null ||
					state.displayValue === "0" ||
					state.wasSpecialFunctionClicked
						? action.payload
						: state.displayValue + action.payload,

				previousValue: state.wasEqualClicked && 0,
				repeatedValue: state.wasEqualClicked && 0,
				wasEqualClicked: state.wasEqualClicked && false,
				isFunctionDone: false,
				wasSpecialFunctionClicked: false,
			};
		case CALC_ACTION_TYPES.CHANGE_DISPLAY_VALUE:
			const isNoValue = action.value === null || action.value === "";
			return {
				displayValue: isNoValue ? "0" : action.value.toString(),
			};

		case CALC_ACTION_TYPES.CLEAR_PREVIOUS_VALUE:
			return {
				previousValue: null,
			};
		case CALC_ACTION_TYPES.CLEAR_SELECTED_FUNCTIONE:
			return { selectedFunction: null };

		case CALC_ACTION_TYPES.CALL_SPECIAL_FUNCTION:
			return {
				wasEqualClicked: false,
				wasSpecialFunctionClicked: true,
			};
		default:
			return state;
	}
};

export default { calcReducer, initState };
