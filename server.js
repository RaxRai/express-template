const dotenv = require('dotenv');
const express = require('express');
const mongoose = require("mongoose");
// Load env variables
dotenv.config({ path: './config/config.env' });
const app = express();
const PORT = process.env.PORT || 4000;
// mongoDb setup
// mongoose.connect('mongodb://localhost/DBname')
//     .then(()=> console.log("connection to db successfull"))
//     .catch((err)=> console.log(err));

//pipeline and middleware
app.use(express.json());

//mongoDb Schema
// const teamSchema = new mongoose.Schema({
//     name : String,
//     players : [String],
//     winningYears : [String]
// });
// const Team = mongoose.model('Team',teamSchema);

app.get('/url', (req, res) => {
    Team.find().then((team) => res.send(team));
   });

app.post('/url', (req, res)=>{
    const team = new Team(req.body);
    team.save();
    res.send(team);
});

app.listen(
  PORT,
  console.log(`${process.env.NODE_ENV} server running at port ${PORT}`)
);