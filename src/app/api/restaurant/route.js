import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const data = await restaurantSchema.find();
  return NextResponse.json({ result: true, data });
}

export async function POST(request) {
  let payload = await request.json();
  await mongoose.connect(connectionStr);  // Removed deprecated options
  const restaurant = new restaurantSchema(payload);
  const result = await restaurant.save();
  return NextResponse.json({ result, success: true });
}

