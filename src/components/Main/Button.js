import React from "react";

const Button = ({ children, id, className, handleClick }) => {
	return (
		<div id={id} className={className} onClick={handleClick}>
			{children}
		</div>
	);
};

export default Button;
