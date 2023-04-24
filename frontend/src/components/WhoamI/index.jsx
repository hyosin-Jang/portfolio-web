import styled from "styled-components"
import WhoamIBox from "./WhoamIBox"
import ScrollSlideAnimation from "../ScrollSlideAnimation"

import icon1 from "../../assets/images/icon-box-1.jpg"
import icon2 from "../../assets/images/icon-box-2.jpg"
import icon3 from "../../assets/images/icon-box-3.jpg"

const WhoAmIData = [
	{
		id: 1,
		value: "팀원들과 각자의 상황을 이해하고 존중하며 긴밀하게 소통합니다.",
		icon: icon1,
	},
	{
		id: 2,
		value: "새로운 것에 도전하는 것을 좋아하고 빠르게 성장하기 위해 배우려는 자세를 가지고 있습니다.",
		icon: icon2,
	},
	{
		id: 3,
		value: "효율적인 코드에 대해 고민하며, 클린 코드를 작성하려고 노력합니다.",
		icon: icon3,
	},
]

const WhoamI = () => {
	return (
		<Wrapper>
			<h1 className="title">Who Am I</h1>
			<ScrollSlideAnimation>
				<section className="whoami-content">
					<h2 className="subtitle-body-1">안녕하세요! 성장하는 과정을 즐기는 개발자 장효신입니다.</h2>
					<div className="box-wrapper">
						{WhoAmIData.map((data) => (
							<WhoamIBox
								key={data.id}
								text={data.value}
								icon={data.icon}
							/>
						))}
					</div>
				</section>
			</ScrollSlideAnimation>
		</Wrapper>
	)
}

export default WhoamI

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	min-height: 50rem;

	padding: 2rem 0;

	.title {
		flex: 0.5;
		padding: 0 10rem;
		font-size: 3rem;
	}

	.whoami-content {
		display: flex;
		flex-direction: column;
		margin: auto;
		padding: 0 10rem;
		flex: 2;
		text-align: center;

		.subtitle-body-1 {
			font-size: 2rem;
			font-weight: 800;
		}

		.subtitle-body-2 {
			font-size: 1.5rem;
			font-weight: 400;
		}

		.box-wrapper {
			display: flex;
			padding-top: 1rem;
			font-size: 1.5rem;
		}
	}
`
