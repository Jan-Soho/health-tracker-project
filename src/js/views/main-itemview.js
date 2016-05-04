// js/view/main-itemview.js

var SingleMainListItem = Backbone.View.extend({
	tagName: "li",
	events: {
		"click .delete" : "deleteItem",
		"click .addPlus" : "addPlus",
		"click .subsMinus" : "subsMinus"
	},
	initialize: function() {

	},
	attributes : function () {
    return {	
      id: "m_" + this.model.get("id")
    };
 	},
 	deleteItem: function() {
 		// Remove from collection
 		this.model.destroy();
 		this.model.set('quantity', 1);
 		// Remove from DOM
 		this.remove();
 	},
 	addPlus: function() {
 		this.model.set("quantity", this.model.get("quantity") + 1);
 		this.render();
 	},
 	subsMinus: function() {
 		var quantity = this.model.get("quantity") !== 0 ? this.model.get("quantity") - 1 : 0;
 		this.model.set("quantity", quantity);
 		this.render();
 	},
	render: function() {
		//console.log(this.model);
		this.$el.html(this.model.get("name") + " / " + this.model.get("cal") + " cal / Q:" + this.model.get("quantity") + " / <button class='delete'>X</button><button class='addPlus'>+</button><button class='subsMinus'>-</button>");
		return this;
	}
});