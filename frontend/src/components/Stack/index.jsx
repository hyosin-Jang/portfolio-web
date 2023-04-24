import styled from "styled-components"
import Chart from "./Chart"
import {useRecoilValue} from "recoil"
import {projectStacks} from "../../utils/atom"

const Stack = ({stacks}) => {
	const projectStack = useRecoilValue(projectStacks)
	const stackLabel = stacks.map((stack) => stack.stack_name)
	const defaultstacks = stacks.map((stack) => [stack.stack_name, 0])
	const map = new Map(defaultstacks)

	projectStack.forEach((project) => {
		const {Stacks} = project
		Stacks.map((stack) => {
			const {stack_name} = stack
			map.set(stack_name, map.get(stack_name) + 1)
		})
	})

	const stackData = Array.from(map.values())

	const data = {
		labels: stackLabel,
		datasets: [
			{
				labels: stackLabel,
				data: stackData,
				borderWidth: 2,
				hoverBorderWidth: 3,
				backgroundColor: ["rgba(238, 102, 121, 1)", "rgba(98, 181, 229, 1)", "rgba(255, 198, 0, 1)"],
				fill: true,
			},
		],
	}

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
	background-color: black;
	color: white;
	min-height: 60rem;
	.title {
		padding: 0 10rem;
		font-size: 3rem;
	}
	padding: 5rem 0;

	.chart-content {
		display: flex;

		margin: auto;
		justify-content: center;
		align-items: center;
	}
`
