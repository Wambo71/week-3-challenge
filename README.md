###  BLOG POST MANAGER

A simple blog post manager app built with *HTML*, *CSS*, *JavaScript**, and a mock backend using **JSON Server**. Users can view, add, and display blog posts with titles, content, and images.

## features

- View all blog post titles and images.
- Click a post to see detailed content (title, body, image).
- Add a new post via a form.
- All data is managed via a mock REST API using `json-server`.



---

## Features

- View all blog post titles and images.
- Click a post to see detailed content (title, body, image).
- Add a new post via a form.
- All data is managed via a mock REST API using `json-server`.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension (or any static server)
- Terminal or command-line access

---

### Setup Instructions

1. **Clone or download the repo**  
   ```bash
   git clone https://github.com/your-username/blog-post-manager.git
   cd blog-post-manager

 2. **install json server globally**
npm install -g json-server

 3. **start the json server**
json-server --watch db.json

 4.**start the frontend(via live server)**
   .Open index.html in your code editor
   .Right-click and choose "Open with Live Server"

   ### API Endpoints
 Base URL: http://localhost:3000/posts

 GET /posts — Retrieve all posts

 GET /posts/:id — Get single post by ID

 POST /posts — Create a new post

 PATCH /posts/:id — Update a post

 DELETE /posts/:id — Delete a post

 ### Testing the app
 .Open the app in your browser (via Live Server)

 .Confirm that blog posts are visible

 .Add a new post using the form

 .Click a post title to view details

 .Check the browser console or db.json file to verify changes

 ### License
   Copyright (c) 2025 Wambui

 ### Author
  Wambui Karanja# week-3-challenge
