const brandBlock = document.getElementById("brands");
const myBrandInput = document.getElementById("myBrand");

function showBrands(data) {
	brandBlock.innerHTML = null;
	const inputValue = document.getElementById("inputQuery").value;
	const title = document.createElement("h3");
	title.innerHTML = `Рейтинг по запросу: "${inputValue}"`;
	title.classList.add("brand-title")
	brandBlock.before(title)
	const brands = data.map(position => position.brand);
	const myBrandValue = myBrandInput.value;
	brands.forEach((brand, index) => {
		if (myBrandValue === brand) {
			brandBlock.innerHTML += `<li class="brands__item _my-brand">${index+1}.${brand}</li>`
		} else {
			brandBlock.innerHTML += `<li class="brands__item">${index+1}.${brand}</li>`
		}
	});
}