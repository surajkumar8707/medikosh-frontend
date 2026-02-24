import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductVerification from './pages/ProductVerification';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions;';
import ProductDetail from './pages/ProductDetail';

function App() {
	return (
		<BrowserRouter>
			{/* Header */}
			<Header />

			{/* Routes */}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/products' element={<Products />} />
				<Route path='/product-verification' element={<ProductVerification />} />
				<Route path='/privacy-policy' element={<PrivacyPolicy />} />
				<Route path='/terms-conditions' element={<TermsConditions />} />
				<Route path='/product/:id' element={<ProductDetail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
