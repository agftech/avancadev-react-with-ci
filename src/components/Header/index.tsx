import * as React from "react";
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props) => {
	return (
		<div className='Header'>
			<h1>Hello Header</h1>
			<hr></hr>
		</div>
	);
};
