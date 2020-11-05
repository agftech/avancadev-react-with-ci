import * as React from "react";
import { Coin } from "../Coin";
import "./index.css";

interface HeaderProps {}

interface Price {
	[key: string]: { oldPrice: number; currentPrice: number };
}

const ALL_PRICES: Price = {
	BTC: { oldPrice: 0, currentPrice: 0 },
	LTC: { oldPrice: 0, currentPrice: 0 },
	USD: { oldPrice: 0, currentPrice: 0 },
};

export const Header: React.FC<HeaderProps> = (props) => {
	const [prices, setPrices] = React.useState<Price>(ALL_PRICES);
	return (
		<div className='Header'>
			{Object.keys(prices).map((coin) => (
				<div onClick={() => {}}>
					<Coin
						coin={coin}
						oldPrice={prices[coin].oldPrice}
						currentPrice={prices[coin].currentPrice}
					/>
				</div>
			))}
		</div>
	);
};
