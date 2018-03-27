// Add necessary imports for using SimpleSchema
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);


// Create new collection
Clients = new Mongo.Collection("clients");

// Attach schema to the collection
Clients.attachSchema(new SimpleSchema({
  customerName: {
    type: String,
    label: "Customer Name",
    max: 100
  },
  customerAge: {
    type: Number,
    label: "Customer Age"
  },
  
  createdAt: {
    type: Date,
    label: "Created At",

    autoValue: function() {
    	return new Date()
    },
    autoform: {
    afFieldInput: {
      type: "hidden"
    },
    afFormGroup: {
      label: false
    }
  }
  },


}, { tracker: Tracker }));

Clients.allow({
	insert: function () {
		return customerName
	}
});
