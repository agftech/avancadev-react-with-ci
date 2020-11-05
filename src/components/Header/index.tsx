import * as React from "react";
import { Coin } from "../Coin";
import "./index.css";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props) => {
	return (
		<div className='Header'>
			<Coin coin='BTC' oldPrice={0} currentPrice={10} />
		</div>
	);
};
