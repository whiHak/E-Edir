"use server";
import { CreateEdirParams, UpdateEdirParams } from "@/types";
import { connectToDatabase } from "../database";
import Edir, { IEdir } from "../database/models/edir.model";
import User from "../database/models/user.model";
import { addMemberToEdir } from "./user.actions";
import { revalidatePath } from "next/cache";

const populateEdir = (query: any) => {
  return query.populate({
    path: "leader",
    model: User,
    select: "_id firstName lastName",
  });
};

export async function createEdir({ edir, userId }: CreateEdirParams) {
  try {
    await connectToDatabase();

    const leader = await User.findById(userId.toString());
    if (!leader) throw new Error("Leader Not Found");

    const newEdir = await Edir.create({
      ...edir,
      leader: userId,
    });
    addMemberToEdir({
      username: leader.username,
      edir: newEdir,
      path: `/edirs/${newEdir._id.toString()}`,
    });
    return JSON.parse(JSON.stringify(newEdir));
  } catch (error) {
    console.log(error);
  }
}

export async function getEdirById(edirId: string) {
  try {
    await connectToDatabase();

    const edir = await populateEdir(Edir.findById(edirId));

    if (!edir) throw new Error("Edir not found");

    return JSON.parse(JSON.stringify(edir));
  } catch (error) {
    console.log(error);
  }
}

export async function setAuditor({
  username,
  edir,
}: {
  username: string;
  edir: IEdir;
}) {
  try {
    await connectToDatabase();

    const auditor = await User.findOne({ username: username });
    if (!auditor) {
      return "Auditor not found";
    }

    const updateData = edir.auditor
      ? { auditor: auditor._id }
      : { ...edir, auditor: auditor._id };
    const updatedEdir = await Edir.findByIdAndUpdate(edir._id, updateData, {
      new: true,
      runValidators: true,
      strict: false,
    });

    if (!updatedEdir) {
      return "Edir not found";
    }

    return "Auditor updated successfully";
  } catch (error) {
    console.error("Error updating Edir:", error);
    return "Failed to update auditor due to an internal error";
  }
}

export async function updateEdir({ userId, edir, path }: UpdateEdirParams) {
  try {
    await connectToDatabase();

    const edirToUpdate = await Edir.findById(edir._id);
    if (!edirToUpdate || edirToUpdate.leader.toHexString() !== userId) {
      return { success: false, message: "Unauthorized or event not found" };
    }

    const updatedEdir = await Edir.findByIdAndUpdate(
      edir._id,
      { ...edir },
      { new: true }
    );
    revalidatePath(path);

    return { success: true, payload: JSON.parse(JSON.stringify(updatedEdir)) };
  } catch (error) {
    console.log(error);
  }
}

export async function deleteEdir({
  edirId,
  path,
  userId,
}: {
  edirId: string;
  path: string;
  userId: string;
}) {
  try {
    await connectToDatabase();

    const deletedEdir = await Edir.findByIdAndDelete(edirId);
    if (!deletedEdir) {
      console.log("Edir not found or already deleted.");
      return false; // Returning false if the Edir is not found or could not be deleted
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { edirId: null },
      { new: true, runValidators: true, strict: false }
    );
    if (!user) {
      console.log("User not found or update failed.");
      return false;
    }

    console.log(user);
    revalidatePath(path);
    return true;
  } catch (error) {
    console.log("Error in deleteEdir:", error);
    return false;
  }
}
