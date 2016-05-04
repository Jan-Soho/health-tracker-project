// js/views/side-itemview.js

var SingleSideListItem = Backbone.View.extend({
	tagName: "li",
	events: {
		"click .addItem" : "addItem",
		'dragstart': 'dragStart'
	},
	initialize: function() {

	},
	addItem: function() {
		// we have to had the item to the main view collection
		// We can trigger an event
		mainAlimentList.add(this.model);
	},
	attributes : function () {
    return {
      draggable : true,
      ondragstart : "drag(event)",
      id: "s_" + this.model.get("id")
    };
 	},
 	dragStart: function(ev) {
 		// Trigger the drag event for each li, passing the model that had been chosen
 		this.model.trigger("drag", this.model);
 	},
	render: function() {
		this.$el.html(this.model.get("name") + " / " + this.model.get("cal") + " cal <button class='addItem'>Add</button>");
		return this;
	}
});