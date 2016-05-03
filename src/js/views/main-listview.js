
var AllMainListItems = Backbone.View.extend({
	el: $('#main'),
	events: {
		"drop": "dropEvent",
	},
	initialize: function() {
		this.$list = this.$('#userList');
		this.listenTo(this.model, 'add', this.addOne);
		this.listenTo(sideAlimentList, 'drag', this.dragEvent);
	},
	addOne: function(item) {
		//console.log("item added");
		var view = new SingleMainListItem({ model: item });
		this.$list.append(view.render().el);
	},
	dropEvent: function(ev) {
		this.model.add(this.tempDragged);
		//console.log(this.model);
	},
	dragEvent: function(obj) {
		// Store the temporary dragged object
		this.tempDragged = obj;
	}

});