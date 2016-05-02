
var AllMainListItems = Backbone.View.extend({
	el: $('#main'),
	initialize: function() {
		this.$list = this.$('#userList');
		this.listenTo(this.model, 'add', this.addOne);
		//console.log("main view ok");
	},
	addOne: function(item) {
		console.log(item);
		var view = new SingleMainListItem({ model: item });
		this.$list.append(view.render().el);
	},

});