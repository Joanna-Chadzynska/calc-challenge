import React from "react";
import { buttons } from "../buttons";

const ButtonsRow = ({ handleClick }) => {
	return (
		<div className="calculator__buttons-wrapper">
			{buttons.map((button) => (
				<div
					onClick={() => handleClick(button)}
					key={button.id}
					id={button.id}
					className={button.className}
				>
					{button.content}
				</div>
			))}
		</div>
	);
};

export default ButtonsRow;
