Router.configure({
  layoutTemplate : 'layout',
  loadingTemplate : 'loading',
  notFoundTemplate: 'notFound'

});

/*Add route to the index page*/
Router.route("/", {
	name: "homeIndex"
});

Router.route("/about", {
	name: "homeAbout"

});

Router.route("/contact", {
	name: "homeContact"

});

Router.route("/clients", {
	name: "homeClients"

});

