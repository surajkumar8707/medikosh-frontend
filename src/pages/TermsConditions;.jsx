import React, { useState } from 'react';
import Footer from '../components/Footer';
import {
	FaShieldAlt,
	FaFileContract,
	FaLock,
	FaUserCheck,
	FaShoppingCart,
	FaCreditCard,
	FaTruck,
	FaUndo,
	FaHeadset,
	FaExclamationTriangle,
	FaCheckCircle,
	FaRegFilePdf,
	FaPrint,
	FaGavel,
	FaGlobe,
	FaIdCard,
	FaStethoscope,
	FaBoxOpen,
	FaBan,
} from 'react-icons/fa';

const TermsConditions = () => {
	const [activeSection, setActiveSection] = useState('introduction');

	const sections = [
		{ id: 'introduction', title: 'Introduction', icon: <FaFileContract /> },
		{ id: 'eligibility', title: 'Eligibility', icon: <FaUserCheck /> },
		{ id: 'products', title: 'Medical Products', icon: <FaStethoscope /> },
		{ id: 'orders', title: 'Orders & Payment', icon: <FaShoppingCart /> },
		{ id: 'shipping', title: 'Shipping', icon: <FaTruck /> },
		{ id: 'returns', title: 'Returns & Refunds', icon: <FaUndo /> },
		{ id: 'disclaimer', title: 'Disclaimer', icon: <FaExclamationTriangle /> },
		{ id: 'privacy', title: 'Privacy', icon: <FaLock /> },
		{ id: 'liability', title: 'Liability', icon: <FaShieldAlt /> },
		{ id: 'changes', title: 'Changes to Terms', icon: <FaGavel /> },
		{ id: 'contact', title: 'Contact', icon: <FaHeadset /> },
	];

	const scrollToSection = (sectionId) => {
		setActiveSection(sectionId);
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handlePrint = () => {
		window.print();
	};

	const handleDownloadPDF = () => {
		// In a real implementation, this would call an API to generate PDF
		alert('PDF download feature will be available soon. You can print this page for now.');
	};

	return (
		<>
			<div className='terms-conditions-page'>
				{/* ================= HEADER SECTION ================= */}
				<div
					className='d-flex align-items-center text-white'
					style={{
						height: '300px',
						backgroundImage:
							"linear-gradient(rgba(0, 120, 100, 0.85), rgba(0, 150, 130, 0.85)), url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						marginTop: '-80px',
					}}
				>
					<div className='container-fluid text-center'>
						<h1 className='fw-bold m-0 text-white display-4'>
							<FaFileContract className='me-3' />
							Terms & Conditions
						</h1>
						<p className='fw-bold m-0 text-white mt-3 fs-4'>
							Medikosh Nutria – Your Trusted Health Partner
						</p>
						<p className='mt-3'>
							Last Updated: February 17, 2026 |
							<span className='text-warning ms-2'>Effective Immediately</span>
						</p>
					</div>
				</div>

				{/* ================= QUICK NAVIGATION ================= */}
				<div className='container-fluid py-4 bg-light sticky-top' style={{ top: '80px', zIndex: 100 }}>
					<div className='container'>
						<div className='d-flex flex-wrap justify-content-center gap-2'>
							{sections.map((section) => (
								<button
									key={section.id}
									className={`btn ${activeSection === section.id ? 'btn-primary' : 'btn-outline-primary'} d-flex align-items-center`}
									onClick={() => scrollToSection(section.id)}
								>
									{section.icon}
									<span className='ms-2 d-none d-md-inline'>{section.title}</span>
								</button>
							))}
						</div>
					</div>
				</div>

				{/* ================= MAIN CONTENT ================= */}
				<div className='container py-5'>
					<div className='row'>
						{/* Sidebar Navigation */}
						<div className='col-lg-3 mb-4'>
							<div className='card border-0 shadow-sm sticky-sidebar'>
								<div className='card-header' style={{ backgroundColor: '#1FA7A1', color: 'white' }}>
									<h5 className='mb-0'>
										<FaFileContract className='me-2' />
										Quick Navigation
									</h5>
								</div>
								<div className='list-group list-group-flush'>
									{sections.map((section) => (
										<button
											key={section.id}
											className={`list-group-item list-group-item-action d-flex align-items-center ${activeSection === section.id ? 'active' : ''}`}
											onClick={() => scrollToSection(section.id)}
										>
											{section.icon}
											<span className='ms-3'>{section.title}</span>
										</button>
									))}
								</div>
								<div className='card-footer bg-light'>
									<div className='d-grid gap-2'>
										<button className='btn btn-outline-primary' onClick={handlePrint}>
											<FaPrint className='me-2' />
											Print Terms
										</button>
										<button className='btn btn-outline-secondary' onClick={handleDownloadPDF}>
											<FaRegFilePdf className='me-2' />
											Download PDF
										</button>
									</div>
								</div>
							</div>
						</div>

						{/* Terms Content */}
						<div className='col-lg-9'>
							{/* Important Medical Disclaimer */}
							<div className='alert alert-warning border-warning border-3'>
								<div className='d-flex align-items-center'>
									<FaExclamationTriangle className='fs-3 me-3' />
									<div>
										<h5 className='alert-heading mb-2'>Medical Disclaimer</h5>
										<p className='mb-0'>
											The information provided on this website is for general informational
											purposes only and is not a substitute for professional medical advice.
											Always consult a qualified healthcare provider before using any new
											medication or supplement.
										</p>
									</div>
								</div>
							</div>

							{/* SECTION 1: INTRODUCTION */}
							<section id='introduction' className='mb-5'>
								<div className='d-flex align-items-center mb-4'>
									<div
										style={{ backgroundColor: '#6BC048', color: 'white' }}
										className='rounded-circle p-3 me-3'
									>
										<FaFileContract size={24} />
									</div>
									<h2 className='fw-bold mb-0' style={{ color: '#1FA7A1' }}>
										1. Introduction
									</h2>
								</div>
								<div className='card border-0 shadow-sm'>
									<div className='card-body'>
										<p>
											Welcome to Medikosh Nutria (“we,” “our,” “us”). These Terms and Conditions
											(“Terms”) govern your use of our website and services. By accessing or using
											our platform, you agree to be bound by these Terms. If you do not agree,
											please do not use our services.
										</p>
										<p>
											Medikosh Nutria is a premium nutraceutical company and a subsidiary of
											Medikosh Healthovation Private Limited. We provide access to dietary
											supplements, wellness products, and health-related information. Our goal is
											to support your health journey with science-backed nutrition.
										</p>
									</div>
								</div>
							</section>

							{/* SECTION 2: ELIGIBILITY */}
							<section id='eligibility' className='mb-5'>
								<div className='d-flex align-items-center mb-4'>
									<div
										style={{ backgroundColor: '#6BC048', color: 'white' }}
										className='rounded-circle p-3 me-3'
									>
										<FaUserCheck size={24} />
									</div>
									<h2 className='fw-bold mb-0' style={{ color: '#1FA7A1' }}>
										2. Eligibility
									</h2>
								</div>
								<div className='card border-0 shadow-sm'>
									<div className='card-body'>
										<p>
											You must be at least 18 years old to purchase products from our website. By
											placing an order, you represent that you are of legal age and have the
											capacity to enter into a binding agreement.
										</p>
										<p>
											You are responsible for maintaining the confidentiality of your account
											credentials and for all activities that occur under your account. You agree
											to provide accurate, current, and complete information during registration
											and checkout.
										</p>
									</div>
								</div>
							</section>

							{/* SECTION 3: MEDICAL PRODUCTS */}
							<section id='products' className='mb-5'>
								<div className='d-flex align-items-center mb-4'>
									<div
										style={{ backgroundColor: '#6BC048', color: 'white' }}
										className='rounded-circle p-3 me-3'
									>
										<FaStethoscope size={24} />
									</div>
									<h2 className='fw-bold mb-0' style={{ color: '#1FA7A1' }}>
										3. Medical Products & Prescriptions
									</h2>
								</div>
								<div className='card border-0 shadow-sm'>
									<div className='card-body'>
										<h5 className='fw-bold'>Prescription Products</h5>
										<p>
											Some products available on our platform may require a valid prescription
											from a licensed healthcare provider. You agree to upload a legible,
											unexpired prescription when prompted. We reserve the right to verify
											prescriptions with the issuing provider or refuse to dispense any medication
											if we suspect the prescription is invalid.
										</p>
										<h5 className='fw-bold mt-4'>Non-Prescription Products</h5>
										<p>
											Over-the-counter (OTC) supplements and wellness products are intended for
											healthy individuals. Always read the label and follow usage instructions.
											Discontinue use and consult a doctor if adverse reactions occur.
										</p>
										<div className='alert alert-info mt-3'>
											<FaCheckCircle className='me-2' style={{ color: '#6BC048' }} />
											All products are sourced from reputable manufacturers and comply with
											applicable regulations.
										</div>
									</div>
								</div>
							</section>

							{/* SECTION 4: ORDERS & PAYMENT */}
							<section id='orders' className='mb-5'>
								<div className='d-flex align-items-center mb-4'>
									<div
										style={{ backgroundColor: '#6BC048', color: 'white' }}
										className='rounded-circle p-3 me-3'
									>
										<FaShoppingCart size={24} />
									</div>
									<h2 className='fw-bold mb-0' style={{ color: '#1FA7A1' }}>
										4. Orders & Payment
									</h2>
								</div>
								<div className='card border-0 shadow-sm'>
									<div className='card-body'>
										<h5 className='fw-bold'>Order Acceptance</h5>
										<p>
											All orders are subject to acceptance and availability. We may, at our sole
											discretion, refuse or cancel any order for reasons including but not limited
											to: product unavailability, errors in pricing or product information, or
											suspected fraud.
										</p>
										<h5 className='fw-bold mt-4'>Pricing</h5>
										<p>
											Prices are displayed in your local currency and are inclusive of applicable
											taxes unless stated otherwise. We strive to ensure accurate pricing, but
											errors may occur. If we discover an error, we will inform you and give you
											the option to confirm the order at the correct price or cancel it.
										</p>
										<h5 className='fw-bold mt-4'>Payment Methods</h5>
										<p>
											We accept major credit/debit cards, PayPal, and other secure payment methods
											as indicated at checkout. All transactions are encrypted using
											industry-standard SSL technology. Your payment details are never stored on
											our servers.
										</p>
									</div>
								</div>
							</section>

							{/* SECTION 5: SHIPPING */}
							<section id='shipping' className='mb-5'>
								<div className='d-flex align-items-center mb-4'>
									<div
										style={{ backgroundColor: '#6BC048', color: 'white' }}
										className='rounded-circle p-3 me-3'
									>
										<FaTruck size={24} />
									</div>
									<h2 className='fw-bold mb-0' style={{ color: '#1FA7A1' }}>
										5. Shipping & Delivery
									</h2>
								</div>
								<div className='card border-0 shadow-sm'>
									<div className='card-body'>
										<p>
											We ship to most locations within India and select international
											destinations. Delivery times are estimates and not guaranteed. We are not
											responsible for delays caused by customs, weather, or carrier issues.
										</p>
										<p>
											For temperature-sensitive items, we use insulated packaging with appropriate
											coolants. You are responsible for providing a correct shipping address. If a
											package is returned to us due to an incorrect address, you will be charged
											for reshipping.
										</p>
										<div className='row mt-3'>
											<div className='col-md-4'>
												<div className='border p-3 text-center'>
													<FaTruck style={{ color: '#1FA7A1', fontSize: '2rem' }} />
													<h6>Standard</h6>
													<p className='small'>
														3-5 business days
														<br />
														Free over ₹500
													</p>
												</div>
											</div>
											<div className='col-md-4'>
												<div className='border p-3 text-center'>
													<FaTruck style={{ color: '#1FA7A1', fontSize: '2rem' }} />
													<h6>Express</h6>
													<p className='small'>
														1-2 business days
														<br />
														₹99 flat rate
													</p>
												</div>
											</div>
											<div className='col-md-4'>
												<div className='border p-3 text-center'>
													<FaTruck style={{ color: '#1FA7A1', fontSize: '2rem' }} />
													<h6>Priority Medical</h6>
													<p className='small'>
														Next day, temperature controlled
														<br />
														₹249
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>

							{/* SECTION 6: RETURNS & REFUNDS */}
							<section id='returns' className='mb-5'>
								<div className='d-flex align-items-center mb-4'>
									<div
										style={{ backgroundColor: '#6BC048', color: 'white' }}
										className='rounded-circle p-3 me-3'
									>
										<FaUndo size={24} />
									</div>
									<h2 className='fw-bold mb-0' style={{ color: '#1FA7A1' }}>
										6. Returns & Refunds
									</h2>
								</div>
								<div className='card border-0 shadow-sm'>
									<div className='card-body'>
										<p>
											Due to the nature of health products, we cannot accept returns of opened or
											used items unless they are defective or damaged. Please inspect your order
											upon delivery.
										</p>
										<h5 className='fw-bold mt-3'>Eligibility for Return</h5>
										<ul>
											<li>Damaged during transit – report within 48 hours with photos.</li>
											<li>Incorrect item shipped – notify us within 7 days.</li>
											<li>Expired product – immediate replacement offered.</li>
										</ul>
										<h5 className='fw-bold mt-3'>Refund Process</h5>
										<p>
											Approved refunds will be processed to the original payment method within
											7-10 business days. Shipping charges are non-refundable unless the error was
											on our part.
										</p>
									</div>
								</div>
							</section>

							{/* SECTION 7: DISCLAIMER */}
							<section id='disclaimer' className='mb-5'>
								<div className='d-flex align-items-center mb-4'>
									<div
										style={{ backgroundColor: '#6BC048', color: 'white' }}
										className='rounded-circle p-3 me-3'
									>
										<FaExclamationTriangle size={24} />
									</div>
									<h2 className='fw-bold mb-0' style={{ color: '#1FA7A1' }}>
										7. Product Disclaimer
									</h2>
								</div>
								<div className='card border-0 shadow-sm'>
									<div className='card-body'>
										<p>
											Medikosh Nutria products are dietary supplements, not medicines, and are not
											intended to diagnose, treat, cure, or prevent any disease. Statements on
											this website have not been evaluated by the Food and Drug Administration
											(FDA) or the Central Drugs Standard Control Organisation (CDSCO).
										</p>
										<p>
											Individual results may vary. Always read the product label and consult your
											healthcare provider before starting any new supplement regimen, especially
											if you are pregnant, nursing, or have a medical condition.
										</p>
									</div>
								</div>
							</section>

							{/* SECTION 8: PRIVACY */}
							<section id='privacy' className='mb-5'>
								<div className='d-flex align-items-center mb-4'>
									<div
										style={{ backgroundColor: '#6BC048', color: 'white' }}
										className='rounded-circle p-3 me-3'
									>
										<FaLock size={24} />
									</div>
									<h2 className='fw-bold mb-0' style={{ color: '#1FA7A1' }}>
										8. Privacy & Data Protection
									</h2>
								</div>
								<div className='card border-0 shadow-sm'>
									<div className='card-body'>
										<p>
											Your privacy is important to us. Our collection and use of personal
											information is described in our{' '}
											<a
												href='/privacy-policy'
												className='text-decoration-none'
												style={{ color: '#1FA7A1' }}
											>
												Privacy Policy
											</a>
											, which is incorporated into these Terms by reference.
										</p>
										<p>
											We implement reasonable security measures to protect your data. However, no
											method of transmission over the internet is 100% secure. By using our
											services, you acknowledge this inherent risk.
										</p>
									</div>
								</div>
							</section>

							{/* SECTION 9: LIABILITY */}
							<section id='liability' className='mb-5'>
								<div className='d-flex align-items-center mb-4'>
									<div
										style={{ backgroundColor: '#6BC048', color: 'white' }}
										className='rounded-circle p-3 me-3'
									>
										<FaShieldAlt size={24} />
									</div>
									<h2 className='fw-bold mb-0' style={{ color: '#1FA7A1' }}>
										9. Limitation of Liability
									</h2>
								</div>
								<div className='card border-0 shadow-sm'>
									<div className='card-body'>
										<p>
											To the maximum extent permitted by law, Medikosh Nutria and its affiliates
											shall not be liable for any indirect, incidental, special, consequential, or
											punitive damages arising out of or related to your use of our products or
											website.
										</p>
										<p>
											Our total liability for any claim shall not exceed the amount you paid for
											the product giving rise to the claim. Some jurisdictions do not allow
											limitations of liability, so this may not apply to you.
										</p>
									</div>
								</div>
							</section>

							{/* SECTION 10: CHANGES TO TERMS */}
							<section id='changes' className='mb-5'>
								<div className='d-flex align-items-center mb-4'>
									<div
										style={{ backgroundColor: '#6BC048', color: 'white' }}
										className='rounded-circle p-3 me-3'
									>
										<FaGavel size={24} />
									</div>
									<h2 className='fw-bold mb-0' style={{ color: '#1FA7A1' }}>
										10. Changes to These Terms
									</h2>
								</div>
								<div className='card border-0 shadow-sm'>
									<div className='card-body'>
										<p>
											We may update these Terms from time to time to reflect changes in our
											practices or for legal reasons. The updated version will be posted on this
											page with a revised “Last Updated” date. Your continued use of our services
											after any changes constitutes your acceptance of the new Terms.
										</p>
									</div>
								</div>
							</section>

							{/* SECTION 11: CONTACT */}
							<section id='contact'>
								<div className='d-flex align-items-center mb-4'>
									<div
										style={{ backgroundColor: '#6BC048', color: 'white' }}
										className='rounded-circle p-3 me-3'
									>
										<FaHeadset size={24} />
									</div>
									<h2 className='fw-bold mb-0' style={{ color: '#1FA7A1' }}>
										11. Contact Information
									</h2>
								</div>
								<div className='card border-0 shadow-sm'>
									<div className='card-body'>
										<p>If you have any questions about these Terms, please contact us:</p>
										<ul className='list-unstyled'>
											<li className='mb-2'>
												<FaHeadset className='me-2' style={{ color: '#6BC048' }} /> Email:{' '}
												<a
													href='mailto:care@medikoshnutria.com'
													className='text-decoration-none'
												>
													care@medikoshnutria.com
												</a>
											</li>
											<li className='mb-2'>
												<FaHeadset className='me-2' style={{ color: '#6BC048' }} /> Phone:
												9720030123 (Mon-Fri, 9am-6pm)
											</li>
											<li className='mb-2'>
												<FaHeadset className='me-2' style={{ color: '#6BC048' }} /> Address:
												Ranikhet Tower, Dewalchaur, Haldwani, Nainital, Uttarakhand - 263139
											</li>
										</ul>
									</div>
								</div>
							</section>

							{/* Acceptance Section */}
							<div className='card border-success mt-5'>
								<div className='card-header' style={{ backgroundColor: '#6BC048', color: 'white' }}>
									<h5 className='mb-0'>ACCEPTANCE OF TERMS</h5>
								</div>
								<div className='card-body text-center'>
									<p className='lead'>
										By using Medikosh Nutria services, you acknowledge that you have read,
										understood, and agree to be bound by these Terms & Conditions.
									</p>
									<div className='d-flex justify-content-center gap-3'>
										<button
											className='btn btn-lg'
											style={{ backgroundColor: '#1FA7A1', color: 'white' }}
											onClick={() => alert('Thank you for accepting our Terms.')}
										>
											<FaCheckCircle className='me-2' />I Accept
										</button>
										<button className='btn btn-outline-secondary btn-lg' onClick={handlePrint}>
											<FaPrint className='me-2' />
											Print Copy
										</button>
									</div>
									<small className='text-muted d-block mt-3'>
										These terms may be updated periodically. Continued use constitutes acceptance of
										updates.
									</small>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* ================= STYLES ================= */}
				<style jsx>{`
					.terms-conditions-page {
						min-height: 100vh;
						font-family: Helvetica, Arial, sans-serif;
					}

					.sticky-sidebar {
						position: sticky;
						top: 100px;
					}

					.list-group-item.active {
						background-color: #1fa7a1;
						border-color: #1fa7a1;
						color: white;
					}
					.list-group-item.active svg {
						color: white;
					}

					section {
						scroll-margin-top: 140px;
					}

					.btn-primary {
						background-color: #1fa7a1;
						border-color: #1fa7a1;
					}
					.btn-primary:hover {
						background-color: #178f8a;
						border-color: #178f8a;
					}
					.btn-outline-primary {
						color: #1fa7a1;
						border-color: #1fa7a1;
					}
					.btn-outline-primary:hover {
						background-color: #1fa7a1;
						color: white;
					}

					@media print {
						.sticky-top,
						.sticky-sidebar,
						.btn {
							display: none !important;
						}

						.card {
							border: 1px solid #000 !important;
							break-inside: avoid;
						}

						section {
							page-break-inside: avoid;
						}
					}

					@media (max-width: 768px) {
						.sticky-sidebar {
							position: relative;
							top: 0;
						}

						.display-4 {
							font-size: 2rem;
						}

						.fs-4 {
							font-size: 1.2rem !important;
						}
					}

					@media (max-width: 576px) {
						.display-4 {
							font-size: 1.5rem;
						}

						.d-flex.flex-wrap.justify-content-center .btn {
							font-size: 0.9rem;
							padding: 0.375rem 0.75rem;
						}

						.card-body .row {
							flex-direction: column;
						}

						.col-md-6 {
							margin-bottom: 1rem;
						}
					}

					/* Smooth scrolling */
					html {
						scroll-behavior: smooth;
					}

					section:target {
						animation: highlight 2s ease;
					}

					@keyframes highlight {
						0% {
							background-color: rgba(31, 167, 161, 0.1);
						}
						100% {
							background-color: transparent;
						}
					}
				`}</style>
			</div>
			<Footer />
		</>
	);
};

export default TermsConditions;
