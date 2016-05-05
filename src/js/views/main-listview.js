
var AllMainListItems = Backbone.View.extend({
	el: $('#main'),
	events: {
		"drop": "dropEvent",
		"click .saveList": "saveList",
	},
	initialize: function() {
		this.$header = $('#titleContent');
		this.$footerL = $('#footerL');
		this.$footerR = $('#footerR');
		this.$footerR.html('<button class="saveList">Save</button>');
		this.$list = this.$('#userList');
		this.listenTo(this.model, 'add', this.addOne);
		this.listenTo(sideAlimentList, 'drag', this.dragEvent);
		this.listenTo(this.model, 'all', this.getCalories);
		
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
	},
	getCalories: function() {
		var self = this;
		this.totalCalories = 0;
		//console.log(this.model);

		this.model.each(function(item) {
			self.totalCalories += item.get("cal")*item.get("quantity");
		});

		this.render();
		//console.log(this.totalCalories);
	},
	saveList: function() {
		// @ protection on validation escape html + validation if null
		var title = this.$header.val();
		var newChildRef = listRef.push({title: title, date: Date()});
		
		var postID = newChildRef.key();

		this.model.each(function(item) {
			itemsRef.push({
				listId: postID,
				id: item.get("id"),
				name: item.get("name"),
				brand: item.get("brand"),
				cal: item.get("cal")
			});
		});

		this.model.reset();
		
	},
	render:function() {
		this.$footerL.html(this.totalCalories);
	}

});