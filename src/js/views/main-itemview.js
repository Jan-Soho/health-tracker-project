// js/view/main-itemview.js

var SingleMainListItem = Backbone.View.extend({
	tagName: "li",
	events: {
		
	},
	initialize: function() {
		console.log("single initialize");
	},
	addItem: function() {

	},
	attributes : function () {
    return {	
      id: "m_" + this.model.get("id")
    };
 	},
	render: function() {
		//console.log(this.model);
		this.$el.html(this.model.get("name") + " / " + this.model.get("cal") + " cal");
		return this;
	}
});