# Reviso Timetracking

Webapp realized for Reviso technical interview. Allow user to correctly log time spent on a customer project and offer an 
overview to correctly create precise bills.

## Frontend / Client 
Realized with React and Redux, bootstrapped with `create-react-app`.

Why: I always wanted to try React as now it is one of the most prominent frontend js frameworks around. 
Redux offers a cool paradigm and I personally think it enables React to correctly decouple the 
data layer interface with the business logic.

Function: Offers three main pages: 

* `new`: Allow users to log and create new entries.

* `overview`: offers a summary of the entries based on every client.

* `manage`: list of all the entries, let users edit and delete each entry.

See it in action on [Heroku](https://reviso-timetracking-client.herokuapp.com/).

## Backend / Server / APIs
Realized in Python3 with Flask. 

Why: Python is probably my favourite language and the one 
I'm most confident with. Flask is a lightweight framework that allows to bootstrap web apps and APIs 
in very little time.

Function: Exposes the APIs consumed by the React client to easily manage all the entries.

See it in action on [Heroku](https://reviso-timetracking-server.herokuapp.com/api/v0.1/entries).
