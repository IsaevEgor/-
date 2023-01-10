function encodeUrlFunc() {
	const url = inputQuery.value;
	const encodeURL = encodeURIComponent(url)
	
	fetchBrands(encodeURL)
}