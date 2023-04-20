import styled from "styled-components"
import WhoamIBox from "./WhoamIBox"
import ScrollSlideAnimation from "../ScrollSlideAnimation"

import icon1 from "../../assets/images/icon-box-1.jpg"
import icon2 from "../../assets/images/icon-box-2.jpg"
import icon3 from "../../assets/images/icon-box-3.jpg"

const dummy = [
	{
		id: 1,
		value: "javascript 기반으로 프론트엔드 블라블라블라",
		icon: icon1,
	},
	{
		id: 2,
		value: "컴퓨터 공학 기초 지식, 기본기 블라블라",
		icon: icon2,
	},
	{
		id: 3,
		value: "컴퓨터 공학 기초 지식, 기본기 블라블라",
		icon: icon3,
	},
]

const WhoamI = () => {
	return (
		<Wrapper>
			<h1 className="title">Who Am I</h1>
			<ScrollSlideAnimation>
				<section className="whoami-content">
					<h2 className="subtitle-body-1">저는 이러이러한 개발자입니다</h2>
					<h3 className="subtitle-body-2">부가설명:이러러이러한 사람입니다</h3>

					<div className="box-wrapper">
						{dummy.map((data) => (
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
	min-height: 40rem;
	background-color: skyblue;
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
