let restaurantTemplateString = document.getElementById('restaurants-template').innerHTML;
let renderRestaurants = Handlebars.compile(restaurantTemplateString);

Handlebars.registerHelper('display-array', function(owners) {
	let html = '';
	var i;
	for(i=0; i<owners.length; i++) {
		let owner = owners[i];
		html += '<ul>' + owner + '</ul>';
	}
	return html;
});

$.getJSON('https://thejsguy.com/teaching/2018/api/restaurants.json').then(function(restaurants) {
	console.log(restaurants.data);
	let renderedRestaurants =  renderRestaurants({
		restaurants: restaurants.data
	});
	$('body').append(renderedRestaurants);
	$('#loading').html('');
});
