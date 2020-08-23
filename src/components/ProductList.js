import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function ProductList() {
	return(
		<ProductListContainer>
			<div className="container">
				<ProductItemContainer>
					<div className="product-img">
						<img src="/img/phone-1.jpg" />

						<div className="product-buttons">
							<Link to="/detail.html">
								READ MORE
							</Link>
							<Link to="/detail.html">
								ADD TO CART
							</Link>
						</div>
					</div>
					<div className="product-content">
						<h4>Apple IPhone XR</h4>
						<p className="price">Rs. 101.00</p>
					</div>
				</ProductItemContainer>
				<ProductItemContainer>
					<div className="product-img">
						<img src="/img/phone-1.jpg" />

						<div className="product-buttons">
							<Link to="/detail.html">
								READ MORE
							</Link>
							<Link to="/detail.html">
								ADD TO CART
							</Link>
						</div>
					</div>
					<div className="product-content">
						<h4>Apple IPhone XR</h4>
						<p className="price">Rs. 101.00</p>
					</div>
				</ProductItemContainer>
				<ProductItemContainer>
					<div className="product-img">
						<img src="/img/phone-1.jpg" />

						<div className="product-buttons">
							<Link to="/detail.html">
								READ MORE
							</Link>
							<Link to="/detail.html">
								ADD TO CART
							</Link>
						</div>
					</div>
					<div className="product-content">
						<h4>Apple IPhone XR</h4>
						<p className="price">Rs. 101.00</p>
					</div>
				</ProductItemContainer>
			</div>
		</ProductListContainer>
	);
}

const ProductListContainer = styled.div`
	@media (min-width: 768px) {
		.container {
			display: flex;
			flex-flow: wrap;
			justify-content: space-between;
		}
	}
`;

const ProductItemContainer = styled.div`
	border: 2px solid #f4f4f4;
	margin-bottom: 50px;

	a {
		display: inline-block;
		width: 50%;
		text-align: center;
		font-size: .9em;
		text-decoration: none;
		color: var(--mainLightBlack);
		padding: 15px 10px;
		box-sizing: border-box;

		:first-child {
			background-color: var(--mainLightBlack);
			color: #fff;
		}

		:hover {
			background-color: var(--mainOrange);
			color: #fff;
		}
	}


	.product-content {
		text-align: center;
		background-color: #f4f4f4;
		padding: 35px 10px;

		h4 {
			margin-top: 0;
		}

		p {
			margin-bottom: 0;
		}
	}

	@media (min-width: 768px) {
		width: 48%;
	}

	@media (min-width: 1024px) {
		width: 31%;
	}
`;