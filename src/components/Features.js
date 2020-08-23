import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faPercent, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

export default function Features() {
	return(
		<FeaturesContainer>
			<div className="container">
				<div className="featured-item">
					<div className="featured-icon">
						<FontAwesomeIcon icon={faShippingFast} />
					</div>
					<div className="featured-content">
						<p>FREE SHIPPING</p>
						<p>For orders over $50</p>
					</div>
				</div>
				<div className="featured-item">
					<div className="featured-icon">
						<FontAwesomeIcon icon={faPercent} />
					</div>
					<div className="featured-content">
						<p>OFFICIAL DISCOUNTS</p>
						<p>Save Big on next product</p>
					</div>
				</div>
				<div className="featured-item">
					<div className="featured-icon">
						<FontAwesomeIcon icon={faHandsHelping} />
					</div>
					<div className="featured-content">
						<p>24/7 HELPLINE</p>
						<p>Care till the end</p>
					</div>
				</div>
			</div>
		</FeaturesContainer>
	);
}

const FeaturesContainer = styled.div`
	padding: 40px 0;
	background-color: #f9f9f9;
	border-bottom: 1px solid #e4e4e4;
	margin-bottom: 50px;

	.featured-item {
		text-align: center;
		margin-bottom: 30px;

		svg {
			width: 40px;
			height: auto;
			margin-bottom: 15px;
		}

		p {
			margin: 0;
		}

		p:first-child {
			color: var(--mainBlack);
			font-size: .9em;
			font-weight: 500;
		}

		p:nth-child(2) {
			color: var(--mainLightGrey);
			font-size: .8em;
		}

		:last-child {
			margin-bottom: 0;
		}
	}

	@media (min-width: 768px) {
		.container {
			display: flex;
			justify-content: space-between;
			width: 700px;
		}

		.featured-item {
			margin-bottom: 0;

			svg {
				width: auto;
				height: 40px;
			}
		}
	}
`;