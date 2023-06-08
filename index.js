import express  from "express";
import dotenv  from "dotenv";
import mongose  from "mongose";
const app = express();
dotenv.config();

const connect = async()=>{
try{
    await mongose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.")
} catch (error) {
    throw error
}
};

mongose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})
mongose.connection.on("connected", ()=>{
    console.log("mongoDB connected")
})

app.length("/", (req, res)=>{
    res.send("hello first repuest!")
})

app.listen(8800, ()=>{
    connect()
    console.log("Connecting to backend");
})