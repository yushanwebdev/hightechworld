import React, { Component } from 'react';
import styled from 'styled-components';
import footerImg from '../img/footer-img.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	return(
		<FooterContainer>
			<footer>
				<div className="container footer-container">
					<h2>Get Our Updates Always Fast</h2>
					<ul className="social-media">
						<li>
							<a href="https://www.facebook.com/" title="Facebook">
								<FontAwesomeIcon icon={faFacebook} />
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/" title="Instagram">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>
						<li>
							<a href="mailto:watchdevelopers@gmail.com" title="Email">
								<FontAwesomeIcon icon={faAt} />
							</a>
						</li>
					</ul>
				</div>
			</footer>
			<div className="copyright">
				<div className="container copyright-container">
					<p className="copyright-text">Copyright © 2020 WATCH. All rights reserved.</p>
					<p className="developed-text">Website Development & Hosting by WATCH</p>
				</div>
			</div>
		</FooterContainer>
	);
}

const FooterContainer = styled.div`
	footer {
		font-family: 'Rajdhani', sans-serif;
		background: center no-repeat url(/static/media/footer-img.85bda741.webp);
		background-size: cover;
		height: 266px;
		color: var(--mainWhite);
		display: flex;
		justify-content: center;
		align-items: center;

		.footer-container {
			text-align:  center;

			h2 {
				font-size: 2.2em;
			}

			.social-media {
				list-style: none;
				display: flex;
				padding-left: 0;
				display: flex;
				justify-content: center;

				li {
					margin: 0 15px;

					a {
						color: #fff;

						svg {
							width: 40px;
							height: auto;
						}
					}

					a:hover {
						color: var(--mainOrange);
					}
				}
			}
		}
	}

	.copyright {
		font-size: 0.9em;
		padding: 15px 0;

		.copyright-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;

			p {
				margin-top: 0
			}
		}
	}

	@media (min-width: 768px) {
	.copyright .copyright-container {
		flex-direction: row;
		justify-content: space-between;

		p {
			margin: 0;
		}
	}

	}
`;