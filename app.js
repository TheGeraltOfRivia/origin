const express = require("express");
const app = express();

let person = {
  pName: "Daniyal Khan",
  Education: {
    university: "Nuces, Fast",
    Degree: "Software Engineering",
    term: "2020-2024",
  },
  filer: "Yes",
  age: "24",
  Experience: {
    Clients: 204,
    CompaniesServed: 12,
    OpenSourceProjects: 130,
    PrivateProjects: 78,
  },
};

app.get("/", (req, res) => {
  res.json(person);
});
app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.listen(3000);
