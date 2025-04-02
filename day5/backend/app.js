const express = require('express')

const cors = require('cors')
const fs= require('fs/promises')
const app = express()
let users =[];
app.use(express.json())
app.use(cors())
const readdata=async ()=>{
    users=JSON.parse(await fs.readFile('./data.json','utf8'))
}
const writedata=async ()=>{
   await fs.writeFile('./data.json',JSON.stringify(users))
}
readdata();
app.get('/users', async (req, res) => {
    res.json(users);
})
app.post('/users',(req,res)=>{
    const {name,age}=req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
    const newuser={id:newid,name,age};
    users.push(newuser);
    writedata();
    res.status(200).json({message: 'user register success',data: newuser});
    
})
app.put('/users/:id/',(req,res) => {
    const uid=req.params.id;
    const {name,age}=req.body;
    const userIndex=users.findIndex(user=>user.id==uid);
    if(!name || !age) {
        res.status(400).json({message: 'name and age are required'});
        return;
    }
    if(userIndex==-1){
        console.log(userIndex)
        res.status(404).json({message: 'user not found'});
    }
    else{
        users[userIndex].name=name;
        users[userIndex].age=age;
        writedata();
        res.status(200).json({message: 'user updated successfully',data: users[userIndex]});
    }  
})

app.delete('/users/:id',(req,res) => {
    const uid=req.params.id;
    const userIndex=users.findIndex(user=>user.id==uid);
    if(userIndex==-1){
        res.status(404).json({message: 'user not found'});
    }
    else{
        users.splice(userIndex,1);
        writedata();
        res.status(200).json({message: 'user deleted successfully',data: users[userIndex]});
    }  
})
app.listen(9000,()=>{
    console.log('Server is running on port 9000')
});