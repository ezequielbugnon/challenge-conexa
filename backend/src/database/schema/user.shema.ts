import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';


export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    encryptPassword(password: string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
};

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},{timestamps: true})

userSchema.methods.encryptPassword = async (password) : Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

export default model<IUser>("User", userSchema);