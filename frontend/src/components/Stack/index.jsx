import styled from "styled-components"
import Chart from "./Chart"

const data = {
	labels: ["Javascript", "css", "html"],
	datasets: [
		{
			labels: ["Javascript", "css", "html"],
			data: [60, 13, 27],
			borderWidth: 2,
			hoverBorderWidth: 3,
			backgroundColor: ["rgba(238, 102, 121, 1)", "rgba(98, 181, 229, 1)", "rgba(255, 198, 0, 1)"],
			fill: true,
		},
	],
}

const Stack = () => {
	return (
		<Wrapper>
			<h1 className="title">Tech Stack</h1>
			<div className="chart-content">
				<Chart data={data} />
			</div>
		</Wrapper>
	)
}
export default Stack

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: lightyellow;
	min-height: 60rem;
	.title {
		padding: 0 10rem;
		font-size: 3rem;
	}
	padding: 5rem 0;

	.chart-content {
		display: flex;
		justify-content: center;
	}
`
