import React from 'react'

import bg from '../images/morro-contact.jpg'

const Contact = () => {
	return (
		<section
			id="contacto"
			className="contact bg-color-black py-2 px-1"
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className="contact__content">
				<div className="contact-data px-1">
					<h2 className="contact-title text-color-white m-none mb-1">Contacto</h2>
					<a
						href="tel:132465789"
						className="phone icon icon-phone text-color-white m-none mb-1"
					>
						263 <strong>453 7898</strong>
					</a>
					<a
						href="mailto:hola@morrogroup.com"
						className="mail icon icon-mail text-color-white mt-2"
					>
						<strong>hola</strong>@morrogroup.com
					</a>

					<ul className="social my-2 p-none">
						<li className="social__icon">
							<a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
								<i className="icon icon-facebook text-color-white" />
							</a>
						</li>
						<li className="social__icon">
							<a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
								<i className="icon icon-instagram text-color-white" />
							</a>
						</li>
						<li className="social__icon">
							<a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
								<i className="icon icon-twitter text-color-white" />
							</a>
						</li>
						<li className="social__icon">
							<a href="http://whatsapp.com" target="_blank" rel="noopener noreferrer">
								<i className="icon icon-whatsapp text-color-white" />
							</a>
						</li>
					</ul>
				</div>
				<form className="contact-form px-1">
					<div className="form-block mb-1">
						<input
							className="form-input px-1 py-h-1 text-color-black"
							type="text"
							placeholder="Nombre"
						/>
					</div>
					<div className="form-block mb-1">
						<input
							className="form-input px-1 py-h-1 text-color-black"
							type="email"
							placeholder="Email"
						/>
					</div>
					<div className="form-block mb-1">
						<textarea
							className="form-input px-1 py-h-1 text-color-black textarea"
							placeholder="Mensaje"
						/>
					</div>

					<input
						className="form-submit px-1 py-h-1 text-color-white"
						type="submit"
						value="Enviar"
					/>
				</form>
			</div>
		</section>
	)
}

export default Contact
