// js/collections/mainlist.js

var MainListItems = Backbone.Collection.extend({
	model: ListItem,
	url: "https://intense-heat-2914.firebaseio.com",
	initialize: function() {
		this.on("remove", function() {
			console.log("item has been removed");
		});
		this.on("add", function(item) {
			//itemsRef.push(item);
		})
	}
});