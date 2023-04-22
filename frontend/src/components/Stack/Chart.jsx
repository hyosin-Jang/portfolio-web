import styled from "styled-components"
import {Doughnut} from "react-chartjs-2"
import ScrollSlideAnimation from "../ScrollSlideAnimation"
import "chart.js/auto"

const Chart = ({data}) => {
	return (
		<Wrapper>
			<ScrollSlideAnimation>
				<Doughnut
					options={{
						legend: {
							display: true,
							position: "right",
						},
					}}
					data={data}
					height={120}
				/>
			</ScrollSlideAnimation>
		</Wrapper>
	)
}
export default Chart

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	width: 50rem;
	height: 50rem;
`
