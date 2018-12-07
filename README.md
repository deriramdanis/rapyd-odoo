# Object-Relational Mapping for PouchDB/CouchDB and Framework inspired by Odoo
After years developing applications with *magic* MVC and ORM included with it, I started to think even though these ORM Frameworks and relational-databases are powerful. They lack some important points that needs to be fixed.

Now Framework is on Beta Stage!

New Messaging Feature

# Screenshots
![alt text](https://github.com/rafi16jan/screenshots/blob/master/rapyd-framework/Screenshot%202017-12-19%20at%2015.51.42.png?raw=true)
![alt text](https://github.com/rafi16jan/screenshots/blob/master/rapyd-framework/Screenshot%202018-03-20%20at%2021.05.25%20-%20Edited.png?raw=true)
![alt text](https://github.com/rafi16jan/screenshots/blob/master/rapyd-framework/Screenshot%202018-03-20%20at%2021.05.57%20-%20Edited.png?raw=true)
![alt text](https://github.com/rafi16jan/screenshots/blob/master/rapyd-framework/Screenshot%202017-12-19%20at%2016.06.13.png?raw=true)
![alt text](https://github.com/rafi16jan/screenshots/blob/master/rapyd-framework/Screenshot%202017-12-19%20at%2016.06.27.png?raw=true)
![alt text](https://github.com/rafi16jan/screenshots/blob/master/rapyd-framework/Screenshot%202017-12-19%20at%2016.06.54.png?raw=true)
![alt text](https://github.com/rafi16jan/screenshots/blob/master/rapyd-framework/Screenshot%202017-12-19%20at%2016.07.41.png?raw=true)
![alt text](https://github.com/rafi16jan/screenshots/blob/master/rapyd-framework/Screenshot%202017-12-19%20at%2016.07.50%20-%20Edited.png?raw=true)

# Purpose of this project
- Creating an ORM for PouchDB/CouchDB which is a non-relational database or simply called NoSQL (except PouchDB that can be configured to use SQLite, etc), with a fabulous sync feature (https://pouchdb.com/guides/replication.html), offline capabilities, revision management, and performance. One more thing, ITS JSON!! (ORM Repo https://github.com/rafi16jan/pouchdb-orm ARCHIVED) Done ✓

- Build a *not so [magic](https://en.wikipedia.org/wiki/Magic_(programming))* server-side MVC or PWA (Progressive Web Apps that only rely to RESTFul APIs and can be ran offline, either with service worker or local PouchDB) Framework. I prefer PWA, but I still need recommendation. (Framework Repo https://github.com/rafi16jan/rapyd-framework) Ready ✓

- Use RapydScript (Python transpiler to Javascript, currently ES5 for compatibilty) in server-side (Node.js) and client-side, because Python's slogan "readability counts" is true. I managed to build full-customized ERP based on customer's needs with Odoo. But the performance is not good. Done ✓

- So we will have Python's readabilty, Javascript's JIT Compiler performance, and NoSQL concurreny with sync! If you have experiences with concurrent user greater than 150-200 you'll know how without sync two requests writing to the same record can make conflicts.

# How to use the Framework
To install just do `npm install` on the module directory

To run the server, do `node server.js` or pass `--clear-cache` to clear the cache

Modify app.conf to change port or other variables

The Webclient is on client folder, put it on nginx or something else or simply open index.html on a browser, it should work. Or if you're lazy enough you can change local_app variable in app.conf to True. Then, open the server url (don't forget the port).

# How to test (Advanced)
To test the ORM read the test.pyj file, if you know Odoo you should feel familiar with the code.

To execute it `node ./node_modules/.bin/rapydscript -x test.pyj`, or if you encounter bugs remove the cache too `rm -f */*.pyj-cached && node ./node_modules/.bin/rapydscript -x test.pyj`

To test the Framework read the server.pyj file, it is the file that contains the main controller (the Class is also similar to Odoo's http.Controller)

To execute it `rm -f */*.pyj-cached && node ./node_modules/.bin/rapydscript -p modules -x server.pyj`

# What's In-progress
So lately I've been requested to finish this project so I worked on it. And now the plain ORM is ready for use (although not tested heavily). Now I'm developing the PWA for the client side. In the future I'll made the documentation for all APIs and ORM logic, but for now I'll just point the fundamentals.

- The ORM is designed to mimic Odoo's ORM, so if you're an Odoo Developer you'll be familiar with all the logic and style

- Both server-side and client-side will have the same *codebase*, why? Because it'll save development time. But isn't it unsecure? Yes and no, in fact you can actually set all code you write to be executed only on server-side (with ajax ofcourse). The client-side execution is for the offline feature (that should be revalidate on the server side).

- The database that will be created is both on server-side and client-side. Multi databases on server-side and single database on the client-side for offline use. With this scenario user can first save changes on the device and then upload it when he wants (or internet coverage). So no data-loss.

- Even though this framework is designed to mimic Odoo, there are **differences**. Odoo is Python while this is Javascript that written on Python's syntax. So, learn about anonymous function, asynchronous operation (Promises, Callback), and any other else about Javascript.

- All client aspects (Menu, List, Form) are only declared on the server, the rendering, processing, will be performed on client. In my Webclient, I provided some functions to help the process.

- The client ORM should be loaded after login. So if you want to build your own Webclient sent POST request to /api/login and evaluate the client_js argument on the returned JSON.

- The client ORM declare some global variables. tools, models, and db. The DB variable is not server's database object, but the client's.

- If you are a hardcore Javascript developer (especially ES6). I know my Webclient isn't good, but I doesn't have time to learn ES6 so I can't waste more time to delay the project. Just build a Webclient yourself if you want to help. I really apreciate it.

# What's still undecided
- Wether to use original Rapydscript https://github.com/atsepkov/RapydScript rather than https://github.com/kovidgoyal/rapydscript-ng (for now I use rapydscript-ng)

- Server-side MVC (like Django, Odoo) or PWA with RESTFul Webservices (Custom REST API Controllers or CouchDB's REST API), currently I develop the PWA

- Use PouchDB Server (leveldb) or CouchDB (now CouchDB but I use in-memory db for testing https://github.com/pouchdb-community/pouchdb-memory)

- Custom authentication with token (CSRF if MVC) or CouchDB authentication (http://docs.couchdb.org/en/2.1.0/api/server/authn.html)

All feedback and advice are appreciated
