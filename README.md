# Social media application

A full stack social media application.

The live version of the application is running [here](https://generic-some-app.herokuapp.com/).

## Tech stack

- React
- Node.js
- Express
- MongoDB
- Material-UI

## Installation

1. Clone the project

`git clone https://github.com/aleksihamalainen/social-media-app.git`

2. Go to the correct directory

`cd social-media-app/server`

3. Create a .env file with the following contents:

```
PORT=3001
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.sn7qe.mongodb.net/<dbname>?retryWrites=true&w=majority
SECRET=secret
```

4. Install the required dependencies

`npm install`

5. Start the project

`npm start`

## Features

- [x] Registration
- [x] Token-based authentication
- [x] Add and remove posts
- [x] View posts
- [x] View profiles
- [ ] View individual posts
- [ ] Like posts
- [ ] Comment posts
- [ ] Follow other users
- [ ] Search functionality
