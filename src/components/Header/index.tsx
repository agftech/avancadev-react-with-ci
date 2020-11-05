import * as React from "react";
import "./index.css";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props) => {
	return (
		<div className='Header'>
			<h1>Hello Header</h1>
		</div>
	);
};
