import { connectToDB } from "@/lib/connectToDB";
import { CourseSection } from "@/lib/models/home-models";
import { NextResponse } from "next/server";

const PUBLIC_URL = process.env.PUBLIC_URL || "";

export async function GET() {
  await connectToDB();
  const course = await CourseSection.find();
  const response = NextResponse.json(course);
  // response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Origin", PUBLIC_URL);
  return response;
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Connect to the database
    await connectToDB();
    await CourseSection.create(data);
    return NextResponse.json({ message: "Data created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating data:", error);
    return NextResponse.json(
      { message: "Failed to create data" },
      { status: 500 },
    );
  }
}
