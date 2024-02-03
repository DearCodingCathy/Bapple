import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/dbConnect";
import User from "@/app/models/user";
import bcrypt from "bcrypt";

export async function POST(req: { json: () => any; }) {
  await dbConnect();

  const body = await req.json();

  const { name, email, password } = body;

  try {
    await new User({});
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
