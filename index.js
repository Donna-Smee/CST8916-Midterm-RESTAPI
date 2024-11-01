const express = require('express');
require('dotenv').config();


const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// The students will temporarily be stored here
students = [
  {"ID": 1, "Name": "Annie", "Grade": "A", "Email": "annie@gmail.com"},
  {"ID": 2, "Name": "Carl", "Grade": "A+", "Email": "carl@gmail.com"},
  {"ID": 3, "Name": "Twitch", "Grade": "F", "Email": "twitch@hotmail.com"}
]

// API Endpoints
app.get("/students", getStudents);
app.get("/students/:id", getStudent);


function getStudents(req, res){
  if (students){
    res.send(students);
  }else {
    res.send([]);
  }
}

function getStudent(req, res, next){
  const studentID = req.params.id;
  //const studentFound = students.findIndex(students => students.ID === parseInt(studentID));

  for (let i = 0; i < students.length; i++){
    if (students[i].ID == studentID){
      res.send(students[i]);
      return;
    }
  }
  res.send(null);
}

// chatgpt
// POST /students: Add a new student
app.post('/students', (req, res) => {
  const { Name, Grade, Email } = req.body;

  // Validate required fields
  if (!Name || !Grade || !Email) {
      return res.status(400).json({ error: 'Please provide Name, Grade, and Email.' });
  }

  // Generate a unique ID
  const ID = students.length ? students[students.length - 1].ID + 1 : 1;

  // Create a new student object
  const newStudent = {
      ID,
      Name,
      Grade,
      Email
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT /students/:id: Update an existing student by ID
app.put('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const { Name, Grade, Email } = req.body;

  // Find the student by ID
  const student = students.find(s => s.ID === studentId);
  if (!student) {
      return res.status(404).json({ error: 'Student not found' });
  }

  // Update student attributes if they are provided
  if (Name) student.Name = Name;
  if (Grade) student.Grade = Grade;
  if (Email) student.Email = Email;

  res.json(student);
});

// DELETE /students/:id: Delete a student by ID
app.delete('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);

  // Find the index of the student
  const studentIndex = students.findIndex(s => s.ID === studentId);
  if (studentIndex === -1) {
      return res.status(404).json({ error: 'Student not found' });
  }

  // Remove the student from the array
  const deletedStudent = students.splice(studentIndex, 1);
  res.json(deletedStudent[0]);
});

// GET /students/:id: Retrieve a student by ID
app.get('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find(s => s.ID === studentId);
  if (!student) {
      return res.status(404).json({ error: 'Student not found' });
  }

  res.json(student);
});

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

/*
GET /students: Retrieve a list of all students.
GET /students/{id}: Retrieve details of a student by ID.
POST /students: Add a new student.
PUT /students/{id}: Update an existing student by ID.
DELETE /students/{id}: Delete a student by ID.
 */