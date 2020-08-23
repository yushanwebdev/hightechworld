import React from 'react';
import BannerSub from '../components/BannerSub';
import ProductList from '../components/ProductList';

export default function Products() {
	return(
		<React.Fragment>
			<BannerSub slogan="PRODUCTS" />
			<ProductList />
		</React.Fragment>
	);
}