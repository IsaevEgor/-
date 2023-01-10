const button = document.getElementById("button");
const inputQuery = document.getElementById("inputQuery");

button.addEventListener("click", () => {
	event.preventDefault()
	validateForm()
})

function validateForm() {
	const input = document.getElementById("inputQuery");
	const inputValue = input.value;
	if (inputValue == null || inputValue == "") {
		input.classList.add("_error-input");
		alert("Поле запроса не может быть пустым.");
		return false;
	} else {
		input.classList.remove("_error-input");

		encodeUrlFunc()
	}
}