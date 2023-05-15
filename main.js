require('dotenv').config();
const app = require('./app');
port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
app.get('/',(req,res)=>{
    res.send("hello")
})