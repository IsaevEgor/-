const brandBlock = document.getElementById("brands");
const myBrandInput = document.getElementById("myBrand");

function showBrands(data) {
	brandBlock.innerHTML = null;
	const brands = data.map(position => position.brand);
	const myBrandValue = myBrandInput.value;
	brands.forEach(brand => {
		if (myBrandValue === brand) {
			brandBlock.innerHTML += `<li class="brands__item _my-brand">${brand}</li>`
		} else {
			brandBlock.innerHTML += `<li class="brands__item">${brand}</li>`
		}
	});
}