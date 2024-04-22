import { PhoneNumberJSON } from "@clerk/nextjs/server";
import { connectToDatabase } from "../database"
import User from "../database/models/user.model";

type CreateuserPrams = {
    clerkId: string,
    email: string,
    phoneNumber?: PhoneNumberJSON,
    username: string,
    firstName: string,
    lastName: string,
    photo?: string,
}

export const createuser = async(user: CreateuserPrams) => {
    try {
        await connectToDatabase();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));        
    } catch (error) {
        console.error(error)
    }
}