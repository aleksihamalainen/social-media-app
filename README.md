# Social media application

A simple Instagram-like social media application where you can share photos with your friends.

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

3. Create a database at https://www.mongodb.com/cloud/atlas

4. Create a .env file with the following contents:

   ```

   PORT=

   MONGODB_URI=

   SECRET=

   ```

5. Create a directory for the images

   `mkdir uploads`

6. Install the required dependencies

   `npm install`

7. Start the project

   `npm start`

## Features

- [x] Registration

- [x] Token-based authentication

- [x] Add and remove posts

- [x] View posts

- [x] View profiles

- [ ] View individual posts

- [ ] Like posts

- [ ] Follow other users
