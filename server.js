import express from 'express';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));
export const initServer=()=>{
    app.listen(3000,()=>{
        console.log("Listening on port 3000");
    })
}

export const router = express.Router();