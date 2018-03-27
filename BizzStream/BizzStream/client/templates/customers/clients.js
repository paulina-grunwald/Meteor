Meteor.subscribe('clients');

Template.customers.helpers({
	clients() {
		return Clients.find({}, {sort: {createdAt: -1}, limit: 5});
	}

});


Template.homeClients.helpers({
	clients: function(){
		return Clients.find({}, {sort: {createdAt: -1}});
	}


});