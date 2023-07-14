"use strict";

const submitBtn = document.querySelector('.submit-btn');

const formContainer = document.querySelector('.form-container');
const emailInput = document.querySelector('.email');
const errorIcon = document.querySelector('.error-icon');
const errorText = document.querySelector('.validation');

submitBtn.addEventListener("click", (e)=>{
	e.preventDefault();
	let emailValue = emailInput.value;

	if (!validEmail(emailValue)) {
		errorIcon.style.display = 'block';
		errorText.style.display = 'block';
		formContainer.style.borderColor = "var(--secondary)"
	} else {
		errorIcon.style.display = 'none';
		errorText.style.display = 'none';
		formContainer.style.borderColor = ""
		document.body.innerHTML = ` 
			<section>
				<div class="thank-you">
					<p><span class="thin">Thank</span> You!</p>
				</div>
			</section>
		` ;
	}
})

const validEmail = (inputValue) =>{
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(inputValue);
}