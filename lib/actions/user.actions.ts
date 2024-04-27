"use server";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import { AddMemberToEdirParams, CreateuserPrams } from "@/types";
import { ObjectId } from "mongodb";

const populateUser = (query: any) => {
  return query.populate({
    path: "edirId",
    model: User,
    select: "_id title location imageUrl price",
  });
};

export const createuser = async (user: CreateuserPrams) => {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = async(userId: string) => {
  try {
    await connectToDatabase();

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.error(error);
  }
}

export const addMemberToEdir = async ({
  username,
  edir,
  path,
}: AddMemberToEdirParams) => {
  try {
    await connectToDatabase();

    const newMember = await User.findOne({ username: username });
    if (!newMember) {
      return"User Not Found!!!";
    }

    if (!newMember.edirId || newMember.edirId !== edir._id.toString()) {
      const updatedUser = await User.findByIdAndUpdate(
        newMember._id,
        { edirId: new ObjectId(edir._id) },
        { new: true, runValidators: true, strict: false }
      );

      if (!updatedUser) {
        return "Failed to update user with new edir ID.";
      }

      console.log(updatedUser);
      revalidatePath(path);
      return "User added successfully";
    } else {
      return "User already a member of this edir.";
    }
  } catch (error) {
    console.error("Error adding member to edir:", error);
    return "Error adding member to edir";

  }
};
