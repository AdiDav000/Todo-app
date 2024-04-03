import jwt from 'jsonwebtoken';

export const setToken=(user_id)=>{
    jwt.sign({id: user_id}, process.env.secret)
}

export const verifyToken=()=>{

}