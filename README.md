# Icix User Interface Coding Challenge Response

This project is my response to the Icix user interface coding challenge. The 
challenge was to display tabular data using Angular.js and to allow the user to
transpose the data. There were optional challenges of loading the data from a
file and displaying a map (the data is names and addresses) when an item is
selected. This response covers all of these items.

This project is built using [angular-seed](https://github.com/angular/angular-seed).
Most of the files come directly from this seed project. The files that I have
modified or added are listed below.

    app/
      css/
        app.css             --> edited to include custom styles
      data/
        data.csv            --> the data in csv format
        data.json           --> the data in json format
      index.html            --> edited to include Jquery, Typekit and Google APIs
      js/
        app.js              --> edited to include custom app setup
        controllers.js      --> edited to include custom controllers
        directives.js       --> edited to include custom directives
      partials/
        list.html           --> list view template
      python/
        csv-json.py         --> python script to convert csv to json

    test/
      e2e/
        scenarios.js        --> listed all features to test
      unit/
        controllersSpec.js  --> listed all unit tests for controllers
        directivesSpec.js   --> listed all unit tests for directives
        

## Running the Coding Challenge

The best way to view the challenge is to install [node.js](http://nodejs.org).
Once it is installed you can run:

```
node scripts/web-server.js
```

You can then navigate to http://localhost:8000/app/index.html to view the 
challenge.

## Unit and End-to-End tests

The scenarios.js, controllersSpec.js and directivesSpec.js files listed above
contain the frameworks for unit and end-to-end tests. Not all of the tests have
been fleshed out but the framework will serve to document all of the intended
functionality. See the documentation at [angular-seed](https://github.com/angular/angular-seed)
for more information about running the tests.


