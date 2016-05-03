// js/collections/mainlist.js

var MainListItems = Backbone.Collection.extend({
	model: ListItem,
	initialize: function() {
		this.on("remove", function() {
			console.log("item has been removed");
			console.log(this);
		})
	}
});