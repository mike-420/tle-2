import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "src/neighborhood.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);
  return NextResponse.json(data);
}
