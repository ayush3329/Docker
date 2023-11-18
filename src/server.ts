import express, {Request, Response} from 'express'


const app = express();
const PORT:number = 3000;



app.get('/', (req, res)=>{

    res.status(200).json({
        sucess: true,
        msg: "Sucessfull"
    })
    
})



app.listen(PORT, ()=>{
    console.log(`server started sucessfully at PORT  ${PORT}`);
})