// js/views/side-listview.js

var NUTRI_ID = "4fa2fa3d";
var NUTRI_KEY = "dc52ff1ae24be55bfec98e6c59a86d05";

var AllSideListItems = Backbone.View.extend({
	el: $('#sidebar'),
	events: {
		"keypress #searchBar" : "callnutri"
	},
	initialize: function() {
		this.$input = this.$('#searchBar');
		this.$list = this.$('#searchList');
		this.listenTo(sideAlimentList, 'loaded', this.createList);
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
			           //console.log(data);
			           // Data.hits is an array of returned object, each object is an item
			           self.model.populate(data.hits);
			        })
			        .fail(function(jqXHR, textStatus) {
			            // Error handling
			           // console.log("error");
			        });
			}

		},
		createList: function() {
			//console.log("we create");
			var self = this;
			this.$list.html('');
			// console.log(self.model);

			self.model.each(function(item) {
				//console.log(item);
				var view = new SingleSideListItem({ model: item });

				self.$list.append(view.render().$el);
				//console.log(item.fields.item_name);
			}, this);

		}

});