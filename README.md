# Software-Engineering-2
Notes and assignments of the university course:  "Software Engineering 2".

### Getting to know our tools
On this course we are going to be using nodejs
```bash
sudo pacman -S nodejs npm

# Initialize a Node.js project 
npm init -y # -y is used to skip filling in the project details

# Install the dependency "Express" which creates the node modules
npm install express

# Install the dependency "Nodemon" 
npm install nodemon
```
#### What are Express and Nodemon:
- **Express**: It is a popular, minimalist web framework for Node.js. It helps you build web applications and APIs by providing essential functionalities like routing, middleware support, and HTTP handling.
- **Nodemon**: It is a development tool that automatically restarts your Node.js application whenever file changes are detected. It's incredibly useful for development, as it saves you from manually stopping and restarting the server each time you make a change to the code.

We are going to write some helpful scripts inside the package.json
```javascript
// Add these under "scripts"
"dev": "nodemon index.js",
"start": "node index.js"
```
To start the server type:
```bash
# The only difference is when you make changes to server files.

npm run dev # without the need to reload

npm run start # must reload
```
