const ADDITION_ID = "js-addition";
const BACK_ID = "js-back";
const CANCEL_ID = "js-cancel";
const CLEAR_ID = "js-clear";
const COMMA_ID = "js-comma";
const CONTAINER_CLASS_SELECTOR = ".calculator__container";
const DISPLAY_ID = "js-display";
const DIVIDE_ID = "js-divide";
const EQUAL_ID = "js-equal";
const FRACTION_ID = "js-fraction";
const INVERT_ID = "js-invert";
const MEMORY_ADD_ID = "js-M+";
const MEMORY_CLEAR_ID = "js-MC";
const MEMORY_MINUS_ID = "js-M-";
const MEMORY_READ_ID = "js-MR";
const MEMORY_SET_ID = "js-MS";
const MULTIPLY_ID = "js-multiply";
const NUMBER_CLASS_SELECTOR = ".calculator__button--is-number";
const PERCENT_ID = "js-percent";
const POWER_ID = "js-power";
const SUBSTRACTION_ID = "js-subtraction";
const SQUARE_ID = "js-square";

class Calculator {
	constructor() {
		this.memoryValue = 0;
		this.displayValue = "0";
		this.previousValue = null;
		this.selectedFunction = null;
		this.isFunctionDone = false;
		this.repeatedValue = 0;
		this.wasEqualClicked = false;
		this.wasSpecialFunctionClicked = false;
		this.historyDisplay = null;

		this.attachToDisplay();
		this.attachToNumbers();
		this.attachToButtons();
	}

	// concatenateNumber(event) {
	// 	this.displayValue =
	// 		this.displayValue === null ||
	// 		this.displayValue === "0" ||
	// 		this.wasSpecialFunctionClicked
	// 			? event.target.textContent
	// 			: this.displayValue + event.target.textContent;

	// 	if (this.wasEqualClicked) {
	// 		this.previousValue = 0;
	// 		this.repeatedValue = 0;
	// 		this.wasEqualClicked = false;
	// 	}

	// 	this.isFunctionDone = false;
	// 	this.wasSpecialFunctionClicked = false;

	// 	this.display.textContent = this.displayValue;
	// }

	addition(hasRepetedValue) {
		this.callPreviousFunctionAndChangeIt(this.addition, hasRepetedValue);
		if (this.isFunctionDone) {
			this.handleSecondClickOnFunction();

			return;
		}

		const [displayValue, previousValue] = this.getValuesToCalculations(
			hasRepetedValue
		);
		const newValue = displayValue + previousValue;

		this.createHistoryElement(displayValue, "+", previousValue, newValue);

		this.repeatedValue = this.getRepeatedValue(hasRepetedValue, newValue);
		this.afterNewValueCalculation(newValue);
	}

	substraction(hasRepetedValue) {
		this.callPreviousFunctionAndChangeIt(this.substraction, hasRepetedValue);
		if (this.isFunctionDone) {
			this.handleSecondClickOnFunction();

			return;
		}

		const [displayValue, previousValue] = this.getValuesToCalculations(
			hasRepetedValue
		);
		let newValue;

		if (this.previousValue !== null) {
			newValue = hasRepetedValue
				? displayValue - this.repeatedValue
				: previousValue - displayValue;

			this.repeatedValue = this.getRepeatedValue(hasRepetedValue, newValue);
		}

		this.afterNewValueCalculation(newValue);
	}

	multiplication(hasRepetedValue) {
		this.callPreviousFunctionAndChangeIt(this.multiplication, hasRepetedValue);
		if (this.isFunctionDone) {
			this.handleSecondClickOnFunction();

			return;
		}

		const [displayValue, previousValue] = this.getValuesToCalculations(
			hasRepetedValue
		);
		const newValue = displayValue * previousValue;

		this.repeatedValue = this.getRepeatedValue(hasRepetedValue, newValue);
		this.afterNewValueCalculation(newValue);
	}

	divide(hasRepetedValue) {
		this.callPreviousFunctionAndChangeIt(this.divide, hasRepetedValue);
		if (this.isFunctionDone) {
			this.handleSecondClickOnFunction();

			return;
		}

		const [displayValue, previousValue] = this.getValuesToCalculations(
			hasRepetedValue
		);
		const newValue = hasRepetedValue
			? displayValue / this.repeatedValue
			: this.previousValue === 0
			? displayValue
			: previousValue / displayValue;

		this.repeatedValue = this.getRepeatedValue(hasRepetedValue, newValue);
		this.afterNewValueCalculation(newValue);
	}

	callPreviousFunctionAndChangeIt(previousFunction, hasRepetedValue) {
		if (this.selectedFunction !== previousFunction && this.selectedFunction) {
			this.selectedFunction(hasRepetedValue);
		}

		this.selectedFunction = previousFunction;
	}

	handleSecondClickOnFunction() {
		this.repeatedValue = this.getRepeatedValue(null, this.previousValue);
		this.displayValue = "0";
		this.wasEqualClicked = false;
	}

	afterNewValueCalculation(newValue) {
		this.isFunctionDone = true;
		this.wasEqualClicked = false;
		this.displayValue = null;
		this.display.textContent =
			this.previousValue !== null ? newValue : this.display.textContent;
		this.previousValue =
			this.previousValue !== null ? newValue : this.display.textContent;
	}

	// getRepeatedValue(hasRepetedValue, newValue) {
	// 	if (hasRepetedValue === null) {
	// 		return Number(newValue);
	// 	}

	// 	return hasRepetedValue
	// 		? this.repeatedValue
	// 		: this.wasEqualClicked
	// 		? newValue
	// 		: Number(this.display.textContent);
	// }

	// getValuesToCalculations(hasRepetedValue) {
	// 	const displayValue = Number(this.display.textContent);
	// 	const previousValue = hasRepetedValue
	// 		? this.repeatedValue
	// 		: Number(this.previousValue);

	// 	return [displayValue, previousValue];
	// }


