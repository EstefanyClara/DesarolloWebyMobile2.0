const express = require('express');
const app = express();

app.use(express.json());

const students = [
    { id: 1, name: 'John Doe', age: 23 },
    { id: 2, name: 'Jane Doe', age: 24 },
    { id: 3, name: 'Jim Doe', age: 25 },

];

app.get('/', (req, res) => {
    res.send('Node JS Api');
}); 

app.get('/api/students', (req, res) => {
    res.send(students);
});

app.get('/api/students/:id', (req, res) => {
    const student = students.find(c => c.id === parseInt(req.params.id));
    if (!student) res.status(404).send('The student with the given ID was not found');
    res.send(student);
});

app.post('/api/students', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    students.push(student);
    res.send(student);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));