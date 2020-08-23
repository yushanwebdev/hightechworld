import React from 'react';
import Banner from '../components/Banner';
import Features from '../components/Features';
import ProductList from '../components/ProductList';


export default function Home() {
	return(
		<React.Fragment>
			<Banner />
			<Features />
			<h2>Latest Products</h2>
			<ProductList />
		</React.Fragment>
	);
}