// js/view/main-itemview.js

var SingleMainListItem = Backbone.View.extend({
	tagName: "li",
	events: {
		"click .delete" : "deleteItem"
	},
	initialize: function() {

	},
	addItem: function() {

	},
	attributes : function () {
    return {	
      id: "m_" + this.model.get("id")
    };
 	},
 	deleteItem: function() {
 		this.model.destroy();
 		this.remove();
 		console.log("remove ok");
 	},
	render: function() {
		//console.log(this.model);
		this.$el.html(this.model.get("name") + " / " + this.model.get("cal") + " cal <button class='delete'>X</button>");
		return this;
	}
});