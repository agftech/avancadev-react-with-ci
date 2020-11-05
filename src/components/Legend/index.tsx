import * as React from "react";

interface LegendProps {
	legend: string;
}
export const Legend: React.FC<LegendProps> = (props) => {
	const { legend } = props;
	return <div>{legend}</div>;
};
