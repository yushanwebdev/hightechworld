import React from 'react';
import BannerSub from '../components/BannerSub';
import styled from 'styled-components';

export default function Detail() {
	return(
		<React.Fragment>
			<BannerSub slogan="DETAIL" />
			<DetailContainer>
				<div className="container">
					<div className="detail-img">
						<img src="/img/phone-banner.webp" />
					</div>
					<div className="detail-content">
						<h3>Honor 9 Lite</h3>
						<p className="detail-price">$301.00</p>
						<p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper miaculis Pellentesque vitae neque mollis urna mattis...</p>
						<p className="detail-brand"><span>Brand:</span> <span>Vivo</span> </p>
						<p className="detail-stock"><span>Availability:</span> <span>In Stock</span> </p>
					</div>
				</div>
			</DetailContainer>
		</React.Fragment>
	);
}

const DetailContainer = styled.div`
	margin-bottom: 50px;

	h3 {
		font-family: 'Rajdhani', sans-serif;
		font-weight: 500;
		font-size: 2em;
		margin-bottom: 15px;
	}

	.detail-price {
		color: var(--mainOrange);
		font-weight: 500;
		font-size: 1.3em;
		margin-top: 0;
	}

	@media (min-width: 768px) {
		.container {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.detail-img {
				width: 54%;
			}

			.detail-content {
				width: 40%;
			}
		}
	}
`;