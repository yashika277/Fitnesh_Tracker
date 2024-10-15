require("dotenv").config();
const express=require("express");
const cookieParser=require("cookie-parser")
const cors = require("cors");
const helmet = require('helmet');
const dbConnect = require("./db/dbConnect");
const authRoutes = require('./routes/auth.route');
const workoutRoutes = require('./routes/workout.route');
const goalRoutes = require('./routes/goal.route');
const statsRoutes = require('./routes/stats.route');
const adminRoutes = require('./routes/admin.route');

const app = express();
//body
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());
app.use(helmet());

//cookie
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/workouts', workoutRoutes); // Add workouts route
app.use('/api/goals', goalRoutes);       // Add goals route
app.use('/api/stats', statsRoutes);
app.use('/api/admin', adminRoutes);

//database connect
dbConnect();

app.get("/", (req, res) => {
    res.send(
      "<center><h1>Fitness Tracker Application</h1><br>Get Recipe Api <a href=https://github.com/Devanshiballar/-Fitness_Tracker_Application.git target=_blank>Repository :Fitness Tracker Application</a></center>"
    );
  });

//server
app.listen(process.env.PORT, () => {
    console.log(`server listening on port : ${process.env.PORT}`);

})