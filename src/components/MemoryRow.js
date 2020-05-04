import React from "react";
import { memory } from "../buttons";

const MemoryRow = () => {
	return (
		<div className="calculator__memory-row">
			{memory.map((button) => (
				<div key={button.id} id={button.id} className={button.className}>
					{button.content}
				</div>
			))}
		</div>
	);
};

export default MemoryRow;
