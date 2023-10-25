require("dotenv").config();
const express=require("express")
const mongoose=require('mongoose')


const workoutRoutes=require('./routes/Admin')
const categoryRoutes=require('./routes/categoryRoute')
const productRoutes=require('./routes/productRoute')
const reviewsRoutes=require('./routes/reviewRoute')
const feedbackRoutes=require('./routes/feedbackRoutes')
const app=express()
app.get("/", function(req, res) {
    res.send("Hello, World!");
  });

  //middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
})
//routes
  app.use('/api/workout', workoutRoutes)
  app.use('/api/categoryRoute', categoryRoutes)
  app.use('/api/productRoute', productRoutes)
  app.use('/api/reviewRoute', reviewsRoutes)
  app.use('/api/feedbackRoute', feedbackRoutes)
//mongoose

mongoose.connect(process.env.MONGO).then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
  })
})
  .catch((err) => {
    console.log("Error connecting to the database:", err);
  });
