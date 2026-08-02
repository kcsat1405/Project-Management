import dotenv from "dotenv";
import app from "./app.js"
import connectDB from "./db/index.js"
import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
dotenv.config({
  path: "./.env",
});

let myusername = process.env.database;
console.log(myusername);
console.log("start of backend ");



const port=process.env.PORT||3000;


connectDB()  //when database is connected then only it should listen
.then(()=>{
  app.listen(port,()=>{
  console.log(`Example app listening on port http://localhost${port}`);
})
})
.catch((err)=>{
  console.error("mongodb connection error",err)
  process.exit(1);
})