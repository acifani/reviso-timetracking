# Reviso TimeTracking API

## APIs

| URL               	| HTTP Method 	| Action               	|
|-------------------	|-------------	|----------------------	|
| `/entries`          	| GET         	| Get all entries      	|
| `/entries`          	| POST        	| Create new entry     	|
| `/entries/<id>`     	| GET         	| Get a single entry   	|
| `/entries/<id>`     	| PUT         	| Edit entry           	|
| `/entries/<id>`     	| DELETE      	| Delete entry         	|
| `/entries/overview` 	| GET         	| Get entries overview 	|

## Database models

### Entry

| Field         	| Type   	| Description                       	|
|---------------	|--------	|-----------------------------------	|
| `id`          	| int    	| Auto-incremental ID (pk)          	|
| `customer`    	| string 	| Customer name                     	|
| `hourly_rate` 	| float  	| Price per hour billed to customer 	|
| `length`      	| int    	| Length of the session in minutes  	|

## How to run

### Prerequisites

* Python 3
* sqlite, postgresql or any other rdbms
* Virtualenv (optional but recommended)

### Setup

#### Virtualenv
Install required packages
```
$ cd backend
$ virtualenv venv
$ source venv/bin/activate
(venv)$ pip install -r requirements.txt
```

#### Env variables

Setup the following environment variables (`export VARIABLE=VALUE` if on Linux):

* `FLASK_CONFIG`: `development`|`testing`|`production`|`heroku`. You can add more config sets in `config.py`.

* `FLASK_APP`: Points to the app (not the app factory), in our case `manage.py`.

* `SECRET_KEY`: Secret key needed by Flask to handle Sessions encryption. [Check Flask Sessions docs](http://flask.pocoo.org/docs/0.12/quickstart/#sessions).

* `DEV_DB_URI` `TEST_DB_URI` `DB_URI`: Database URLs, if not set defaults to SQLite. You can modify defaults in `config.py`.

#### Database init
Create all the database tables.
```
(venv)$ python manage.py create_db
```

### Run

#### Development server
```
(venv)$ python manage.py runserver
```

[Flask built-in development server](http://flask.pocoo.org/docs/0.12/server/): 
do NOT use for production as it is not build to manage more than one request at the time.

#### Production server
[Gunicorn](http://gunicorn.org/) server.
```
(venv)$ gunicorn manage:app
```

#### Tests
Run tests with `unittest`.
```
(venv)$ python manage.py test
```