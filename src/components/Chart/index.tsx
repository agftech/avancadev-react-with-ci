import { createChart, CrosshairMode, ISeriesApi } from "lightweight-charts";
import * as React from "react";
import { cryptoHttp } from "../../http";
import { Legend } from "../Legend";

import "./index.css";

interface ChartProps {}

export const Chart: React.FC<ChartProps> = (props) => {
	const containerRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
	const candleSeriesRef = React.useRef() as React.MutableRefObject<
		ISeriesApi<"Candlestick">
	>;
	const [prices, setPrices] = React.useState<any[]>([]);

	React.useEffect(() => {
		cryptoHttp.get(`histoday?fsym=USD&tsym=BRL&limit=300`).then((response) => {
			const prices = response.data.Data.map((row: any) => ({
				time: row.time,
				low: row.low,
				high: row.high,
				open: row.open,
				close: row.close,
				volume: row.volumefrom,
			}));
			setPrices(prices);
		});
	}, []);

	React.useEffect(() => {
		if (candleSeriesRef.current) {
			candleSeriesRef.current.setData(prices);
		}
	}, [prices]);

	React.useEffect(() => {
		const chart = createChart(containerRef.current, {
			width: containerRef.current.clientWidth,
			height: containerRef.current.clientHeight,
			layout: {
				backgroundColor: "#253248",
				textColor: "rgba(255,255,255,0.9)",
			},
			grid: {
				vertLines: {
					color: "#334158",
				},
				horzLines: {
					color: "#334158",
				},
			},
			crosshair: {
				mode: CrosshairMode.Normal,
			},
			//@ts-ignore
			priceScale: {
				borderColor: "#485c7b",
			},
			timeScale: {
				borderColor: "#485c7b",
			},
		});
		candleSeriesRef.current = chart.addCandlestickSeries({
			upColor: "#4bffb5",
			downColor: "#ff4976",
			borderDownColor: "#ff4976",
			borderUpColor: "#4bffb5",
			wickDownColor: "#838ca1",
			wickUpColor: "#838ca1",
		});
	}, []);

	return (
		<div className='Chart' ref={containerRef}>
			<Legend legend='USD' />
		</div>
	);
};
