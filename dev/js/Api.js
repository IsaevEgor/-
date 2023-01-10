function fetchBrands(url) {
		fetch('https://search.wb.ru/exactmatch/ru/common/v4/search?appType=1&couponsGeo=12,3,18,15,21&curr=rub&dest=-1029256,-102269,-2162196,-1257786&emp=0&pricemarginCoeff=1.0&query='+url+'&regions=80,64,83,4,38,33,70,68,69,86,75,30,40,48,1,66,31,22,71&resultset=catalog&')
		.then(response => response.json())
		.then(data => showBrands(data.data.products))
}