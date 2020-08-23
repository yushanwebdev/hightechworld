import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../img/logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
	render() {
		return(
			<HeaderContainer class="header-default">
				<div class="container header-container">
					<div class="header-branding">
						<Link to="/">
							<img src={logo} alt="High Tech World" width="129" height="45" />
						</Link>
					</div>

					<div class="header-links">
						<nav>
							<ul>
								<li>
									<Link to="/">
										Home
									</Link>
								</li>
								<li>
									<Link to="/products/">
										Products
									</Link>
								</li>
							</ul>
						</nav>

						<div className="shopping-cart">
							<Link to="/">
								<FontAwesomeIcon icon={faShoppingCart} />
							</Link>
						</div>
					</div>
				</div>
			</HeaderContainer>
		);
	}
}

const HeaderContainer = styled.header`
	.header-container {
		font-weight: 500;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 20px;
		padding-bottom: 20px;

		.header-branding,
		nav {
			margin-bottom: 15px;
		}

		.header-branding {
			line-height: 0;
		}

		.header-links {
			display: flex;
			align-items: center;
			flex-direction: column;

			nav ul {
			  list-style: none;
			  display: flex;
			  padding-left: 0;
			  margin: 0;

			  li {
			  	margin: 0 10px;
			  }
			}

			.shopping-cart svg {
				width: 18px;
				height: auto;
				margin-right: 5px;
			}
		}

		a {
		  	color: var(--mainBlack);
		  	text-decoration: none;
		}

		a:hover {
		  	color: var(--mainOrange);
		}
	}

	@media (min-width: 768px) {
		.container {
			flex-direction: row;
			justify-content: space-between;

			.header-branding,
			nav {
				margin-bottom: 0;
			}

			.header-links {
				flex-direction: row;

				nav ul li {
					margin: 0 15px;
				}

				.shopping-cart {
					margin-left: 15px;
				}
			}
		}
	}
`;