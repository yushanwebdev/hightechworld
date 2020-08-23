import React from 'react';
import styled from 'styled-components';

export default function BannerSub({slogan}) {
	return(
		<BannerSubContainer>
			<div className="container">
				<h1>{slogan}</h1>
			</div>
		</BannerSubContainer>
	);
}

const BannerSubContainer = styled.div`
	text-align: center;
	background-color: #f4f4f4;
	padding: 16px 0;
	margin-bottom: 50px;

	h1 {
		font-family: 'Rajdhani', sans-serif;
		font-weight: 500;
		color: #000;
	}
`;