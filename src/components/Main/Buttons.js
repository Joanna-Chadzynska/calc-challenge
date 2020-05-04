import React from "react";
import { calcButtons } from "./data";
import Button from "./Button";

const Buttons = ({ attachFunctionToButton }) => {
	return (
		<div className='calculator__buttons-wrapper'>
			{calcButtons.map((button) => (
				<Button
					key={button.id}
					id={button.id}
					className={button.className}
					button={button}
					handleClick={() => attachFunctionToButton(button)}>
					{button.content}
				</Button>
			))}
		</div>
	);
};

export default Buttons;
