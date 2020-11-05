import * as React from "react";

interface ChartProps {}

export const Chart: React.FC<ChartProps> = (props) => {
	const containerRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
	return <div className='Chart' ref={containerRef}></div>;
};
