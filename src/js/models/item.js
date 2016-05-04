// js/models/item.js

var ListItem = Backbone.Model.extend({
	defaults : {
		quantity: 1
	},
	urlRoot : "https://intense-heat-2914.firebaseio.com",
	initialize: function() {
		this.on("change:quantity", function(e) {
			mainAllItems.getCalories();
		})
	}
});