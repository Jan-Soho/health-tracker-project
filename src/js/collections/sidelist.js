// js/collections/sidelist.js

var SideListItems = Backbone.Collection.extend({
	model: ListItem,
	initialize: function() {
		//this.on('loaded', function() {console.log('Handled Backbone event');});
	},
	populate: function(data) {
		// Empty collection
		this.reset();
		// Get the info of the array passed by callnutri ajaxcall, contains all info from items in fields
		var itemArray = [];
		_.each(data, function(item) {
			itemArray.push({id: item.fields.item_id, name: item.fields.item_name, brand: item.fields.brand_name, cal: item.fields.nf_calories});
			//console.log(item.fields.item_name);
		});

		// We had this created array to the collection, intanciating item
		this.add(itemArray);
		//console.log(this);
		// When loading finished we trigger an loaded event to signal all items have been adde
		// Because add event will trigger each time we add one item and not the entire collection
		this.trigger('loaded');
		// create an event
	}
});