import styled from "styled-components"
import Profile from "../assets/images/profile.jpeg"
import backgroundImg from "../assets/images/background.jpeg"
import {theme} from "../styles/theme"

const Aboutme = () => {
	return (
		<Wrapper>
			<h1 className="title">About Me</h1>
			<section className="aboutme-content">
				<img
					className="profile"
					alt="profile"
					src={Profile}
				/>
				<div className="aboutme-info">
					<h2 className="name">Hyosin Jang</h2>
					<table>
						<tbody>
							<tr>
								<td>Email</td>
								<td>
									<a href="">cdnnnl@gmail.com</a>
								</td>
							</tr>
							<tr>
								<td>Github</td>
								<td>
									<a
										href="https://github.com/hyosin-Jang"
										target="_blank">
										https://github.com/hyosin-Jang
									</a>
								</td>
							</tr>
							<tr>
								<td>Blog</td>
								<td>
									<a
										href="https://codingwiths.tistory.com"
										target="_blank">
										https://codingwiths.tistory.com
									</a>
								</td>
							</tr>
							<tr>
								<td>Instagram</td>
								<td>
									<a
										href="https://www.instagram.com/cdnnnnl/"
										target="_blank">
										https://www.instagram.com/cdnnnnl
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</Wrapper>
	)
}

export default Aboutme

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;

	min-height: 60rem;
	position: relative;
	width: 100%;
	background-image: url(${backgroundImg});
	color: white;
	padding: 3rem 0;

	.title {
		padding: 0 10rem;
		font-size: 3rem;
	}

	.aboutme-content {
		display: flex;
		margin: 10rem;

		gap: 5rem;
		.profile {
			width: 25rem;
			height: 25rem;
			border-radius: 2rem;
			box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01), 0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09), 0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
		}

		.aboutme-info {
			.name {
				font-size: 3rem;
				margin: 1rem;
			}
			table {
				border-collapse: separate;
				border-spacing: 0 1.3rem;

				tr > td:first-child {
					background-color: ${theme.colors.black};
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 2rem;
					padding: 0.7rem;
					font-size: 1.4rem;
					opacity: 0.8;
					color: ${theme.colors.lightPurple};
					margin-right: 1.3rem;
				}

				tr > td {
					font-size: 1.5rem;
				}
				tr > td:nth-child(1) {
					font-weight: 800;
				}
			}
		}
	}
`
