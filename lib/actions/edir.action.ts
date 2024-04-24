"use server";
import { connectToDatabase } from "../database";
import Edir, { IEdir } from "../database/models/edir.model";
import User from "../database/models/user.model";

type CreateEdirParams = {
  userId: string;
  edir: {
    title: string;
    description: string;
    location: string;
    imageUrl: string;
    price: string;
  };
};

const populateEdir = (query: any) => {
  return query.populate({
    path: "leader",
    model: User,
    select: "_id firstName lastName",
  });
};
const populateEdir2 = (query: any) => {
  return query.populate({
    path: "auditor",
    model: User,
    select: "_id firstName lastName",
  });
};

export async function createEdir({ edir, userId }: CreateEdirParams) {
  try {
    await connectToDatabase();

    const leader = await User.findById(userId);
    if (!leader) throw new Error("Leader Not Found");

    const newEdir = await Edir.create({
      ...edir,
      leader: userId,
      auditor: "",
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
    if (!auditor) throw new Error("Auditor not found");

    if (!edir.auditor) {
      const updatedEdir = await Edir.findByIdAndUpdate(
        edir._id,
        { ...edir, auditor: auditor._id },
        { new: true, runValidators: true, strict: false }
      )

      if (!updatedEdir) throw new Error("Edir not found");

      return JSON.parse(JSON.stringify(updatedEdir));
    } else {
      const updatedEdir = await Edir.findByIdAndUpdate(
        edir._id,
        { auditor: auditor._id },
        { new: true, runValidators: true, strict: false }
      )

      if (!updatedEdir) throw new Error("Edir not found");

      return JSON.parse(JSON.stringify(updatedEdir));
    }
  } catch (error) {
    console.error("Error updating Edir:", error);
    throw error;
  }
}
