const form = document.querySelector('.form');
const auction = document.querySelector('.auction');
const services = document.querySelectorAll('.inputServices');
const mileages = document.querySelectorAll('.inputMileages');
const result = document.querySelector('.result');

form.onsubmit = (evt) => {
	evt.preventDefault();
	let total;
	const status = auction.value;
	total = +status;
	console.log(total);

	for (let i = 0; i < services.length; i++) {
		if (services[i].checked) {
			total = total + Number(services[i].value);
		}
	}

	for (let i = 0; i < mileages.length; i++) {
		if (mileages[i].checked) {
			total = total + Number(mileages[i].value);
		}
	}

	result.innerHTML = total;
};
