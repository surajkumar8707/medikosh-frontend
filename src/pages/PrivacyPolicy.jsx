import React from 'react';
import Footer from '../components/Footer';
import {
	FaShieldAlt,
	FaLock,
	FaUserShield,
	FaCreditCard,
	FaHeartbeat,
	FaFileMedical,
	FaHandshake,
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
	FaCookieBite,
	FaChild,
	FaGlobe,
	FaFileSignature,
	FaCalendarAlt,
	FaCheckCircle, // ✅ Added missing import
} from 'react-icons/fa';

const PrivacyPolicy = () => {
	const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

	return (
		<>
			<div className='privacy-policy-page'>
				{/* ================= HEADER SECTION ================= */}
				<div
					className='d-flex align-items-center text-white'
					style={{
						height: '300px',
						backgroundImage:
							"linear-gradient(rgba(31, 167, 161, 0.85), rgba(107, 192, 72, 0.9)), url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						marginTop: '-80px',
					}}
				>
					<div className='container-fluid text-center'>
						<h1 className='fw-bold m-0 text-white display-4'>
							<FaShieldAlt className='me-3' />
							Privacy Policy
						</h1>
						<p className='fw-bold m-0 text-white mt-3 fs-4'>
							Medikosh Nutria – Your Trusted Health Partner
						</p>
						<p className='mt-3'>Last Updated: {today}</p>
					</div>
				</div>

				{/* ================= MAIN CONTENT ================= */}
				<div className='container-fluid py-5 px-4 px-lg-5'>
					<div className='row'>
						{/* Sidebar Navigation */}
						<div className='col-lg-3 mb-5 mb-lg-0'>
							<div
								className='card border-0 shadow-lg rounded-4 sticky-top'
								style={{ top: '100px', border: 'none' }}
							>
								<div className='card-body p-4'>
									<h5 className='fw-bold mb-4' style={{ color: '#1FA7A1' }}>
										Quick Navigation
									</h5>
									<nav className='nav flex-column'>
										<a className='nav-link text-dark fw-medium py-2 border-bottom' href='#overview'>
											<FaShieldAlt className='me-2' style={{ color: '#6BC048' }} />
											Overview
										</a>
										<a
											className='nav-link text-dark fw-medium py-2 border-bottom'
											href='#data-collection'
										>
											<FaFileMedical className='me-2' style={{ color: '#6BC048' }} />
											Information We Collect
										</a>
										<a
											className='nav-link text-dark fw-medium py-2 border-bottom'
											href='#medical-data'
										>
											<FaHeartbeat className='me-2' style={{ color: '#6BC048' }} />
											Health Data Protection
										</a>
										<a
											className='nav-link text-dark fw-medium py-2 border-bottom'
											href='#data-usage'
										>
											<FaUserShield className='me-2' style={{ color: '#6BC048' }} />
											How We Use Data
										</a>
										<a className='nav-link text-dark fw-medium py-2 border-bottom' href='#sharing'>
											<FaHandshake className='me-2' style={{ color: '#6BC048' }} />
											Information Sharing
										</a>
										<a className='nav-link text-dark fw-medium py-2 border-bottom' href='#cookies'>
											<FaCookieBite className='me-2' style={{ color: '#6BC048' }} />
											Cookies & Tracking
										</a>
										<a className='nav-link text-dark fw-medium py-2 border-bottom' href='#security'>
											<FaLock className='me-2' style={{ color: '#6BC048' }} />
											Security Measures
										</a>
										<a className='nav-link text-dark fw-medium py-2 border-bottom' href='#rights'>
											<FaFileSignature className='me-2' style={{ color: '#6BC048' }} />
											Your Rights
										</a>
										<a className='nav-link text-dark fw-medium py-2 border-bottom' href='#children'>
											<FaChild className='me-2' style={{ color: '#6BC048' }} />
											Children's Privacy
										</a>
										<a
											className='nav-link text-dark fw-medium py-2 border-bottom'
											href='#international'
										>
											<FaGlobe className='me-2' style={{ color: '#6BC048' }} />
											International Users
										</a>
										<a className='nav-link text-dark fw-medium py-2 border-bottom' href='#updates'>
											<FaCalendarAlt className='me-2' style={{ color: '#6BC048' }} />
											Policy Updates
										</a>
										<a className='nav-link text-dark fw-medium py-2' href='#contact'>
											<FaEnvelope className='me-2' style={{ color: '#6BC048' }} />
											Contact Us
										</a>
									</nav>
								</div>
							</div>
						</div>

						{/* Main Content */}
						<div className='col-lg-9'>
							{/* Overview */}
							<section id='overview' className='mb-5'>
								<div className='card border-0 shadow-sm rounded-4'>
									<div className='card-body p-4'>
										<h2 className='fw-bold mb-4' style={{ color: '#1FA7A1' }}>
											<FaShieldAlt className='me-3' style={{ color: '#6BC048' }} />
											Privacy Policy Overview
										</h2>
										<p className='lead'>
											At <strong>Medikosh Nutria</strong> (a subsidiary of Medikosh Healthovation
											Private Limited), we are committed to protecting your privacy and ensuring
											the security of your personal information. This Privacy Policy explains how
											we collect, use, disclose, and safeguard your data when you visit our
											website or purchase our nutraceutical and wellness products.
										</p>
										<p>
											By using our services, you consent to the practices described in this
											policy. If you do not agree, please do not access or use our website.
										</p>
										<div
											className='alert'
											style={{ backgroundColor: '#f0f9f0', borderLeft: '4px solid #6BC048' }}
										>
											<strong>Important:</strong> As a provider of health supplements, we handle
											sensitive information with the highest level of care. We comply with
											applicable Indian data protection laws (including the Information Technology
											Act, 2000 and its rules) and strive to align with global best practices.
										</div>
									</div>
								</div>
							</section>

							{/* Information We Collect */}
							<section id='data-collection' className='mb-5'>
								<div className='card border-0 shadow-sm rounded-4'>
									<div className='card-body p-4'>
										<h2 className='fw-bold mb-4' style={{ color: '#1FA7A1' }}>
											<FaFileMedical className='me-3' style={{ color: '#6BC048' }} />
											Information We Collect
										</h2>

										<div className='row g-4'>
											<div className='col-md-6'>
												<div
													className='card h-100 border-0'
													style={{ backgroundColor: '#f8f9fa' }}
												>
													<div className='card-body'>
														<h5 className='fw-bold' style={{ color: '#1FA7A1' }}>
															Personal Information
														</h5>
														<ul className='mb-0'>
															<li>Full name, date of birth (for age verification)</li>
															<li>Email address, phone number</li>
															<li>Shipping and billing addresses</li>
															<li>
																Payment details (processed securely by third‑party
																gateways)
															</li>
														</ul>
													</div>
												</div>
											</div>

											<div className='col-md-6'>
												<div
													className='card h-100 border-0'
													style={{ backgroundColor: '#f8f9fa' }}
												>
													<div className='card-body'>
														<h5 className='fw-bold' style={{ color: '#1FA7A1' }}>
															Health & Wellness Information
														</h5>
														<ul className='mb-0'>
															<li>
																Purchase history of supplements and wellness products
															</li>
															<li>Preferences (e.g., dosage, flavor) – if provided</li>
															<li>
																Any health information you voluntarily share (e.g.,
																allergies, lifestyle)
															</li>
															<li>Communications with our customer support</li>
														</ul>
													</div>
												</div>
											</div>

											<div className='col-12'>
												<div className='card border-0' style={{ backgroundColor: '#f8f9fa' }}>
													<div className='card-body'>
														<h5 className='fw-bold' style={{ color: '#1FA7A1' }}>
															Technical & Usage Data
														</h5>
														<div className='row'>
															<div className='col-md-4'>
																<ul>
																	<li>
																		IP address, browser type, device information
																	</li>
																	<li>Operating system, screen resolution</li>
																</ul>
															</div>
															<div className='col-md-4'>
																<ul>
																	<li>Pages viewed, time spent, referring website</li>
																	<li>Products searched or viewed</li>
																</ul>
															</div>
															<div className='col-md-4'>
																<ul>
																	<li>Cookie identifiers, advertising IDs</li>
																	<li>Crash logs, performance data</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>

							{/* Health Data Protection */}
							<section id='medical-data' className='mb-5'>
								<div className='card border-0 shadow-sm rounded-4'>
									<div className='card-body p-4'>
										<h2 className='fw-bold mb-4' style={{ color: '#1FA7A1' }}>
											<FaHeartbeat className='me-3' style={{ color: '#6BC048' }} />
											Health Data Protection
										</h2>

										<p>
											We recognise that health-related information is particularly sensitive.
											Therefore we implement additional safeguards:
										</p>

										<div className='row g-4'>
											<div className='col-md-6'>
												<div className='card h-100 border-0 shadow-sm'>
													<div className='card-body'>
														<div className='d-flex align-items-center mb-3'>
															<div
																style={{ backgroundColor: '#6BC048', color: 'white' }}
																className='rounded-circle p-3 me-3'
															>
																<FaLock size={20} />
															</div>
															<h5 className='fw-bold mb-0'>Strict Confidentiality</h5>
														</div>
														<p>
															Your health data is accessible only to authorised personnel
															(e.g., customer support resolving an issue) and never shared
															for marketing without explicit consent.
														</p>
													</div>
												</div>
											</div>

											<div className='col-md-6'>
												<div className='card h-100 border-0 shadow-sm'>
													<div className='card-body'>
														<div className='d-flex align-items-center mb-3'>
															<div
																style={{ backgroundColor: '#6BC048', color: 'white' }}
																className='rounded-circle p-3 me-3'
															>
																<FaShieldAlt size={20} />
															</div>
															<h5 className='fw-bold mb-0'>Encryption & Anonymisation</h5>
														</div>
														<p>
															All health data is encrypted both in transit (SSL/TLS) and
															at rest. Where possible, we anonymise data used for
															analytics.
														</p>
													</div>
												</div>
											</div>
										</div>

										<div
											className='alert mt-4'
											style={{ backgroundColor: '#e8f4fd', borderLeft: '4px solid #1FA7A1' }}
										>
											<strong>Note:</strong> We do not sell or rent your health information to
											third parties. Any use of this data is limited to fulfilling your orders,
											improving our products, and complying with legal obligations.
										</div>
									</div>
								</div>
							</section>

							{/* How We Use Your Information */}
							<section id='data-usage' className='mb-5'>
								<div className='card border-0 shadow-sm rounded-4'>
									<div className='card-body p-4'>
										<h2 className='fw-bold mb-4' style={{ color: '#1FA7A1' }}>
											<FaUserShield className='me-3' style={{ color: '#6BC048' }} />
											How We Use Your Information
										</h2>

										<div className='table-responsive'>
											<table className='table table-bordered'>
												<thead style={{ backgroundColor: '#1FA7A1', color: 'white' }}>
													<tr>
														<th>Purpose</th>
														<th>Data Used</th>
														<th>Legal Basis (GDPR)</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Order processing and fulfilment</td>
														<td>Name, address, payment details, contact info</td>
														<td>Performance of a contract</td>
													</tr>
													<tr>
														<td>Customer support & queries</td>
														<td>Name, email, order history</td>
														<td>Legitimate interest / contract</td>
													</tr>
													<tr>
														<td>Personalised product recommendations</td>
														<td>Purchase history, browsing behaviour</td>
														<td>Consent (opt‑in) / legitimate interest</td>
													</tr>
													<tr>
														<td>Marketing communications (newsletters, offers)</td>
														<td>Email address, preferences</td>
														<td>Consent (opt‑in)</td>
													</tr>
													<tr>
														<td>Improving website & user experience</td>
														<td>Usage data, cookies</td>
														<td>Legitimate interest</td>
													</tr>
													<tr>
														<td>Legal compliance & fraud prevention</td>
														<td>Relevant personal and transactional data</td>
														<td>Legal obligation</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</section>

							{/* Information Sharing */}
							<section id='sharing' className='mb-5'>
								<div className='card border-0 shadow-sm rounded-4'>
									<div className='card-body p-4'>
										<h2 className='fw-bold mb-4' style={{ color: '#1FA7A1' }}>
											<FaHandshake className='me-3' style={{ color: '#6BC048' }} />
											When We Share Your Information
										</h2>

										<p>We only share your personal data in the following limited circumstances:</p>

										<div className='row'>
											<div className='col-md-6'>
												<ul>
													<li>
														<strong>Service providers:</strong> shipping carriers (e.g.,
														Delhivery, Blue Dart), payment gateways (Razorpay, etc.), IT
														support, email delivery services. They are contractually bound
														to keep your data confidential and use it only for the services
														they provide.
													</li>
													<li>
														<strong>Legal requirements:</strong> if required by law,
														regulation, or legal process (e.g., court order, government
														agency).
													</li>
												</ul>
											</div>
											<div className='col-md-6'>
												<ul>
													<li>
														<strong>Business transfers:</strong> in the event of a merger,
														acquisition, or sale of assets, your data may be transferred to
														the new entity, with notice posted on our website.
													</li>
													<li>
														<strong>With your consent:</strong> any other sharing will only
														occur after obtaining your explicit consent.
													</li>
												</ul>
											</div>
										</div>

										<div
											className='alert alert-success mt-3'
											style={{ borderLeft: '4px solid #6BC048', backgroundColor: '#f0f9f0' }}
										>
											<FaCheckCircle className='me-2' style={{ color: '#6BC048' }} />
											We never sell or rent your personal information to third parties for their
											own marketing purposes.
										</div>
									</div>
								</div>
							</section>

							{/* Cookies & Tracking */}
							<section id='cookies' className='mb-5'>
								<div className='card border-0 shadow-sm rounded-4'>
									<div className='card-body p-4'>
										<h2 className='fw-bold mb-4' style={{ color: '#1FA7A1' }}>
											<FaCookieBite className='me-3' style={{ color: '#6BC048' }} />
											Cookies & Tracking Technologies
										</h2>

										<p>
											We use cookies and similar technologies to enhance your browsing experience,
											analyse site traffic, and personalise content. You can manage cookie
											preferences through your browser settings.
										</p>

										<h5 className='fw-bold mt-4'>Types of Cookies We Use</h5>
										<div className='row'>
											<div className='col-md-4'>
												<div className='card border-0 bg-light mb-3'>
													<div className='card-body p-3'>
														<h6>Essential</h6>
														<p className='small mb-0'>
															Required for site functionality (e.g., shopping cart,
															login).
														</p>
													</div>
												</div>
											</div>
											<div className='col-md-4'>
												<div className='card border-0 bg-light mb-3'>
													<div className='card-body p-3'>
														<h6>Analytics</h6>
														<p className='small mb-0'>
															Help us understand how visitors use our site (Google
															Analytics).
														</p>
													</div>
												</div>
											</div>
											<div className='col-md-4'>
												<div className='card border-0 bg-light mb-3'>
													<div className='card-body p-3'>
														<h6>Marketing</h6>
														<p className='small mb-0'>
															Used for targeted advertising (only with your consent).
														</p>
													</div>
												</div>
											</div>
										</div>

										<p>
											By continuing to use our website, you consent to our use of cookies. You can
											withdraw consent at any time by adjusting your browser settings.
										</p>
									</div>
								</div>
							</section>

							{/* Security Measures */}
							<section id='security' className='mb-5'>
								<div className='card border-0 shadow-sm rounded-4'>
									<div className='card-body p-4'>
										<h2 className='fw-bold mb-4' style={{ color: '#1FA7A1' }}>
											<FaLock className='me-3' style={{ color: '#6BC048' }} />
											Security Measures
										</h2>

										<p>We implement industry‑standard security practices to protect your data:</p>

										<div className='row g-4'>
											<div className='col-md-4'>
												<div className='text-center p-3 border rounded-3 h-100'>
													<div
														style={{ backgroundColor: '#6BC048', color: 'white' }}
														className='rounded-circle p-3 d-inline-flex mb-3'
													>
														<FaLock size={24} />
													</div>
													<h5 className='fw-bold'>Encryption</h5>
													<p className='small'>
														256‑bit SSL/TLS for all data transmission; AES‑256 for stored
														sensitive data.
													</p>
												</div>
											</div>
											<div className='col-md-4'>
												<div className='text-center p-3 border rounded-3 h-100'>
													<div
														style={{ backgroundColor: '#6BC048', color: 'white' }}
														className='rounded-circle p-3 d-inline-flex mb-3'
													>
														<FaUserShield size={24} />
													</div>
													<h5 className='fw-bold'>Access Controls</h5>
													<p className='small'>
														Strict role‑based access, multi‑factor authentication for
														employees.
													</p>
												</div>
											</div>
											<div className='col-md-4'>
												<div className='text-center p-3 border rounded-3 h-100'>
													<div
														style={{ backgroundColor: '#6BC048', color: 'white' }}
														className='rounded-circle p-3 d-inline-flex mb-3'
													>
														<FaShieldAlt size={24} />
													</div>
													<h5 className='fw-bold'>Regular Audits</h5>
													<p className='small'>
														Annual security assessments, vulnerability scans, and
														penetration testing.
													</p>
												</div>
											</div>
										</div>

										<p className='mt-4'>
											While we strive to protect your information, no method of transmission over
											the internet is 100% secure. We encourage you to use strong passwords and
											keep your account credentials confidential.
										</p>
									</div>
								</div>
							</section>

							{/* Your Rights */}
							<section id='rights' className='mb-5'>
								<div className='card border-0 shadow-sm rounded-4'>
									<div className='card-body p-4'>
										<h2 className='fw-bold mb-4' style={{ color: '#1FA7A1' }}>
											<FaFileSignature className='me-3' style={{ color: '#6BC048' }} />
											Your Data Protection Rights
										</h2>

										<p>Depending on your location, you may have the following rights:</p>

										<div className='row g-4'>
											<div className='col-md-6'>
												<ul>
													<li>
														<strong>Right to Access:</strong> Request a copy of your
														personal data.
													</li>
													<li>
														<strong>Right to Rectification:</strong> Correct inaccurate or
														incomplete data.
													</li>
													<li>
														<strong>Right to Erasure:</strong> Request deletion of your data
														(subject to legal retention).
													</li>
													<li>
														<strong>Right to Restrict Processing:</strong> Limit how we use
														your data.
													</li>
												</ul>
											</div>
											<div className='col-md-6'>
												<ul>
													<li>
														<strong>Right to Data Portability:</strong> Receive your data in
														a structured, machine‑readable format.
													</li>
													<li>
														<strong>Right to Object:</strong> Object to processing based on
														legitimate interests or direct marketing.
													</li>
													<li>
														<strong>Right to Withdraw Consent:</strong> Withdraw consent at
														any time where processing is based on consent.
													</li>
													<li>
														<strong>Right to Lodge a Complaint:</strong> File a complaint
														with a supervisory authority.
													</li>
												</ul>
											</div>
										</div>

										<div
											className='alert mt-4'
											style={{ backgroundColor: '#f0f9f0', borderLeft: '4px solid #6BC048' }}
										>
											<strong>To exercise your rights:</strong> Email us at{' '}
											<a href='mailto:care@medikoshnutria.com' style={{ color: '#1FA7A1' }}>
												care@medikoshnutria.com
											</a>{' '}
											or call 9720030123. We will respond within 30 days. We may need to verify
											your identity before processing.
										</div>
									</div>
								</div>
							</section>

							{/* Children's Privacy */}
							<section id='children' className='mb-5'>
								<div className='card border-0 shadow-sm rounded-4'>
									<div className='card-body p-4'>
										<h2 className='fw-bold mb-4' style={{ color: '#1FA7A1' }}>
											<FaChild className='me-3' style={{ color: '#6BC048' }} />
											Children's Privacy
										</h2>

										<p>
											Our website and products are intended for individuals aged 18 years and
											above. We do not knowingly collect personal information from children under
											18. If you are a parent or guardian and believe your child has provided us
											with data, please contact us immediately. We will take steps to delete such
											information.
										</p>
									</div>
								</div>
							</section>

							{/* International Users */}
							<section id='international' className='mb-5'>
								<div className='card border-0 shadow-sm rounded-4'>
									<div className='card-body p-4'>
										<h2 className='fw-bold mb-4' style={{ color: '#1FA7A1' }}>
											<FaGlobe className='me-3' style={{ color: '#6BC048' }} />
											International Users
										</h2>

										<p>
											Medikosh Nutria is based in India. If you are accessing our website from
											outside India, please be aware that your information may be transferred to,
											stored, and processed in India where our servers are located. By using our
											services, you consent to this transfer. We will take appropriate safeguards
											to protect your data as described in this policy.
										</p>
									</div>
								</div>
							</section>

							{/* Policy Updates */}
							<section id='updates' className='mb-5'>
								<div className='card border-0 shadow-sm rounded-4'>
									<div className='card-body p-4'>
										<h2 className='fw-bold mb-4' style={{ color: '#1FA7A1' }}>
											<FaCalendarAlt className='me-3' style={{ color: '#6BC048' }} />
											Changes to This Privacy Policy
										</h2>

										<p>
											We may update this Privacy Policy from time to time to reflect changes in
											our practices or for legal reasons. We will notify you of any material
											changes by posting the new policy on this page with an updated "Last
											Updated" date. We encourage you to review this policy periodically.
										</p>
										<p>
											Your continued use of our website after any changes constitutes acceptance
											of the revised policy.
										</p>
									</div>
								</div>
							</section>

							{/* Contact Us */}
							<section id='contact' className='mb-5'>
								<div className='card border-0 shadow-sm rounded-4'>
									<div className='card-body p-4'>
										<h2 className='fw-bold mb-4' style={{ color: '#1FA7A1' }}>
											<FaEnvelope className='me-3' style={{ color: '#6BC048' }} />
											Contact Our Privacy Team
										</h2>

										<p>
											If you have any questions or concerns about this Privacy Policy or our data
											practices, please contact us:
										</p>

										<div className='row g-4'>
											<div className='col-md-4'>
												<div className='card h-100 border-0 shadow-sm'>
													<div className='card-body text-center'>
														<div
															style={{ backgroundColor: '#6BC048', color: 'white' }}
															className='rounded-circle p-3 d-inline-flex mb-3'
														>
															<FaEnvelope size={20} />
														</div>
														<h6 className='fw-bold'>Email</h6>
														<p className='mb-0'>
															<a
																href='mailto:care@medikoshnutria.com'
																className='text-decoration-none'
																style={{ color: '#1FA7A1' }}
															>
																care@medikoshnutria.com
															</a>
														</p>
													</div>
												</div>
											</div>

											<div className='col-md-4'>
												<div className='card h-100 border-0 shadow-sm'>
													<div className='card-body text-center'>
														<div
															style={{ backgroundColor: '#6BC048', color: 'white' }}
															className='rounded-circle p-3 d-inline-flex mb-3'
														>
															<FaPhone size={20} />
														</div>
														<h6 className='fw-bold'>Phone</h6>
														<p className='mb-0'>
															9720030123
															<br />
															<small>Mon-Fri, 9:00 AM – 6:00 PM (IST)</small>
														</p>
													</div>
												</div>
											</div>

											<div className='col-md-4'>
												<div className='card h-100 border-0 shadow-sm'>
													<div className='card-body text-center'>
														<div
															style={{ backgroundColor: '#6BC048', color: 'white' }}
															className='rounded-circle p-3 d-inline-flex mb-3'
														>
															<FaMapMarkerAlt size={20} />
														</div>
														<h6 className='fw-bold'>Address</h6>
														<p className='mb-0 small'>
															Ranikhet Tower, Dewalchaur,
															<br />
															Haldwani, Dist. Nainital,
															<br />
															Uttarakhand – 263139, India
														</p>
													</div>
												</div>
											</div>
										</div>

										<div className='mt-4 text-center'>
											<p>
												<strong>Data Protection Officer:</strong> Mr. [Name] –{' '}
												<a href='mailto:dpo@medikoshnutria.com' style={{ color: '#1FA7A1' }}>
													dpo@medikoshnutria.com
												</a>
											</p>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>

				{/* ================= STYLES ================= */}
				<style>{`
          .privacy-policy-page {
            min-height: 100vh;
            font-family: Helvetica, Arial, sans-serif;
            background-color: #f8fafc;
          }
          
          .sticky-top {
            position: sticky;
            z-index: 1020;
          }
          
          .nav-link {
            transition: all 0.2s ease;
            color: #2c3e50 !important;
          }
          
          .nav-link:hover {
            color: #1FA7A1 !important;
            background-color: rgba(31, 167, 161, 0.05);
            border-radius: 8px;
            padding-left: 24px !important;
          }
          
          .nav-link.active {
            color: #1FA7A1;
            font-weight: 600;
          }
          
          .card {
            border: none;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          
          .card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05) !important;
          }
          
          table th {
            background-color: #1FA7A1 !important;
            border-color: #1FA7A1;
          }
          
          table td {
            vertical-align: middle;
          }
          
          .alert {
            border-radius: 10px;
          }
          
          /* Responsive Design */
          @media (max-width: 1200px) {
            .display-4 {
              font-size: 2.5rem;
            }
            .fs-4 {
              font-size: 1.3rem !important;
            }
          }
          
          @media (max-width: 992px) {
            .display-4 {
              font-size: 2.2rem;
            }
            .col-lg-3 {
              position: static !important;
            }
            .sticky-top {
              position: static;
            }
          }
          
          @media (max-width: 768px) {
            .display-4 {
              font-size: 1.8rem;
            }
            .fs-4 {
              font-size: 1.2rem !important;
            }
            .card-body {
              padding: 1.5rem !important;
            }
          }
          
          @media (max-width: 576px) {
            .display-4 {
              font-size: 1.5rem;
            }
            .fs-4 {
              font-size: 1.1rem !important;
            }
            .table-responsive {
              font-size: 0.9rem;
            }
            .card-body {
              padding: 1rem !important;
            }
            .row.g-4 {
              margin-left: -0.5rem;
              margin-right: -0.5rem;
            }
            .col-md-6, .col-md-4 {
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
          }
          
          @media (max-width: 400px) {
            .display-4 {
              font-size: 1.3rem;
            }
            .fs-4 {
              font-size: 1rem !important;
            }
          }
          
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
          
          section {
            scroll-margin-top: 120px;
          }
        `}</style>
			</div>
			<Footer />
		</>
	);
};

export default PrivacyPolicy;
