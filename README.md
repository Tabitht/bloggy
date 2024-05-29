# Bloggy

A simple blog application built with Node.js, Express, and MongoDB.

### Prerequisites

- Node.js and npm must be installed
- MongoDB installed and running

### Installation
1. Create a directory and initialize git using `git init`

2. move into the directory and initialize the project ` npm init -y`

2. Install dependencies:
    ` npm install `

3. Create a `.env` file to store your secrets e.g
    MONGODB_URI=your_mongodb_uri


4. Start the server:
    ` npm start `
    
### Endpoints

- `POST /posts`: Create a new post
- `GET /`: Get all posts
- `GET /:post`: Get a single post 
- `PUT /:id`: Update a post by ID
- `DELETE /:id`: Delete a post by ID

### Services
Create a service file to handle your business logic

### Controllers
create your controllers to execute the endpoints
- `store`- to create your post
- `index`- to get all posts
- `show`- to get a single post
- `update`- to update your post
- `Delete`- to delete a post

### Request Validation

All request validations are done using `Joi` and are implemented as middleware functions.
