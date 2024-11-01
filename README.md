# CST8916 Midterm REST API for Students (Question 1)

## Project Set up
This project is set up using Node.js. The service uses Express to handle the server, and has the following endpoints:
- GET /students: Retrieve a list of all students.
- GET /students/{id}: Retrieve details of a student by ID.
- POST /students: Add a new student.
- PUT /students/{id}: Update an existing student by ID.
- DELETE /students/{id}: Delete a student by ID.

The main service is run in index.js.
All dependencies are handled using npm, and are in the package.json and package-lock.json files.
The .http file contains endpoints for testing purposes.
.gitignore lists files github should ignore, such as the node_modules and the .env file.

## Environment Configuration
The only environment variable needed for this service is the PORT.
Create a .env file, and paste in the following:
```
PORT=3000
```
If this PORT is taken, use another, such as 8000, 5000, 8080, etc

## How to run the service locally
Clone this repository.

1. Update the package list
```
sudo apt update
```

2. Install Node.js and npm
```
sudo apt update
sudo apt install -y nodejs
```
3. Navigate to CST8916-Midterm-RESTAPI directory
```
cd CST8916-Midterm-RESTAPI
```

4. Install the dependencies using npm
```
npm install
```

5. Run the service
```
node index.js
```



