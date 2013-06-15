exports.definition = {
	config: {
		columns: {
		    "title": "text",
		    "time": "text",
		    "image_url": "text",
		    "mimage_url": "text",
		    "description": "text",
		    "blink": "text",
		    "price": "text",
		    "favTime": 'integer'
		},
		adapter: {
			type: "sql",
			collection_name: "feed",
			idAttribute: "title"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		
		return Model;
	},
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			// comparator : function(feed) {
  	//     return feed.get('time');
   //    }
		});
		
		return Collection;
	}
}

