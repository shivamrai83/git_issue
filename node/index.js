const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");
const { dummyTable } = require("./db");

const PORT = 3007;
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }));

//controller
app.get("/", async function (request, response) {
  response.send("working fine");
});

app.get("/data", async function (request, response) {
    const data= await dummyTable.findAll();
    response.send(data);
  });

app.post("/singup", async function (request, response) {
  try{
  const { name, age, gender, salary, occupation, email } = request.body;
  const createUser = await dummyTable.create({
    name,
    age, 
    gender, 
    salary, 
    occupation, 
    email,
  })
  createUser.save();
  response.send("Done");
}
catch(e){
  console.log("shivam",e)
}
});



db.initalise().then(console.log).catch(console.log);

app.listen(PORT, () => console.log("Server is running..."));
