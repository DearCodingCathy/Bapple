import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({ time: new Date().toLocaleString() });
}


//uxA5Uhe0rOFaYrDN

//mongodb+srv://catherineobalogun:uxA5Uhe0rOFaYrDN@cluster0.40r571x.mongodb.net/?retryWrites=true&w=majority