{{#template name='markdownBody'}}
# METEOR APP ASSIGNMENT

> created by Paulina Grunwald


#### Content:
1. Assignment description
2. Project plan
3. Steps taken to complete the project
4. Problems encountered
4. References


# Assignment description

Your assignment is to create a basic application that allows you to save a document to the Mongo database:

- Create a publication that publishes the layout and the document definition as set out above to the client.
- On the client, create a view based on the layout and document definition.
- Render a bootstrap grid that shows the fields name and age based on the view. Also, render a button for save.
- When clicking the save button, call a Meteor method that save the document to the database.

```JSON
{
	"schema":{
		"fields":[
			{
				"_id": "cc4cb134-fda0-44d8-8e92-e42ebbceb415"
				"label": "Client Name",
				"name":"name",
				"type": "Text"
				"maxLength": 100
			},
			{
				"_id": "228b905f-4a43-4a40-b829-0c6a04ad4782"
				"label":"Client Age",
				"name": "age",
				"type": "number"
			}
		]
	}
}
```

Layout concept:
```JSON
{
	"header":{
		"rows":[
			{
				"columns":[
					{
						"fieldId": "cc4cb134-fda0-44d8-8e92-e42ebbceb415"
					},
					{
						"fieldId": "228b905f-4a43-4a40-b829-0c6a04ad4782"
					}
				]
			}
		]
	}
	"buttons":[
		"save"
	]
}
```

This layout shows one row that contains 2 columns: column 1 contains the field name and column 2 contains the field age. Furthermore, the view generates also contains a Save button; which saves a document.


# Project plan

1. Create the project
2. Create the UI in plain HTML
3. Use collections to add the data to the database
4. View data from the database
5. Add Boostrap4 layout


# Steps taken to complete the project.

### 1. Project preparation and set-up

1. Install meteor in Linux environment using command: ``curl https://install.meteor.com/ | sh``
2. Create project folder: ``meteor create BizzStream``
3. Run newly created project to see if installation was successful: ``cd BizzStream
meteor``
4. Open your web browser and go to http://localhost:3000 to see the app running.
5. Change folder structure.

In ``client`` I have added two new folders: templates (all the templates will be stored there) and stylesheets for .css files.

In project folder I have created new folder ``lib``. Lib folder can be accessed by client and server. In that folder i have placed collections.js (data scheme) and router,js (which include all the routings for the page.)

In public folder I have created folder dedicated for the images. Server folder will include main.js and publish.js scripts.

<em>Additional info:</em>

- Kill meteor project: ``sudo killall -9 node``
- If the meteor process is quit improperly (empty battery for example) you may also get this error. in this case running: ``meteor reset``

### 2. Add Routing

Install ``meteor add iron:router`` package. Iron is a router that works on the server and the browser, designed specifically for Meteor. Routes are created for the client and will run in the browser.

I have configured 3 routes: for main layout, loading page and 404 error.

```javascript
Router.configure({
  layoutTemplate : 'layout',
  loadingTemplate : 'loading',
  notFoundTemplate: 'notFound'
});

```

Moreover, additonal routes were created

### . Add Bootstrap4 layout to the package

Install ``meteor add twbs:bootstrap`` package.

everything you put on client will run on client and everything u put on server will run on server

{{> hello}} template



### . Setp up collections data scheme and test the database
Install ``meteor add meteortoys:allthings`` package.

Run `` meteor mongo``

# Problems encountered

Although I have find quite some documentation, tutorials and other materials the amount of available information was much smaller in comparison to other frameworks e.g React. I have stumbled upon many issues that had to do with versions compatibility or change in syntax between versions. In the end I have managed to solve issues using tips from discussion forums on github and stackoverflow.



meteor add simple:markdown-templating
# Referencess
- https://stackoverflow.com/questions/12999181/how-to-restart-meteor/13003320
- https://www.youtube.com/watch?v=9494-2E4riQ
- https://github.com/aldeed/meteor-autoform/issues/1542
- https://github.com/iron-meteor/iron-router/issues/1563
- https://app.pluralsight.com/library/courses/meteorjs-fundamentals-single-page-apps/table-of-contents
- https://app.pluralsight.com/library/courses/meteorjs-web-application/table-of-contents
- https://www.safaribooksonline.com/library/view/the-full-stack/9781788470735/
- https://www.safaribooksonline.com/library/view/mastering-meteor-powerful/9781783552580/

{{/template}}