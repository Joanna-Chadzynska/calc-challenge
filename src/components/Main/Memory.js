import React from "react";
import { memoryButtons } from "./data";
import Button from "./Button";

const Memory = ({ attachFunctionToButton }) => {
	return (
		<div className='calculator__memory-row'>
			{memoryButtons.map((button) => (
				<Button
					key={button.id}
					id={button.id}
					className={button.className}
					handleClick={() => attachFunctionToButton(button)}>
					{button.content}
				</Button>
			))}
		</div>
	);
};

export default Memory;
