import styled from "styled-components"
import Profile from "../assets/images/profile.jpeg"

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
								<td>cdnnl@gmail.com</td>
							</tr>
							<tr>
								<td>Github</td>
								<td>https://깃허브링크</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>cdnnl@gmail.com</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>cdnnl@gmail.com</td>
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
	width: 100%;
	background-color: yellow;
	padding: 3rem 0;

	.title {
		padding: 0 10rem;
		font-size: 3rem;
	}

	.aboutme-content {
		display: flex;
		margin: auto;
		gap: 10rem;
		.profile {
			width: 20rem;
			height: 20rem;
		}

		.aboutme-info {
			.name {
				color: brown;
				font-size: 2rem;
			}
			table {
				border-collapse: separate;
				border-spacing: 0 1.3rem;

				tr > td {
					font-size: 1.4rem;
				}
				tr > td:nth-child(1) {
					font-weight: 800;
				}
			}
		}
	}
`
