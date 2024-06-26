import { model, connection, Schema } from 'mongoose';
import  validator  from 'validator';
type UserType = {
    user: string,
    email: string,
    password: string,
}   

const schema = new Schema<UserType>({
    user: { 
        type: String,
        required:[true, '(user) Campo Obrigatorio'],
        minlength: [4, '(user) Campo tem que ter no minimo 4 caracteres'],
    },
    email: {
        type: String,
        required:[true, '(email) Campo Obrigatorio'],
        unique: true,
        validate: [validator.isEmail, '(email) Insira um email valido']
    },
    password: {
        type: String,
        required:[true, 'Campo Obrigatorio'],
        minlength: [3, 'Campo tem que ter no minimo 4 caracteres'],
    }
});

const modelName:string = 'user';



export default (connection && connection.models[modelName])?
    connection.models[modelName] :
    model<UserType>(modelName, schema);
