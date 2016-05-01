var NUTRI_ID = "4fa2fa3d";
var NUTRI_KEY = "dc52ff1ae24be55bfec98e6c59a86d05";

https://api.nutritionix.com/v1_1/search/apple?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=4fa2fa3d&appKey=dc52ff1ae24be55bfec98e6c59a86d05

// Gets the "venues" (location) data from foursquare API, in foursquare API objects are know as venues.
// getInitialPlaces is called when localStorage is empty, on first load or when you click on logo button


var ListItem = Backbone.Model.extend({
	defaults : {
		name: ""
	}
});

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

		// When loading finished we trigger an loaded event to signal all items have been adde
		// Because add event will trigger each time we add one item and not the entire collection
		this.trigger('loaded');
		// create an event
	}
});

var MainListItems = Backbone.Collection.extend({

});

var alimentList = new SideListItems({});

var SingleListItem = Backbone.View.extend({
	tagName: "li",
	events: {
		"click .add" : "addItem"
	},
	initialize: function() {

	},
	addItem: function() {
		// we have to had the item to the main view collection
		// We can trigger an event

	},
	attributes : function () {
    return {
      draggable : true,
      ondragstart : "drag(event)",
      id: "s_" + this.model.get("id")
    };
 	},
	render: function() {
		//console.log(this.model);
		this.$el.html(this.model.get("name") + " " + this.model.get("cal") + " <button>Add</button>");
		return this;
	}
});

var AllSideListItems = Backbone.View.extend({
	el: $('#sidebar'),
	events: {
		"keypress #searchBar" : "callnutri"
	},
	initialize: function() {
		this.$input = this.$('#searchBar');
		this.$list = this.$('#searchList');
		this.listenTo(alimentList, 'loaded', this.createList);
	},
	callnutri: function(e) {
		//console.log(e);
			if (e.keyCode === 13) {
				var self = this;
				var text = $("#searchBar").val();
				//console.log(text);
				var url = "https://api.nutritionix.com/v1_1/search/" + text + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=" + NUTRI_ID + "&appKey=" + NUTRI_KEY;

			    $.ajax({
			            url: url,
			            dataType: "json"
			        })
			        .done(function(data) {
			           console.log(data);
			           // Data.hits is an array of returned object, each object is an item
			           self.model.populate(data.hits);
			        })
			        .fail(function(jqXHR, textStatus) {
			            // Error handling
			            console.log("error");
			        });
			}

		},
		createList: function() {
			var self = this;
			this.$list.html('');
			// console.log(self.model);

			self.model.each(function(item) {
				//console.log(item);
				var view = new SingleListItem({ model: item });

				self.$list.append(view.render().$el);
				//console.log(item.fields.item_name);
			}, this);

		}

});

var allitems = new AllSideListItems({model: alimentList});
// add a listener to the input text search bar that declenche ze viouz



