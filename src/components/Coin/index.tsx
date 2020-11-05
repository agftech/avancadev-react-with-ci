// @flow
import * as React from "react";

import "./index.css";

interface CoinProps {
	coin: string;
	oldPrice: number;
	currentPrice: number;
}
export const Coin: React.FC<CoinProps> = (props) => {
	const { coin, oldPrice, currentPrice } = props;
	const classes = ["Coin"];
	oldPrice < currentPrice ? classes.push("up") : classes.push("down");
	return (
		<div className={classes.join(" ")}>
			<span>{coin}</span>
			<span>R$ {currentPrice.toLocaleString()}</span>
		</div>
	);
};
