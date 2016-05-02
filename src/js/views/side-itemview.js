// js/views/side-itemview.js

var SingleSideListItem = Backbone.View.extend({
	tagName: "li",
	events: {
		"click .addItem" : "addItem",
		'dragstart': 'dragStart',
	},
	initialize: function() {

	},
	addItem: function() {
		//console.log("added");
		// we have to had the item to the main view collection
		// We can trigger an event
		mainAlimentList.add(this.model);
		//console.log(mainAlimentList.toJSON());
	},
	attributes : function () {
    return {
      draggable : true,
      ondragstart : "drag(event)",
      id: "s_" + this.model.get("id")
    };
 	},
 	dragStart: function(ev) {
 		//console.log("dragstart",ev);
 		this.model.trigger("yo", this.model);
 	},
	render: function() {
		//console.log(this.model);
		this.$el.html(this.model.get("name") + " / " + this.model.get("cal") + " cal <button class='addItem'>Add</button>");
		return this;
	}
});