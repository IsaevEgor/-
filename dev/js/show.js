const brandBlock = document.getElementById("brands");
const myBrandInput = document.getElementById("myBrand");

const title = document.getElementById("title-rating");

function showBrands(data) {
	const queryValue = document.getElementById("inputQuery").value;
	showTitle(queryValue)
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

function showTitle(queryValue) {
	title.classList.remove("_no-visable");
	title.innerHTML = `Рейтинг по запросу: ${queryValue}`
}