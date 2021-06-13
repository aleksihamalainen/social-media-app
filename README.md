# Social media application

A simple Instagram-like social media application where you can share photos with your friends.

The live version of the application is running [here](https://generic-some-app.herokuapp.com/).

## Tech stack

- React

- Node.js
- Express

- MongoDB

- Docker

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

5. Install the required dependencies

   `npm install`

6. Start the project

   `npm start`

### Using Docker

If you want to run the project using Docker, you can skip steps 5 and 6 above, and use the following commands instead:

5. Build a Docker image

   `docker build -t social-media-app .`

6. Run the previously built image:

   `docker run -p 3001:3001 social-media-app`

Now the project is running at localhost on port 3001.

## Features

- [x] Registration

- [x] Token-based authentication

- [x] Add and remove posts

- [x] View posts

- [x] View profiles

- [ ] View individual posts

- [ ] Like posts

- [ ] Follow other users
