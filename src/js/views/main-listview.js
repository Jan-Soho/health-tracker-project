
var AllMainListItems = Backbone.View.extend({
	el: $('#main'),
	events: {
		"drop": "dropTest",

	},
	initialize: function() {
		this.$list = this.$('#userList');
		this.listenTo(this.model, 'add', this.addOne);
		this.listenTo(sideAlimentList, 'yo', this.dragTest);
		// we want the main view to listen to the yo event from singleItemList view
		// 	this.listenTo(sideAllItems, 'yo', function(e){ console.log("everything happened"); });
		//console.log("main view ok");
	},
	addOne: function(item) {
		console.log("item added");
		var view = new SingleMainListItem({ model: item });
		this.$list.append(view.render().el);
	},
	dropTest: function(ev) {
		//console.log(ev);

		// we want to insert the dropped element to the main collection
		// get the id
		// var item_id = ev.currentTarget.childNodes[1].firstChild.id;
		// // Id in models are not the same than in the DOm so we delete the beggining
		// item_id = item_id.replace("m_", "");
		// //console.log(item_id);
		// var droppedModel = sideAlimentList.where({id: item_id});
		this.model.add(this.tempDragged);
		console.log(this.model);

	},
	dragTest: function(obj) {
		// Store the temporary dragged object
		this.tempDragged = obj;
	}

});